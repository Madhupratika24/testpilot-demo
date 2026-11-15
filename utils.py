import os

def greet(name):
    return "Hello " + name

def average(numbers, cache=[]):
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)
