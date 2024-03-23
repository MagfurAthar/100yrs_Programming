def Currency_Converter(Euros, Rate=88.01):
    Rupees = Euros * Rate
    return Rupees

E = input("Enter Euros : ")
# R = input("Enter Rate : ")
Indian_Rupees = Currency_Converter(float(E))
print(Indian_Rupees)