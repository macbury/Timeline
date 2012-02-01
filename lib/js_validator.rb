module JsValidator

  def self.build_hash(klass)
    out = {}
    klass._validators.each do |field, validators|
      out[field] = validators.map { |validator| { type: validator.class.to_s.demodulize.underscore, options: validator.options } }
    end

    out
  end

end