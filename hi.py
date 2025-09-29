# # 1. reverse a String in  a python
# def reverse(str):
#     return str[::-1]

# print(reverse("pankaj"))



# # 2. check palindrome in python
# str = "madam"

# if str == str[::-1]:
#     print("Palindrome")
# else:
#     print("Not a Palindrome")



# # 3. factorial of a number in python
# def factorial(n):
#     if n == 0 or n == 1:
#         return 1
#     else:
#         return n * factorial(n - 1)
# print(factorial(5))  

# # 4. Generate Fibonacci numbers up to n terms
# def fibonacci(n):
#     fib = [0,1]
      
#     for i in range(2,n):
#         fib.append(fib[i-1]+fib[i-2])
#     return fib[:n]
       
# print(fibonacci(10))

# # 5. Find the maximum element in a list
# def find_max(arr):
#     maxium = arr[0]
#     for num in arr:
#         if num > maxium:
#             maxium = num
#     return maxium
# print(find_max([3, 5, 2, 8, 1]))