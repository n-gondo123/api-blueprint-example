# Group ユーザー

## ユーザー一覧を取得する [GET /users{?offset,limit}]
ユーザー一覧を取得する。
+ Parameters
    + offset: 0 (number, optional) - オフセット
    + limit: 10 (number, optional) - リミット

+ Response 200 (application/json)
    + Attributes
        + total: 3 (number, required) - 全件数
        + list (array[User], required, fixed-type) - ユーザー一覧

## ユーザーを作成する [POST /users]
ユーザーを作成する。
+ Request (application/json)
    + Attributes
        + firstName: Naoki (string, required) - 名
        + lastName: Gondo (string, required) - 性
        + gender (Gender, required) - 性別
        + birthday (object, optional) - 生年月日
            + year: 1988 (number, required) - 西暦年
            + month: 2 (number, required) - 月
            + day: 18 (number, required) - 日

+ Response 201 (application/json)
    + Attributes (User)

## ユーザーの更新・削除 [/users/{userId}]
+ Parameters
    + userId: 1 (number, required) - ユーザーID

### ユーザーを更新する [PUT]
ユーザーを更新する。
+ Request (application/json)
    + Attributes
        + firstName: Naoki (string, required) - 名
        + lastName: Gondo (string, required) - 性

+ Response 200 (application/json)
    + Attributes (User)

## ユーザーを削除する [DELETE]
ユーザーを削除する。
+ Response 204
