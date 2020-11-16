# REF: https://refactoring.guru/design-patterns/visitor/ruby/example

# Problem: Allow to separate algorithms from objects on which they operate
# Solution: Declare visitor interface with 1 concrete method for each class, add a accept method in each existing class & call the visitor concrete method by passing class object

require 'test/unit/assertions'
include Test::Unit::Assertions

class Component
  def accept(_visitor)
    raise NotImplementedError
  end
end

class ConcreteComponentA < Component
  def accept(visitor)
    visitor.visit_concrete_component_a(self)
  end

  def do_something
    'A'
  end
end

class ConcreteComponentB < Component
  def accept(visitor)
    visitor.visit_concrete_component_b(self)
  end

  def do_something
    'B'
  end
end

class Visitor
  def visit_concrete_component_a(_element)
    raise NotImplementedError
  end

  def visit_concrete_component_b(_element)
    raise NotImplementedError
  end
end

class ConcreteVisitor1 < Visitor
  def visit_concrete_component_a(element)
    [element.do_something, '1']
  end

  def visit_concrete_component_b(element)
    [element.do_something, '1']
  end
end

class ConcreteVisitor2 < Visitor
  def visit_concrete_component_a(element)
    [element.do_something, '2']
  end

  def visit_concrete_component_b(element)
    [element.do_something, '2']
  end
end

def client_code(components, visitor)
  results = []
  components.each do |component|
    results << component.accept(visitor)
  end

  results
end

components = [ConcreteComponentA.new, ConcreteComponentB.new]

visitor1 = ConcreteVisitor1.new
assert_equal client_code(components, visitor1), [["A", "1"], ["B", "1"]]

visitor2 = ConcreteVisitor2.new
assert_equal client_code(components, visitor2), [["A", "2"], ["B", "2"]]

puts('done.')
