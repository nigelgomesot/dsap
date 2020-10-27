# REF: https://refactoring.guru/design-patterns/command/ruby/example

# Problem: supporting mulltple request types
# Solution: convert requests into objects

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

# PENDING:
