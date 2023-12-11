require_relative 'valid_credit_card'

# Test cases for valid_credit_card? method
describe '#valid_credit_card?' do
  it 'returns true for a valid credit card number' do
    expect(valid_credit_card?(4111111111111111)).to be true
    expect(valid_credit_card?(5500000000000004)).to be true
    expect(valid_credit_card?(6011000000000004)).to be true
    expect(valid_credit_card?(1234567890123452)).to be true
  end

  it 'returns false for an invalid credit card number' do
    expect(valid_credit_card?(1234567890123456)).to be false
    expect(valid_credit_card?(1234567890123459)).to be false
  end
end