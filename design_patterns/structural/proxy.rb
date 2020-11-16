# REF: https://refactoring.guru/design-patterns/proxy/ruby/example

# Problem: provide an object thats acts as a subsitutue/placeholder for another object
# Solution: Define a proxy object that has the same interface as the service, receives client request, does some additional work & then passes request to actual object

require 'test/unit/assertions'
include Test::Unit::Assertions

class Subject
  def request
    raise NotImplementedError
  end
end

class RealSubject < Subject
  def request
    'real subject request'
  end
end

class Proxy < Subject
  def initialize(real_subject)
    @result = []
    @real_subject = real_subject
  end

  def request
    return unless check_access

    @result.push(@real_subject.request)
    log_access

    @result
  end

  def check_access
    @result.push('check access')
  end

  def log_access
    @result.push('log access')
  end
end

def client(subject)
  subject.request
end

real_subject = RealSubject.new()
assert_equal client(real_subject), 'real subject request'

proxy_subject = Proxy.new(real_subject)
expected_request = [
  'check access',
  'real subject request',
  'log access',
]
assert_equal client(proxy_subject), expected_request
puts('done.')
