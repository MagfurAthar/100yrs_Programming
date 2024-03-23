# def minutes_to_hours(minutes):
#     return minutes/ 60

# minutes = int(input("Enter the value of minutes : "))
# print(minutes_to_hours(minutes))
# ---------------------------------------

# def second_to_hours(minutes):
#     return minutes/ 3600

# seconds = int(input("Enter the value of seconds : "))
# print(second_to_hours(seconds))
# ---------------------------------------

def hours(seconds, minutes=3600):
    return minutes/60 + seconds/3600

seconds = int(input("Enter the value of seconds : "))
print("Hours :", hours(seconds))