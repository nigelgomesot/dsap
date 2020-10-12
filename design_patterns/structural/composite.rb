# REF: https://refactoring.guru/design-patterns/composite/ruby/example

# Problem: composing objects in a tree like structure & access them uniformly
# Solution: Break down model into simple elements & containers(complex elements) & define common methods to acces both of them & manage child elements.

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
    @children.append(component)
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
      result.append(child.operation)
    end

    "Branch: #{result.join('+')}"
  end
end

# PENDING
