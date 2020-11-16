# REF: https://refactoring.guru/design-patterns/state/ruby/example

# Problem: Allow an object to change behavior when its internal state changes
# Solution: Extract state related behavior into separate state classes & object delegates state to instance of these state classes.

require 'test/unit/assertions'
include Test::Unit::Assertions

class Context
  attr_accessor :state
  private :state

  def initialize(state)
    transition_to(state)
  end

  def transition_to(state)
    @state = state
    @state.context = self
    @state
  end

  def request1
    @state.handle1
  end

  def request2
    @state.handle2
  end
end

class State
  attr_accessor :context

  def handle1
    raise NotImplementedError
  end

  def handle2
    raise NotImplementedError
  end
end

class ConcreteStateA < State
  def handle1
    @context.transition_to(ConcreteStateB.new)
  end

  def handle2
    'concrete state a:handle2'
  end
end

class ConcreteStateB < State
  def handle1
    'concrete state b:handle1'
  end

  def handle2
    @context.transition_to(ConcreteStateA.new)
  end
end

def client()
  Context.new(ConcreteStateA.new)
end

context = client()

assert_equal context.request1.is_a?(ConcreteStateB), true
assert_equal context.request2.is_a?(ConcreteStateA), true
puts('done')
