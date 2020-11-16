# REF: https://refactoring.guru/design-patterns/abstract-factory/ruby/example

# Problem: Creating entire product families withoout specifying concrete classes
# Solution: usse the factory object instad of caling new(constructor) of the products directly.

require 'test/unit/assertions'
include Test::Unit::Assertions

class AbstractFactory
  def create_product_a
    raise NotImplementedError
  end

  def create_product_b
    raise NotImplementedError
  end
end

class ConcreteFactory1 < AbstractFactory
  def create_product_a
    ConcreteProductA1.new
  end

  def create_product_b
    ConcreteProductB1.new
  end
end

class ConcreteFactory2 < AbstractFactory
  def create_product_a
    ConcreteProductA2.new
  end

  def create_product_b
    ConcreteProductB2.new
  end
end

class AbstractProductA
  def useful_function_a
    raise NotImplementedError
  end
end

class ConcreteProductA1 < AbstractProductA
  def useful_function_a
    'result of product A1'
  end
end

class ConcreteProductA2 < AbstractProductA
  def useful_function_a
    'result of product A2'
  end
end

class AbstractProductB
  def useful_function_b
    raise NotImplementedError
  end

  def another_useful_function_b(collaborator)
    raise NotImplementedError
  end
end

class ConcreteProductB1 < AbstractProductB
  def useful_function_b
    'result of product B1'
  end

  def another_useful_function_b(collaborator)
    result = collaborator.useful_function_a
    "result of product B1 with collaboration: #{result}"
  end
end

class ConcreteProductB2 < AbstractProductB
  def useful_function_b
    'result of product B2'
  end

  def another_useful_function_b(collaborator)
    result = collaborator.useful_function_a
    "result of product B2 with collaboration: #{result}"
  end
end

def client(factory)
  product_a = factory.create_product_a
  product_b = factory.create_product_b

  result = []
  result.push product_a.useful_function_a
  result.push product_b.another_useful_function_b(product_a)

  result
end

result = client(ConcreteFactory1.new)
expected_result = [
  'result of product A1',
  'result of product B1 with collaboration: result of product A1'
]
assert result[0], expected_result[0]
assert result[1], expected_result[1]

result = client(ConcreteFactory2.new)
expected_result = [
  'result of product A2',
  'result of product B2 with collaboration: result of product A2'
]
assert_equal result[0], expected_result[0]
assert_equal result[1], expected_result[1]
puts "done"
