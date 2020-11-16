# REF: https://refactoring.guru/design-patterns/strategy/ruby/example

# Problem: Allow to interchange the underlying algorithms of an object
# Solution: Define a family of algorithms, put them in separate classes & make their objects interchangeable.

require 'test/unit/assertions'
include Test::Unit::Assertions

class Context
  attr_writer :strategy

  def initialize(strategy)
    @strategy = strategy
  end

  def strategy=(strategy)
    @strategy = strategy
  end

  def do_something
    @strategy.do_algorithm(%w[a b c d e])
  end
end

class Strategy
  def do_something(_data)
    raise NotImplementedError
  end
end

class ConcreteStrategyA < Strategy
  def do_algorithm(data)
    data.sort
  end
end

class ConcreteStrategyB < Strategy
  def do_algorithm(data)
    data.sort.reverse
  end
end

context = Context.new(ConcreteStrategyA.new)
assert_equal context.do_something, %w[a b c d e]

context.strategy = ConcreteStrategyB.new
assert_equal context.do_something, %w[e d c b a]

puts('done.')
