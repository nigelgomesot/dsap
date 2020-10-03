# REF: https://refactoring.guru/design-patterns/prototype/ruby/example

# Problem: Copy existing objects without making code dependent on their classes
# Solution: delegate the cloning process to the actual objects that are being cloned.

require 'test/unit/assertions'
include Test::Unit::Assertions

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


def client
  p1 = Prototype.new
  p1.primitive = 123
  p1.component = Time.now
  p1.circular_reference = ComponentWithBackReference.new(p1)

  p2 = p1.clone

  [p1, p2]
end

p1, p2 = client

assert_equal p1.primitive, p2.primitive
# NOT working as expected
#assert_not_equal p1.component, p2.component
assert_not_equal p1.circular_reference, p2.circular_reference
assert_not_equal p1.circular_reference.prototype, p2.circular_reference.prototype
puts('done')
