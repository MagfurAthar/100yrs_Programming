# def division(a, b):
#     return a/b
# a = int(input("Enter 1st number : "))
# b = int(input("Enter 2nd number : "))
# print(division(a, b))

def division(a, b):
    try:
        return a/b
    except ZeroDivisionError:
    # except:
        return "Zero division is meaningless."
        # print("Zero division is meaningless.")

a = int(input("Enter 1st number : "))
b = int(input("Enter 2nd number : "))
print(division(a, b))
print("End of program")