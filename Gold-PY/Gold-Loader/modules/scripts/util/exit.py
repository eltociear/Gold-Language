import sys 

def kill():
    sys.exit("Closing")

sys.modules[__name__] = kill
