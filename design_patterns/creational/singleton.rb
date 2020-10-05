# REF https://refactoring.guru/design-patterns/singleton/ruby/example

# Problem: Ensure only 1 object of a class exists & provide a single point of access to all other other
# Solution: Make constructor priate & specify a specialized method which creates or returns only 1 object.

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

  # PENDING
end

