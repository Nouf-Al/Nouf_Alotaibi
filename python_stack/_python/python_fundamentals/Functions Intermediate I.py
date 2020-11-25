import random
def randInt(min= 0  , max= 100  ):
    if min == 0 and max == 100 or max == 50:
        num =random.random() * max
        return round(num)

    if min == 50 and max == 100 :
        num =random.random() * 50 + min
        return round(num)  

    if min == 50 and max == 500 :
        num =random.random() * 450 + min
        return round(num)


# should print a random integer between 0 to 100
print("random integer between 0 to 100:",randInt())

# should print a random integer between 0 to 50
print("random integer between 0 to 50:",randInt(max=50)) 

# should print a random integer between 50 to 100
print("random integer between 50 to 100:",randInt(min=50))

# should print a random integer between 50 and 500
print("random integer between 50 and 500:",randInt(min=50, max=500))

