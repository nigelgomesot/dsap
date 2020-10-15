# REF: https://refactoring.guru/design-patterns/decorator/ruby/example

# Problem: need to alter an object's behavior without extending it
# Solution: attach new behavior to objectss by placing these objects insside special wrapper objects that contain new behaviors

require 'test/unit/assertions'
include Test::Unit::Assertions

class Component
  def operation
    raise NotImplementedError
  end
end

class ConcreteComponent < Component
  def operation
    'Concrete Component'
  end
end

class Decorator < Component
  attr_accessor :component

  def initialize(component)
    @component = component
  end

  def operation
    @component.operation
  end
end

class ConcreteDecoratorA < Decorator
  def operation
    "Concrete Decorator A (#{@component.operation})"
  end
end

class ConcreteDecoratorB < Decorator
  def operation
    "Concrete Decorator B (#{@component.operation})"
  end
end

def client(component)
  component.operation
end

simple = ConcreteComponent.new()
decorator1 = ConcreteDecoratorA.new(simple)
decorator2 = ConcreteDecoratorB.new(decorator1)

assert_equal client(simple), 'Concrete Component'
assert_equal client(decorator1), 'Concrete Decorator A (Concrete Component)'
assert_equal client(decorator2), 'Concrete Decorator B (Concrete Decorator A (Concrete Component))'
puts('done.')
