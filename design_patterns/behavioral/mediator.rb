# REF: https://refactoring.guru/design-patterns/mediator/ruby/example

# Problem: Reduce coupling between independent objects by reducing direct communication
# Solution: Introduce an object which helps the objects to communicatae indirectly via itself.

class Mediator
  def notify(_sender, _event)
    raise NotImplementedError
  end
end

class ConcreteMediator < Mediator
  def initialize(component1, component2)
    @component1 = component1
    @component1.mediator = self
    @component2 = component2
    @component2.mediator = self
  end

  def notify(_sender, event)
    result = []

    case event
    when 'A'
      result.push @component2.do_c
    when 'D'
      result.push @component1.do_b
      result.push @component2.do_c
    end

    result
  end
end

class BaseComponent
  attr_accessor :mediator, :results

  def initialize(mediator=nil)
    @mediator = mediator
  end
end

class Component1 < BaseComponent
  def do_a
    results.push @mediator.notify(self, 'A')
  end

  def do_b
    results.push @mediator.notify(self, 'B')
  end
end

class Component2 < BaseComponent
  def do_c
    results.push @mediator.notify(self, 'C')
  end

  def do_d
    @mediator.notify(self, 'D')
  end
end

# PENDING
