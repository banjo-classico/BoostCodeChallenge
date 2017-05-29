var test = require("tape");
var index = require("./index.js");

var key = "abcdefghijklmnopqrstuvwxyz";
var cipher = "qwertyuiopasdfghjklzxcvbnm";
var text = "itssg tctknwgrn!"
var text2 = "dqdq, pxlz aosstr q dqf."

test("decryption", function (t) {
  var result = index.decrypt(key, cipher, text)
  t.equals(result, "hello everybody!")
  var result = index.decrypt(key, cipher, text2)
  t.equals(result, "mama, just killed a man.")
  t.end()
})
