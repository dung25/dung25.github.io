import math
# 3. Viết chương trình yêu cầu người dùng nhập địa chỉ email, ẩn địa chỉ email và in ra theo mẫu trong ví dụ:
email = input("Nhập email: ")
domain = email.find("@")
short_email = email[:domain - 4] + "..." + email[domain:]
print(short_email)
# 4. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một ký tự bất kỳ trong chuỗi đó. Đếm số lần xuất hiện của ký tự trong chuỗi, và hiển thị chuỗi khi thay thế ký tự đó thành 😉
text = input("Nhập một chuỗi: ")
character = input("Nhập một ký tự: ")
print(
    f"Ký tự {character} xuất hiện {text.count(character)} lần trong chuỗi {text}")
print(text.replace(character, '😉'))
# 4. Viết chương trình yêu cầu người dùng nhập vào giá trị độ dài (long) với đơn vị là cm, quy đổi và in ra giá trị tương ứng ở các đơn vị km, dm, m, mm
length = int(input("Nhập giá trị độ dài: "))
print(f"{length} cm ra {length/100} m")
print(f"{length} cm ra {length/100000} km")
print(f"{length} cm ra {length/10} dm")
print(f"{length} cm ra {length*10} mm")
# 5. Viết chương trình yêu cầu người dùng nhập vào giá trị nhiệt độ thang nhiệt Celsius (c), quy đổi và in ra nhiệt độ tương ứng trong thang nhiệt Fahrenheit và Kevin
celsius = int(input("Nhập giá trị nhiệt độ: "))
print(f"{celsius}°C ra {celsius*18000 + 3200}°F")
print(f"{celsius}°C ra {celsius + 273.15}°K")
# 6. Viết chương trình yêu cầu người dùng nhập vào số phút (tính từ 0h của ngày hôm nay, giả sử số phút nhập không quá 1440), tính và in ra giá trị giờ:phút tương ứng (VD: 325 -> 5:25)
minute = int(input("Nhập vào số phút: "))
print(f"Giờ, phút tương đương {math.floor(minute/60)}:{minute%60}")
# 3. Viết chương trình yêu cầu nhập 3 số a, b, c tương ứng với độ dài 3 cạnh tam giác. Kiểm tra và in ra 3 số có tạo thành một tam giác hợp lệ hay không
a = int(input("Nhập cạnh a: "))
b = int(input("Nhập cạnh b: "))
c = int(input("Nhập cạnh c: "))
if abs(b-c) < a and a < b+c:
    print(f"[{a}, {b}, {c}] là 1 tam giác hợp lệ")
else:
    print(f"[{a}, {b}, {c}] là 1 tam giác không hợp lệ")
# 4. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra 3 số là dãy tăng dần (a < b < c), giảm dần (a > b > c) hay không
a = int(input("Nhập số a: "))
b = int(input("Nhập số b: "))
c = int(input("Nhập số c: "))
max = 0
if a > b and b > c:
    print("Chuỗi giảm dần")
elif a < b and b < c:
    print("Chuỗi tăng dần")
else:
    print("Chuỗi không tăng không giảm")

# 6. Viết chương trình yêu cầu nhập một tháng trong năm, kiểm tra và in ra mùa tương ứng
month = input("Nhập vào 1 tháng: ")
if month >= 1 and month <= 3:
    print("Mùa xuân")
if month >= 4 and month <= 6:
    print("Mùa hạ")
if month >= 7 and month <= 9:
    print("Mùa thu")
if month >= 10 and month <= 12:
    print("Mùa đông")

# 5. Viết chương trình yêu cầu nhập một ký tự, kiểm tra và in ra ký tự đó có thuộc bảng alphabet (a-zA-Z) hay không
ascii_letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
character = input("Nhập 1 ký tự: ")
if ascii_letters.find(character) != -1:
    print(f"{character} thuộc bảng ký tự alphabet")
else: 
    print(f"{character} không thuộc bảng ký tự alphabet")