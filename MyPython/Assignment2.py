# Write a program to swap two numbers using a third variable and without using a third variable
# Using 3rd variable
# a = 10
# b = 20
# print(f"\nBefore swap\na: {a}, b: {b}")
# # swap
# c = a
# a = b
# b = c
# print(f"\nAfter swap\a: {a}, b: {b}")
# # Without using 3rd variable
# d = 52
# e = 36
# print(f"\nBefore swap\nd: {d}, e: {e}")
# # swap
# d, e = e, d
# print(f"\nAfter swap\d: {d}, e: {e}")



# Write a program to calculate the total amount of money in a piggybank. Coins: ₹1, ₹2, ₹5, ₹10
# print("Enter the number coins of:")
# coins10 = int(input("₹ 10: "))
# coins5 = int(input("₹ 5: "))
# coins2 = int(input("₹ 2: "))
# coins1 = int(input("₹ 1: "))
# money = (10 * coins10) + (5 * coins5) + (2 * coins2) + (1 * coins1)
# print(f"Money: {money}")



# Write a program to calculate the bill amount for an item given it's quantity, cost price, discount and tax.
# item =input("Item: ")
# quantity = int(input("Quantity: "))
# costPrice = int(input("Cost price: "))
# discountPercent = int(input("Discount %: "))
# taxPercent = int(input("Tax %: "))
# discount = costPrice * discountPercent / 100
# discountedPrice = quantity * (costPrice - discount)
# tax = discountedPrice * taxPercent / 100
# billAmount = round(discountedPrice + tax)
# print(f"\nBill amount of {quantity} {item} ₹{billAmount}")



# Write a program to check whether a number is positive, negative or equal to zero.
# number = int(input("Number: "))
# if number < 0:
#     print("Number is negative.")
# elif number > 0:
#     print("Number is positive.")
# else:
#     print("Number is equal to zero.")
    


# A company decides to give bonus to all it's employees on Diwali. A 5% bonus on salary is given to the male workers 10% bonus on salary to the female workers.
# Write a program to input the salary and sex of the employee. If the salary of the employee is less than ₹10,000 then the employee gets an extra 2% bonus on salary. Calculate the bonus that has to be given to the employee and display the salary that the employee will get.
# salary = int(input("Salary: "))
# sex = input("Sex: ")
# if sex.lower() == "male":
#     bonusPercent = 5
# else:
#     bonusPercent = 10
# if salary < 10000:
#     bonusPercent += 2
# salary = round(salary + (salary * bonusPercent / 100))
# print(f"Final salary: ₹{salary}")



# Write a program to check whether a character is a vowel or a consonant.
# letter = input("Character: ").lower()
# if letter in ('a', 'e', 'i', 'o', 'u'):
#     print("It is a vowel.")
# else:
#     print("It is a consonant.")



# Write a program to input the marks of a student in 4 subjects, calculate the total aggregate and display the grades obtained by the student.
# marks > 90 -> O
# marks > 80 -> E
# marks > 70 -> A
# marks > 60 -> B
# marks > 50 -> C
# marks >= 40 -> D
# marks < 40 -> F

# print("Enter the marks in the following subjects:\n")
# maths = int(input("Maths: "))
# computer = int(input("Computer: "))
# science = int(input("Science: "))
# english = int(input("English: "))
# averageMarks = round((maths + computer + science + english) / 4)
# if averageMarks > 90:
#     grade = 'O'
# elif averageMarks > 80:
#     grade = 'E'
# elif averageMarks > 70:
#     grade = 'A'
# elif averageMarks > 60:
#     grade = 'B'
# elif averageMarks > 50:
#     grade = 'C'
# elif averageMarks >= 40:
#     grade = 'D'
# else:
#     grade = 'F'
# print(f"Grade: {grade}")



# Write a program to calculate the factorial of a number.
# number = int(input("Number: "))
# factorial = 1
# for index in range(1 , number + 1):
#     factorial *= index
# print(f"Factorial: {factorial}")
