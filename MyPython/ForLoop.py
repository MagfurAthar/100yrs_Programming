emails = ['aquib@gmail.com','magfur@pmail.com', 'rana@gmail.com']
for item in emails: # here item is a new variable
    print(item)
# -------------------------

for gmail in emails:
    if '@gmail' in gmail:
        print(gmail)
# -------------------------

# user input for loop------
planet = input("What planet are you from?")
print(planet)

# for loop on iterative way--------
name = ['SK Sameer', 'Devenath', 'Amit', 'Adnan']
mail = ['sksameer@gmail.com', 'devenath@gmail.com', 'amit@gmil.com', 'adnan@gmail.com']
for i, j in zip(name, mail):
    print(i, j)