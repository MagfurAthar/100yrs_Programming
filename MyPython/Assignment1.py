# Q.1) WAP to display the fibonacci series:-
# number = int(input("Number: "))
# a = 0
# b = 1
# sum = a + b
# print(f"{a}\t{b}", end="\t")
# for index in range(number):
#     print(sum, end="\t")
#     a, b = b, sum
#     sum = a + b
# print()



# Write a program to calculate the salary of an employee
# bs = int(input("Base salary: ₹"))
# hra = 0.05
# da = 0.2
# ma = 0.01
# pf = 0.02
# ts = bs + (bs * (hra + da + ma + pf))
# print(f"Total salary: ₹{ts}")



# Write a program to check if a number is an armstrong number
# num = input("Number: ")
# digitCount = len(num)
# num = int(num)
# sum = 0
# tmp = num
# for index in range(digitCount):
#     digit = tmp % 10
#     sum += pow(digit, digitCount)
#     tmp = int(tmp / 10)
# if sum == num:
#     print("Its an armstrong number")
# else:
#     print("Its not an armstrong number")



# Write a program to display the following sequence: 1 2 3 4 5 6 .... n
# limit = int(input("Number-limit: "))
# for index in range(1, limit + 1):
#     print(index, end=" ")
# print()



# Write a program to find the numbers between 0 and 100 which are divisible by 7 but not by 5
# for index in range(100):
#     if (index % 7 == 0) and (index % 5 != 0):
#         print(index, end=" ")
# print()
