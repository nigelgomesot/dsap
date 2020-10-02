# REF: https://refactoring.guru/design-patterns/prototype/ruby/example

# Problem: Copy existing objects without making code dependent on their classes
# Solution: delegate the cloning process to the actual objects that are being cloned.

class Prototype
  attr_accessor :primitive, :component, :circular_reference

  def initialize
    @primitive = nil
    @component = nil
    @circular_reference = nil
  end

  def clone
    @component = deep_copy(@component)

    @circular_reference = deep_copy(@circular_reference)
    @circular_reference.prototype = self
    deep_copy(self)
  end

  private

  def deep_copy(object)
    Marshal.load(Marshal.dump(object))
  end
end

class ComponentWithBackReference
  attr_accessor :prototype

  def initialize(prototype)
    @prototype = prototype
  end
end

# PENDING
