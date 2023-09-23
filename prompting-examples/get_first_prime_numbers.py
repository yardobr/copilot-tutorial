# create a function called get_first_prime_numbers that takes a number as an argument and returns a list of the first n prime numbers
# prime numbers are numbers that are only divisible by 1 and themselves
# the first prime number is 2
# the first 10 prime numbers are [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
# I also want to measure the time it takes for function to execute. print the diff between start and end time

import time

def get_first_prime_numbers(n):
    prime_numbers = []
    i = 2
    while len(prime_numbers) < n:
        is_prime = True
        for prime_number in prime_numbers:
            if i % prime_number == 0:
                is_prime = False
                break
        if is_prime:
            prime_numbers.append(i)
        i += 1
    return prime_numbers

start_time = time.time()
print(get_first_prime_numbers(1000))
end_time = time.time()
print(f"Execution time in seconds : {end_time - start_time}")