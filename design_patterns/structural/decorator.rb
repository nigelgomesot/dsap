# REF: https://refactoring.guru/design-patterns/decorator/ruby/example

# Problem: need to alter an object's behavior without extending it
# Solution: attach new behavior to objectss by placing these objects insside special wrapper objects that contain new behaviors

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

# PENDING:

