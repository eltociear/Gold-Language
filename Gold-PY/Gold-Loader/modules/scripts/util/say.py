import sys

def say(input):
    print(input)

sys.modules[__name__] = say
