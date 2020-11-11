# REF: https://refactoring.guru/design-patterns/state/ruby/example

# Problem: Allow an object to change behavior when its internal state changes
# Solution: Extract state related behavior into separate state classes & object delegates state to instance of these state classes.

class Context
  attr_accessor :state
  private :state

  def initialize(state)
    transition_to(state)
  end

  def transition_to(state)
    @state = state
    @state.context = self
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

# PENDING.

