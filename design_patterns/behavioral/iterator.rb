# REF: https://refactoring.guru/design-patterns/iterator/ruby/example

# Problem:  allow sequential traversal through a complex data structure without exposing its internal details
# Solution: create an Iterator object which has the traversal details & clients interact with this object for data structure traversal

require 'test/unit/assertions'
include Test::Unit::Assertions

class AlphabeticalOrderIterator
  include Enumerable

  attr_accessor :reverse
  private :reverse

  attr_accessor :collection
  private :collection

  def initialize(collection, reverse = false)
    @collection = collection
    @reverse = reverse
  end

  def each(&block)
    return @collection.reverse.each(&block) if reverse

    @collection.each(&block)
  end
end

class WordsCollection
  attr_accessor :collection
  private :collection

  def initialize(collection = [])
    @collection = collection
  end

  def iterator
    AlphabeticalOrderIterator.new(@collection)
  end

  def reverse_iterator
    AlphabeticalOrderIterator.new(@collection, true)
  end

  def add_item(item)
    @collection << item
  end
end

def client()
  collection = WordsCollection.new()
  collection.add_item('First')
  collection.add_item('Second')
  collection.add_item('Third')

  collection
end

collection = client

results = []
collection.iterator.each { |item| results << item }
assert_equal results, ['First', 'Second', 'Third']

results = []
collection.reverse_iterator.each { |item| results << item }
assert_equal results, ['Third', 'Second', 'First']
puts('done.')
