# Api Blueprintのサンプル

## 使い方
※詳しくは`package.json`を参照してみてください

### 準備
```sh
$ npm install
```

### ライブリロードしながらドキュメントを編集
```sh
$ npm run aglio:watch
```

### ドキュメントのコンパイル
```sh
$ npm run aglio:compile
```

### ドキュメントのマージ
```sh
$ npm run aglio:merge
```

### Mockサーバー立ち上げ
```sh
$ npm run mock
```

### Dreddでテストを実行
- ※デモで実行する場合、事前にバックグランドでMockサーバーを立ち上げておくこと。
- ※実際に運用で利用する際はMockサーバーではなく、APIアプリケーションサーバーを使うこと。

```sh
$ npm test
```
