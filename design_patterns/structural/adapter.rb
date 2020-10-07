# REF: https://refactoring.guru/design-patterns/adapter/ruby/example

# Problem: Allow objects with incompatbile interfaces to collaborate
# Solution: define an object that converts the interface of one object so that another object can understand it.

class Target
  def request
    'target request'
  end
end

class Adaptee
  def request
    'adaptee request'.reverse
  end
end

class Adapter < Target
  def initialize(adaptee)
    @adaptee = adaptee
  end

  def request
    "ADAPTED: #{@adaptee.request.reverse}"
  end
end

# PENDING:
