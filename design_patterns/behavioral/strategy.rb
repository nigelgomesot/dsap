# REF: https://refactoring.guru/design-patterns/strategy/ruby/example

# Problem: Allow to interchange the underlying algorithms of an object
# Solution: Define a family of algorithms, put them in separate classes & make their objects interchangeable.

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

# PENDING
