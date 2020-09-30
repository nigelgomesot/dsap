# REF: https://refactoring.guru/design-patterns/builder/ruby/example

# Problem: Initialization of a object with multiple fields, objects
# Solution: allows constructing object step by step


class Builder

  def produce_part_a
    raise NotImplementedError
  end

  def produce_part_b
    raise NotImplementedError
  end

  def produce_part_c
    raise NotImplementedError
  end
end

class ConcreteBuilder1 < Builder
  def initialize
    reset
  end

  def reset
    @product = Product1.new
  end

  def product
    product = @product
    reset
    product
  end

  def produce_part_a
    @product.add('PartA1')
  end

  def produce_part_b
    @product.add('PartB1')
  end

  def produce_part_c
    @product.add('PartC1')
  end
end

# PENDING:
