# REF: https://refactoring.guru/design-patterns/memento/ruby/example

# Problem: Allow to save & restore previous state of an object without revealing implementation details
# Solution: Use immutable object which mirrors fields of original object & add methods to store & retrieve state.


require 'securerandom'
require 'test/unit/assertions'
include Test::Unit::Assertions

class Originator
  attr_accessor :state
  private :state

  def initialize(state)
    @state = state
  end

  def get_state
    @state
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

class ConcreteMemento < Memento
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

originator = Originator.new('originator')
caretaker = Caretaker.new(originator)

caretaker.backup
assert_equal originator.get_state, 'originator'
previous_state = originator.get_state
originator.do_something
assert_match previous_state, caretaker.get_history.last

caretaker.backup
previous_state = originator.get_state
originator.do_something
assert_match previous_state, caretaker.get_history.last

caretaker.backup
previous_state = originator.get_state
originator.do_something
assert_match previous_state, caretaker.get_history.last

previous_state = caretaker.get_history.last
caretaker.undo
assert_match originator.get_state, previous_state

previous_state = caretaker.get_history.last
caretaker.undo
assert_match originator.get_state, previous_state

puts('done.')
