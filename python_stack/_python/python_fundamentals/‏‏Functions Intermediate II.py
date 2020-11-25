# 1. Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]
# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0]=15
print(x)
# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name']="Bryant"
print(students)
# In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0]="Andres"
print(sports_directory)
# Change the value 20 in z to 30
z[0]['y']=30
print(z)

# 2. Iterate Through a List of Dictionaries
# Create a function iterateDictionary(some_list) that, given a list of dictionaries,
# the function loops through each dictionary in the list and prints each key and the associated value. 
def iterateListOfDictionaries(list):
    for i in range(0,len(list)):
        for key, val in list[i].items():
            print(key, " - ", val )

#3. iterateListOfDictionaries(students)
def iterateDictionary2(key_name, some_list):
    for s in some_list:
        print(s[key_name])

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
iterateDictionary2('last_name', students)


#4. Iterate Through a Dictionary with List Values
def printInfo(some_dict):
    for key in some_dict:
        print(len(some_dict[key]), key)
        for index in some_dict[key]:
            print(index)
        print() 
      
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)