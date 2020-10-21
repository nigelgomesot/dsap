# REF: https://refactoring.guru/design-patterns/flyweight/ruby/example

# Problem: allow programs to suppport vast quantities of objects by keeping their memory consumption low
# Solution: Share parts of objects between multiple objects(intrinsic data), & expose methods to compute extrinsic data.

class Flyweight
  def initialize(shared_state)
    @shared_state = shared_state
  end

  def operation
    {shared: @shared_state, unique: @unique_state}
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
    @flyweights.keys.join(',')
  end
end

def client_add_car_to_db(factory, plates, owner, brand, model, color)
  flyweight = factory.get_flyweight([brand, model, color])

  flyweight.operation([plates, owner])
end



# PENDING
