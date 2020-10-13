# REF: https://refactoring.guru/design-patterns/composite/ruby/example

# Problem: composing objects in a tree like structure & access them uniformly
# Solution: Break down model into simple elements & containers(complex elements) & define common methods to acces both of them & manage child elements.

require 'test/unit/assertions'
include Test::Unit::Assertions

class Component
  def parent
    @parent
  end

  def parent=(parent)
    @parent = parent
  end

  def add(component)
    raise NotImplementedError
  end

  def remove(component)
    raise NotImplementedError
  end

  def composite?
    false
  end

  def operation
    raise NotImplementedError
  end
end

class Leaf < Component
  def operation
    'Leaf'
  end
end

class Composite < Component
  def initialize
    @children = []
  end

  def add(component)
    @children.push(component)
    component.parent = self
  end

  def remove(component)
    @children.remove(component)
    component.parent = nil
  end

  def composite?
    true
  end

  def operation
    result = []
    @children.each do |child|
      result.push(child.operation)
    end

    "Branch(#{result.join('+')})"
  end
end

def client(component)
  component.operation
end

tree = Composite.new

branch1 = Composite.new
branch1.add(Leaf.new)
branch1.add(Leaf.new)

branch2 = Composite.new
branch2.add(Leaf.new)
branch2.add(Leaf.new)

tree.add(branch1)
tree.add(branch2)

assert_equal client(tree), 'Branch(Branch(Leaf+Leaf)+Branch(Leaf+Leaf))'
puts('done.')
