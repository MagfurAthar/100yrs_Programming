# Ques:- WAP in python to print the even digit words in a string.

def print_even_digit_words(input_string):
    """
    Prints words with even digit count from the input string.

    Args:
        input_string (str): Input string containing words.
    """
    # Split the input string into words
    words = input_string.split()

    # Iterate through each word
    for word in words:
        # Remove non-alphanumeric characters
        cleaned_word = ''.join(filter(str.isalnum, word))
        
        # Check if word length is even
        if len(cleaned_word) % 2 == 0:
            print(word)


# Example usage
input_str = input('Enter any string : ')
print("Even-digit words : ")
print_even_digit_words(input_str)
