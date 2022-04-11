import sys
import os
from threading import Timer

clear = lambda: os.system('cls')

def helloWrd():

    clear()

    helloWrd1()


def helloWrd1():

    clear()

    print("##        ##");
    print("##        ##");
    print("##        ##");
    print("############");
    print("##        ##");
    print("##        ##");
    print("##        ##");

    a = Timer(0.5, helloWrd2)

    a.start()

def helloWrd2():

    clear()

    print("############");
    print("##          ");
    print("##          ");
    print("##########  ");
    print("##          ");
    print("##          ");
    print("############");   

    b = Timer(0.5, helloWrd3)

    b.start()

def helloWrd3():

    clear()

    print("##          ");
    print("##          ");
    print("##          ");
    print("##          ");
    print("##          ");
    print("##          ");
    print("############");   

    c = Timer(1.0, helloWrd4)

    c.start()

def helloWrd4():

    clear()

    print(" ########## ");
    print("##        ##");
    print("##        ##");
    print("##        ##");
    print("##        ##");
    print("##        ##");
    print(" ########## ");   

    d = Timer(0.5, helloWrd5)

    d.start()

def helloWrd5():

    clear()

    print(" ##       ##");
    print(" ##       ##");
    print(" ##  ###  ##");
    print(" ## ## ## ##");
    print(" ## ## ## ##");
    print(" ## ## ## ##");
    print("  ###   ### ");   

    e = Timer(0.5, helloWrd6)

    e.start()

def helloWrd6():

    clear()

    print(" ########## ");
    print("##        ##");
    print("##        ##");
    print("##        ##");
    print("##        ##");
    print("##        ##");
    print(" ########## ");   

    f = Timer(0.5, helloWrd7)

    f.start()

def helloWrd7():

    clear()

    print("##          ");
    print("########### ");
    print("##        ##");
    print("##          ");
    print("##          ");
    print("##          ");
    print("##          ");   

    g = Timer(0.5, helloWrd8)

    g.start()

def helloWrd8():

    clear()

    print("##          ");
    print("##          ");
    print("##          ");
    print("##          ");
    print("##          ");
    print("##          ");
    print("############");  

    h = Timer(0.5, helloWrd9)

    h.start()

def helloWrd9():

    clear()

    print("########### ");
    print("##        ##");
    print("##        ##");
    print("##        ##");
    print("##        ##");
    print("##        ##");
    print("########### ");  

sys.modules[__name__] = helloWrd
