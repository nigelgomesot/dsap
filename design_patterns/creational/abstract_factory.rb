# REF: https://refactoring.guru/design-patterns/abstract-factory/ruby/example

# Problem: Creating entire product families withoout specifying concrete classes
# Solution: usse the factory object instad of caling new(constructor) of the products directly.

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

class ConreteProductA1 < AbstractProductA
  def useful_function_a
    'result of product A1'
  end
end

class ConreteProductA2 < AbstractProductA
  def useful_function_a
    'result of product A2'
  end
end

# PENDING:
