# REF: https://refactoring.guru/design-patterns/observer/ruby/example

# Problem: Allow object to notify othr objects about changes in it's state
# Solution: Create publisher & subscriber objects & allow subscribers to subscribe/unsubscribe from publisher events

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
    observers.delete(observer)
  end

  def notify
    @observers.each {|observer| observer.update(self)}
  end

  def do_something
    @state = rand(0..10)

    notify
  end
end

# PENDING
