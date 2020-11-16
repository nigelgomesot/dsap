# REF: https://refactoring.guru/design-patterns/command/ruby/example

# Problem: supporting mulltple request types
# Solution: convert requests into objects

require 'test/unit/assertions'
include Test::Unit::Assertions

class Command
  def execute
    raise NotImplementedError
  end
end

class SimpleCommand < Command
  def initialize(payload)
    @payload = payload
  end

  def execute
    ['execute simple payload', @payload]
  end
end

class ComplexCommand < Command
  def initialize(receiver, a, b)
    @receiver = receiver
    @a = a
    @b = b
  end

  def execute
    [
      'execute complex payload',
      @receiver.do_something(@a),
      @receiver.do_something(@b)
    ]
  end
end

class Receiver
  def do_something(task)
    "receiver do something #{task}"
  end
end

class Invoker
  def on_start=(command)
    @on_start = command
  end

  def on_finish=(command)
    @on_finish = command
  end

  def do_somethng_important
    @results = []
    @results.push(@on_start.execute) if @on_start.is_a? Command
    @results.push('do something important')
    @results.push(@on_finish.execute) if @on_finish.is_a? Command

    @results
  end
end

def client
  invoker = Invoker.new
  invoker.on_start = SimpleCommand.new('simple command')
  receiver = Receiver.new
  invoker.on_finish = ComplexCommand.new(receiver, 'complex command a', 'complex command b')

  invoker
end

expected_result = [
  ["execute simple payload", "simple command"],
  "do something important",
  ["execute complex payload", "receiver do something complex command a", "receiver do something complex command b"]
]
assert_equal client.do_somethng_important, expected_result
puts('done.')
