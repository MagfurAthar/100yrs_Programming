# Ques:- WAP in python to check whether an array is monotinic or not.

def is_monotonic(array):
    """
    Checks if the input array is monotonic (either increasing or decreasing).

    Args:
        array (list): Input list of numbers.

    Returns:
        bool: True if monotonic, False otherwise.
    """
    n = len(array)
    
    increasing = all(array[i] <= array[i + 1] for i in range(n - 1))
    decreasing = all(array[i] >= array[i + 1] for i in range(n - 1))
    
    return increasing or decreasing


def get_user_input():
    """
    Gets array input from user.

    Returns:
        list: User-input array.
    """
    user_input = input("Enter array elements (space-separated): ")
    try:
        array = list(map(int, user_input.split()))
        return array
    except ValueError:
        print("Invalid input. Please enter numbers only.")
        return get_user_input()

def main():
    print("Monotonicity Check")
    array = get_user_input()
    print(f"Array: {array}")
    print(f"Monotonic: {is_monotonic(array)}")


if __name__ == "__main__":
    main()



