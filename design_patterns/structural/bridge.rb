# REF: https://refactoring.guru/design-patterns/bridge/ruby/example

# Problem: Split a class having multiple dimensions: abstraction & implementation.
# Solution: Extract one dimension(implementation) into a separate class & reference it from another class(abstraction).

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

# PENDING:

