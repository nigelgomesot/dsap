# REF https://refactoring.guru/design-patterns/singleton/ruby/example

# Problem: Ensure only 1 object of a class exists & provide a single point of access to all other other
# Solution: Make constructor priate & specify a specialized method which creates or returns only 1 object.

require 'test/unit/assertions'
include Test::Unit::Assertions

class Singleton
  attr_reader :value

  @instance_mutex = Mutex.new

  private_class_method :new

  def initialize(value)
    @value = value
  end

  def self.instance(value)
    return @instance if @instance

    @instance_mutex.synchronize do
      @instance ||= new(value)
    end

    @instance
  end
end

@result = []

def client(value)
  @result.push(Singleton.instance(value))
end

process1 = Thread.new { client('foo') }
process2 = Thread.new { client('bar') }
process1.join
process2.join

assert_equal @result.length, 2
assert_equal @result[0], @result[1]
puts('done')
