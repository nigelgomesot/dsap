# REF: https://refactoring.guru/design-patterns/observer/ruby/example

# Problem: Allow object to notify other objects about changes in it's state
# Solution: Create publisher & subscriber objects & allow subscribers to subscribe/unsubscribe from publisher events

require 'test/unit/assertions'
include Test::Unit::Assertions

class Subject
  def attach(observer)
    raise NotImplementedError
  end

  def detach(observer)
    raise NotImplementedError
  end

  def notify
    raise NotImplementedError
  end
end

class ConcreteSubject < Subject
  attr_accessor :state

  def initialize
    @observers = []
  end

  def attach(observer)
    @observers << observer
  end

  def detach(observer)
    @observers.delete(observer)
  end

  def notify
    @observers.map {|observer| observer.update(self)}
  end

  def do_something(state)
    @state = state

    notify
  end
end

class Observer
  def update(_subject)
    raise NotImplementedError
  end
end

class ConcreteObserverA < Observer
  def update(subject)
    return 'concrete observer a' if subject.state < 3
  end
end

class ConcreteObserverB < Observer
  def update(subject)
    return 'concrete observer b' if subject.state > 2
  end
end

subject = ConcreteSubject.new

observer_a =  ConcreteObserverA.new
subject.attach(observer_a)

observer_b =  ConcreteObserverB.new
subject.attach(observer_b)

subject.do_something(2)

assert_equal subject.do_something(2), ['concrete observer a', nil]
assert_equal subject.do_something(3), [nil, 'concrete observer b']

subject.detach(observer_a)
assert_equal subject.do_something(2), [nil]
subject.detach(observer_b)
assert_equal subject.do_something(3), []

puts('done.')
