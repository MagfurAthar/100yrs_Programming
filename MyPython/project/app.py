import pandas as pd

# Load the sample data
sample_data = pd.read_csv("data.csv")

# Display the structure of the sample data
print("Sample Data:")
print(sample_data.head())

# Mapping numerical values to categories for Sex
sex_mapping = {1: "Male", 2: "Female"}
sample_data['Sex'] = sample_data['Sex'].map(sex_mapping)

# Mapping numerical values to categories for Age Category
age_mapping = {1: "Below 22 years", 2: "22-60 years", 3: "Above 60 years"}
sample_data['Age_category'] = sample_data['Age_category'].map(age_mapping)

# Mapping numerical values to categories for Education Level
edu_mapping = {0: "No formal education", 1: "Primary education", 2: "Secondary education", 3: "Graduation and above"}
sample_data['Highest_education_level'] = sample_data['Highest_education_level'].map(edu_mapping)

# Calculate frequencies of each category in the sample
sex_freq = sample_data['Sex'].value_counts().sort_index()
age_freq = sample_data['Age_category'].value_counts().sort_index()
edu_freq = sample_data['Highest_education_level'].value_counts().sort_index()

print("\nFrequency of Sex in Sample:")
print(sex_freq)

print("\nFrequency of Age Group in Sample:")
print(age_freq)

print("\nFrequency of Highest Education Level in Sample:")
print(edu_freq)