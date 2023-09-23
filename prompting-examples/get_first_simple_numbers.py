# create a function called get_first_simple_numbers that takes a number as an argument and returns a list of the first n simple numbers
# simple numbers are numbers that are only divisible by 1 and themselves
# the first simple number is 2
# the first 10 simple numbers are [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
# I also want to measure the time it takes for function to execute. print the diff between start and end time

import time

def get_first_simple_numbers(n):
    simple_numbers = []
    i = 2
    while len(simple_numbers) < n:
        is_simple = True
        for simple_number in simple_numbers:
            if i % simple_number == 0:
                is_simple = False
                break
        if is_simple:
            simple_numbers.append(i)
        i += 1
    return simple_numbers

start_time = time.time()
print(get_first_simple_numbers(10000))
end_time = time.time()
print(f"Execution time in seconds : {end_time - start_time}")