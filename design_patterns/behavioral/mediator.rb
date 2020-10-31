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
    case event
    when 'A'
      @component2.do_c
    when 'D'
      @component1.do_b
      @component2.do_c
    end
  end
end

class BaseComponent
  attr_accessor :mediator

  def initialize(mediator=nil)
    @mediator = mediator
  end
end

# PENDING
