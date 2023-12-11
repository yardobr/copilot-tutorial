# Determines whether a credit card number is valid.
#
# This method takes a credit card number as input and checks if it is a valid credit card number.
# It performs the Luhn algorithm to validate the credit card number.
#
# Parameters:
# - number: The credit card number to be validated.
#
# Returns:
# - true if the credit card number is valid, false otherwise.
def valid_credit_card?(number)
    digits = number.to_s.chars.map(&:to_i)
  
    sum = digits.reverse.each_with_index.sum do |digit, index|
      index.odd? ? (digit * 2).divmod(10).sum : digit
    end
  
    sum % 10 == 0
  end