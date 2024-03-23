# Loops---------------------
# while loop :---------
# i = 1
# while i <= 6:
#     print(i * " *")
#     i = i+1
# -----------------------
# i =5
# while i >=0:
#     print(i * " *")
#     i = i-1

# for loop:----------------------
for i in range(5):
    print(i + 1)
marks = [97, 80, 91]
print(marks)
print(marks[1])
print(marks[-1])
print(marks[0:3])
for scores in marks:
    print(scores)
marks.append(78)
print(marks)
marks.insert(0, 70)
print(marks)
print(99 in marks)
print(len(marks))
j = 0
while j < len(marks):
    print(marks[j])
    j = j+1
marks.clear()
print(marks)