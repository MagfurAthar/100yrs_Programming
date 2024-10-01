# Ques:- WAP in python to print the words placed in even position of the string.

def print_even_position_words(input_string):
    # Split the string into words
    words = input_string.split()

    # Iterate over the words with their indices
    for index, word in enumerate(words):
        if index % 2 == 0:
            print(word)

input_string = input("Enter any string : ")
print("Words at even positions:")
print_even_position_words(input_string)


