# Data Structures

# User (object) - ユーザー
+ id: 1 (number, required) - ユーザーID
+ firstName: Naoki (string, required) - 名
+ lastName: Gondo (string, required) - 姓
+ gender (Gender, required) - 性別
+ birthday (object, optional) - 生年月日
    + year: 1988 (number, required) - 西暦年
    + month: 2 (number, required) - 月
    + day: 18 (number, required) - 日

# Gender (enum, fixed) - 性別
## Members
+ Male - 男性
+ Female - 女性
