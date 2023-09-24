def credit_card_checksum(credit_card_number):
    # convert credit card number to a list of ints
    credit_card_number_list = [int(digit) for digit in str(credit_card_number)]
    # reverse the list
    credit_card_number_list.reverse()
    # double every other element in the list
    for i in range(1, len(credit_card_number_list), 2):
        credit_card_number_list[i] *= 2
    # subtract 9 from every element greater than 9
    for i in range(len(credit_card_number_list)):
        if credit_card_number_list[i] > 9:
            credit_card_number_list[i] -= 9
    # sum all values in the list
    sum_of_all_digits = sum(credit_card_number_list)
    # if the sum is divisible by 10, return True
    if sum_of_all_digits % 10 == 0:
        return True
    # otherwise return False
    else:
        return False

# Generate tests for the function credit_card_checksum:
# test 1: credit_card_checksum(79927398713) should return True
# test 2: credit_card_checksum(79927398714) should return False
# test 3: credit_card_checksum(1234567812345670) should return True
# test 4: credit_card_checksum(1234567812345678) should return False

# Write a function that tests the function credit_card_checksum:
# create a function called test_credit_card_checksum that takes no arguments and returns True if all tests pass, otherwise False
# use assert statements to test the function credit_card_checksum
# use try except to catch exceptions
# use the function test_credit_card_checksum to test the function credit_card_checksum

def test_credit_card_checksum():
    try:
        assert credit_card_checksum(79927398713) == True
        assert credit_card_checksum(79927398714) == False
        assert credit_card_checksum(1234567812345670) == True
        assert credit_card_checksum(1234567812345678) == False
        assert credit_card_checksum(424242424242424242) == True
        return True
    except:
        return False

# Run the tests:
print(test_credit_card_checksum())