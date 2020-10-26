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
      'eexecute complex payload',
      @receiver.do_something(@a),
      @receiver.do_something(@b)
    ]
  end
end

# PENDING:
