FORMAT: 1A
HOST: http://localhost:3000

# Sample App

# Group API共通事項
## HTTPヘッダー
Acceptヘッダーを指定して下さい。

```http
Accept: application/json
```

# Group ユーザー

## ユーザー一覧を取得する [GET /users{?offset,limit}]
ユーザー一覧を取得する。
+ Parameters
    + offset: 0 (number, optional) - オフセット
    + limit: 10 (number, optional) - リミット

+ Response 200 (application/json)
    + Body

            {
                "total": 3,
                "list": [  
                    {  
                        "id": 1,
                        "firstName": "Naoki",
                        "lastName": "Gondo",
                        "gender": "Male",
                        "birthday":{  
                            "year": 1988,
                            "month": 2,
                            "day": 18
                        }
                    },
                    {  
                        "id": 2,
                        "firstName": "Taro",
                        "lastName": "Stanby",
                        "gender": "Male",
                        "birthday":{  
                            "year": 2015,
                            "month": 5,
                            "day": 26
                        }
                    }
                ]
            }

## ユーザーを作成する [POST /users]
ユーザーを作成する。
+ Request (application/json)
    + Body

            {
                "firstName": "Naoki",
                "lastName": "Gondo",
                "gender": "Male",
                "birthday": {
                    "year": 1988,
                    "month": 2,
                    "day": 18
                }
            }

+ Response 201 (application/json)
    + Body

            {
                "id": 1,
                "firstName": "Naoki",
                "lastName": "Gondo",
                "gender": "Male",
                "birthday": {
                    "year": 1988,
                    "month": 2,
                    "day": 18
                }
            }

## ユーザーの更新・削除 [/users/{userId}]
+ Parameters
    + userId: 1 (number, required) - ユーザーID

### ユーザーを更新する [PUT]
ユーザーを更新する。
+ Request (application/json)
    + Body

            {
                "firstName": "Naoki",
                "lastName": "Gondo",
                "gender": "Male",
                "birthday": {
                    "year": 1988,
                    "month": 2,
                    "day": 18
                }
            }

+ Response 200 (application/json)
    + Body

            {
                "id": 1,
                "firstName": "Naoki",
                "lastName": "Gondo",
                "gender": "Male",
                "birthday": {
                    "year": 1988,
                    "month": 2,
                    "day": 18
                }
            }

## ユーザーを削除する [DELETE]
ユーザーを削除する。
+ Response 204
