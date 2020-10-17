# REF: https://refactoring.guru/design-patterns/facade/ruby/example

# Problem: provide a simplified & limited interface to a complex system
# Solution: Implement a new class which has limited interface & redirects client calls to approproate objects in subsystem

require 'test/unit/assertions'
include Test::Unit::Assertions

class Facade
  def initialize(subsystem1, subsystem2)
    @subsystem1 = subsystem1
    @subsystem2 = subsystem2
  end

  def operation
    results = []
    results.push('initialize facade')
    results.push(@subsystem1.operation_1)
    results.push(@subsystem2.operation_1)
    results.push('perform operations')
    results.push(@subsystem1.operation_2)
    results.push(@subsystem2.operation_2)

    results
  end
end

class Subsystem1
  def operation_1
    'subsystem 1 operation 1'
  end

  def operation_2
    'subsystem 1 operation 2'
  end
end

class Subsystem2
  def operation_1
    'subsystem 2 operation 1'
  end

  def operation_2
    'subsystem 2 operation 2'
  end
end

def client(facade)
  facade.operation
end

subsystem1 = Subsystem1.new()
subsystem2 = Subsystem2.new()

facade = Facade.new(subsystem1, subsystem2)

expected_results = [
  'initialize facade',
  'subsystem 1 operation 1',
  'subsystem 2 operation 1',
  'perform operations',
  'subsystem 1 operation 2',
  'subsystem 2 operation 2',
]

assert_equal client(facade), expected_results
puts('done')
