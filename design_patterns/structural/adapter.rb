# REF: https://refactoring.guru/design-patterns/adapter/ruby/example

# Problem: Allow objects with incompatbile interfaces to collaborate
# Solution: define an object that converts the interface of one object so that another object can understand it.

require 'test/unit/assertions'
include Test::Unit::Assertions

class Target
  def request
    'target request'
  end
end

class Adaptee
  def request
    'adaptee request'.reverse
  end
end

class Adapter < Target
  def initialize(adaptee)
    @adaptee = adaptee
  end

  def request
    "ADAPTED: #{@adaptee.request.reverse}"
  end
end

def client(target)
  target.request
end

target = Target.new()
request = client(target)
assert_equal request, 'target request'

adaptee = Adaptee.new()
request = client(adaptee)
assert_equal request, 'adaptee request'.reverse

adapter = Adapter.new(adaptee)
request = client(adapter)
assert_equal request, 'ADAPTED: adaptee request'

puts('done')
