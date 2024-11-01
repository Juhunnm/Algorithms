str = input()
a =[]
for i in str:
    if i.isupper():
        a.append(i.lower())
    else:
        a.append(i.upper())

print(("").join(a))

# 입출력 예
# 입력 #1

# aBcDeFg
# 출력 #1

# AbCdEfG