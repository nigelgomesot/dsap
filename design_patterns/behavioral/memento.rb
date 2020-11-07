# REF: https://refactoring.guru/design-patterns/memento/ruby/example

# Problem: Allow to save & restore previous state of an object without revealing implementation details
# Solution: Use immutable object which mirrors fields of original object & add methods to store & retrieve state.


require 'securerandom'

class Originator
  attr_accessor :state
  private :state

  def initialize(state)
    @state = state
  end

  def do_something
    @state = SecureRandom.uuid
  end

  def save
    ConcreteMemento.new(@state)
  end

  def restore(memento)
    @state = memento.state
  end
end

class Memento
  def name
    raise NotImplementedError
  end

  def date
    raise NotImplementedError
  end
end

class ConcreteMemeno < Memento
  attr_reader :state, :date

  def initialize(state)
    @state = state
    @date = Time.now.strftime('%F %T')
  end

  def name
    "#{date}/#{@state}"
  end
end

class Caretaker
  def initialize(originator)
    @mementos = []
    @originator = originator
  end

  def backup
    @mementos << @originator.save
  end

  def undo
    return if @mementos.empty?

    memento = @mementos.pop

    begin
      @originator.restore(memento)
    rescue StandardError
      undo
    end
  end

  def get_history
    @mementos.map {|memento| memento.name}
  end
end

# PENDING.
