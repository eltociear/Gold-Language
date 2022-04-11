import sys

def amIOn():
    print("Yes. You are on.")

sys.modules[__name__] = amIOn
