# REF: https://refactoring.guru/design-patterns/builder/ruby/example

# Problem: Initialization of a object with multiple fields, objects
# Solution: allows constructing object step by step

require 'test/unit/assertions'
include Test::Unit::Assertions

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

class Product1
  def initialize
    @parts = []
  end

  def add(part)
    @parts << part
  end

  def list_parts
    @parts.join(',')
  end
end

builder1 = ConcreteBuilder1.new

def minimal_viable_product_client(builder)
  builder.produce_part_a
  builder.product.list_parts
end

def full_featured_product_client(builder)
  builder.produce_part_a
  builder.produce_part_b
  builder.produce_part_c
  builder.product.list_parts
end

assert_equal minimal_viable_product_client(builder1), 'PartA1'
assert_equal full_featured_product_client(builder1), 'PartA1,PartB1,PartC1'

puts 'done'
