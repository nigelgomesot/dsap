# REF: https://refactoring.guru/design-patterns/flyweight/ruby/example

# Problem: allow programs to suppport vast quantities of objects by keeping their memory consumption low
# Solution: Share parts of objects between multiple objects(intrinsic data), & expose methods to compute extrinsic data.

require 'test/unit/assertions'
include Test::Unit::Assertions

class Flyweight
  def initialize(shared_state)
    @shared_state = shared_state
  end

  def operation(unique_state)
    {shared: @shared_state, unique: unique_state}
  end
end

class FlyweightFactory
  def initialize(initial_flyweights)
    @flyweights = {}
    initial_flyweights.each do |state|
      @flyweights[get_key(state)] = Flyweight.new(state)
    end
  end

  def get_key(state)
    state.sort.join('_')
  end

  def get_flyweight(shared_state)
    key = get_key(shared_state)

    if !@flyweights.key?(key)
      @flyweights[key] = Flyweight.new(shared_state)
    end

    @flyweights[key]
  end

  def list_flyweights
    @flyweights.keys
  end
end

def client_add_car_to_db(factory, plates, owner, brand, model, color)
  flyweight = factory.get_flyweight([brand, model, color])

  flyweight.operation([plates, owner])
end

factory = FlyweightFactory.new([
  %w[Chevrolet Camaro2018 pink],
  ['Mercedes Benz', 'C300', 'black'],
  ['Mercedes Benz', 'C500', 'red'],
  %w[BMW M5 red],
  %w[BMW X6 white]
])

expected_flyweights = [
  'Camaro2018_Chevrolet_pink',
  'C300_Mercedes Benz_black',
  'C500_Mercedes Benz_red',
  'BMW_M5_red',
  'BMW_X6_white'
]
assert_equal factory.list_flyweights, expected_flyweights

expected_operation = {
  shared: ["BMW","M5","red"], unique: ["CL234IR","James Doe"]
}
assert_equal client_add_car_to_db(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red'), expected_operation
puts('done.')
