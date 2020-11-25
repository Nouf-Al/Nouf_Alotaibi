#1. Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]

def biggieSize(list):
    new_list_str = []
    for x in range(0,len(list)):
        if list[x] > 0:
            list[x]="big"
            new_list_str.append(list[x])
            continue
        new_list_str.append(list[x])
    return new_list_str
list = [1,-2,-3,3,-4,-5,3]
print(biggieSize(list))

#2. Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
def countPositives(list):
    count = 0 
    for x in range(0,len(list)):
        if list[x] > 0:
            count = count + 1
    list[len(list)-1]=count
    return list
list = [1,6,-4,-2,-7,-2]
print(countPositives(list))

#3. Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7
def sumTotal(list):
    sum = 0 
    for x in range(0,len(list)):
        sum = sum + list[x]
    return sum
list = [1,2,3,4]
print(sumTotal(list))

#4. Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5
def average(list):
    sum = 0 
    for x in range(0,len(list)):
        sum = sum + list[x]
    return sum/len(list)
list = [1,2,3,4]
print(average(list))

#5. Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0
def length(list):
    return len(list)
list = []
print(length(list))

#6. Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False
def minimum(list):
    if len(list) ==0 :
            return False
    else:
        min = list[0] 
        for x in range(0,len(list)):
            if min > list[x]:
                min = list[x]
        return min
list = [37,2,1,-9]
print(minimum(list))

#7. Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False
def maximum(list):
    if len(list) ==0 :
            return False
    else:
        max = list[0] 
        for x in range(0,len(list)):
            if max < list[x]:
                max = list[x]
        return max
list = [37,2,1,-9]
print(maximum(list))

#8. Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }
def ultimateAnalysis(list):
    sum = 0 
    min = list[0] 
    max = list[0] 
    for x in range(0,len(list)):
        sum = sum + list[x]
        if max < list[x]:
                max = list[x]
        if min > list[x]:
            min = list[x]
    avg = sum/len(list)
    dict = {'sumTotal': sum , 'average': avg ,'minimum': min ,'maximum': max,'length': len(list)}
    return dict
list = [37,2,1,-9]
print(ultimateAnalysis(list))

#9. Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]
def reverse(list):
    length=len(list)
    for x in range(int(length/2)):
        temp = list[x]
        list[x]=list[length-x-1]       
        list[length-x-1]=temp
    return list
list=[1,2,3,4,5,6]
print(reverse(list))

