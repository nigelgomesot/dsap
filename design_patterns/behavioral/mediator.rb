# REF: https://refactoring.guru/design-patterns/mediator/ruby/example

# Problem: Reduce coupling between independent objects by reducing direct communication
# Solution: Introduce an object which helps the objects to communicatae indirectly via itself.

require 'test/unit/assertions'
include Test::Unit::Assertions

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
  attr_accessor :mediator, :results

  def initialize(mediator=nil)
    @mediator = mediator
  end
end

class Component1 < BaseComponent
  def do_a
    $results.push 'component1:do_a'
    $results.push @mediator.notify(self, 'A')
  end

  def do_b
    $results.push 'component1:do_b'
    $results.push @mediator.notify(self, 'B')
  end
end

class Component2 < BaseComponent
  def do_c
    $results.push 'component2:do_c'
    $results.push @mediator.notify(self, 'C')
  end

  def do_d
    $results.push 'component2:do_d'
    $results.push @mediator.notify(self, 'D')
  end
end

def client
  c1 = Component1.new
  c2 = Component2.new
  ConcreteMediator.new(c1, c2)

  [c1, c2]
end

c1, c2 = *client

$results = []
c1.do_a
assert_equal $results, []

$results = []
c2.do_d
assert_equal $results, []

# PENDING
