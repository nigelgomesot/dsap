# REF: https://refactoring.guru/design-patterns/bridge/ruby/example

# Problem: Split a class having multiple dimensions: abstraction & implementation.
# Solution: Extract one dimension(implementation) into a separate class & reference it from another class(abstraction).

require 'test/unit/assertions'
include Test::Unit::Assertions

class Abstraction
  def initialize(implementation)
    @implementation = implementation
  end

  def operation
    "base abstraction operation: #{@implementation.operation_implementation}"
  end
end

class ExtendedAbstraction < Abstraction
  def operation
    "extended abstraction operation: #{@implementation.operation_implementation}"
  end
end

class Implementation
  def operation_implementation
    raise NotImplementedError
  end
end

class ConcreteImplementationA < Implementation
  def operation_implementation
    'concrete implementation A'
  end
end

class ConcreteImplementationB < Implementation
  def operation_implementation
    'concrete implementation B'
  end
end

def client(abstraction)
  abstraction.operation
end

implementation_a = ConcreteImplementationA.new
abstraction_a = Abstraction.new(implementation_a)

implementation_b = ConcreteImplementationB.new
abstraction_b = ExtendedAbstraction.new(implementation_b)

assert_equal client(abstraction_a), 'base abstraction operation: concrete implementation A'
assert_equal client(abstraction_b), 'extended abstraction operation: concrete implementation B'
puts('done.')
