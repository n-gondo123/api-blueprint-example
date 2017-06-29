var hooks = require('hooks');
var assert = require('assert');

// transaction名の調べ方
hooks.beforeEach(function(transaction) {
  // console.log(transaction.name);
});

hooks.after('ユーザー > ユーザー一覧を取得する > ユーザー一覧を取得する', function(transaction) {
  // 配列の長さが1以上であること
  var actual = JSON.parse(transaction.real.body);
  assert.ok(actual.list.length > 0);
});
