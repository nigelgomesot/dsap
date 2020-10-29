# REF: https://refactoring.guru/design-patterns/iterator/ruby/example

# Problem:  allow sequential traversal through a complex data structure without exposing its internal details
# Solution: create an Iterator object which has the traversal details & clients interact with this object for data structure traversal

class AlphabeticalOrderTraversal
  include Enumerable

  attr_accessor :reverse
  private :reverse

  attr_accessor :collection
  private :collection

  def iniitialize(collection, reverse = false)
    @collection = collection
    @reverse = reverse
  end

  def each(&block)
    return @collection.reverse.each(&block) if reverse

    @collection.each(&block)
  end
end

# PENDING


