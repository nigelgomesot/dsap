# REF: https://refactoring.guru/design-patterns/factory-method/ruby/example

# Problem: Create objects without the need to specify the exact class of objects to be created.
# Solution: use another method(factory_method) instead of new(constructor) to create objects.

require "test/unit/assertions"
include Test::Unit::Assertions

class Factory
  def factory_method
    raise NotImplementedError
  end

  def operation
    product = factory_method

    product.operation
  end
end

class ConcreteFactory1 < Factory
  def factory_method
    Product1.new
  end
end

class ConcreteFactory2 < Factory
  def factory_method
    Product2.new
  end
end

class Product1
  def operation
    "Product 1 operation"
  end
end

class Product2
  def operation
    "Product 2 operation"
  end
end

def client(factory)
  factory.operation
end

assert client(ConcreteFactory1.new), "Product 1 operation"
assert client(ConcreteFactory2.new), "Product 2 operation"
puts "done"
