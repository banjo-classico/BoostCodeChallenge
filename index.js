var constant = "abcdefghijklmnopqrstuvwxyz";
var cipher = "oephjizkxdawubnytvfglqsrcm";
var text = "knlfgnb, sj koqj o yvnewju";

function decrypt(constantText, cipherText, encryptedText) {
  const keyMap = constantText.split("")
  const cipherMap = cipherText.split("")

  const key = cipherMap.map(function(e, i) {
    return {[e]: keyMap[i]}
  }).reduce(function(sum, next) {
    return Object.assign({}, sum, next)
  }, {})
  var result = "";
  encryptedText.split("").map(function(c) {
    if (key.hasOwnProperty(c)) {
      result = result + (key[c])
    } else {
      result = result + c
    }
  })
  return result
}

module.exports = {
  decrypt,
}

console.log(decrypt(constant, cipher, text))
