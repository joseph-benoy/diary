var crypto = require("crypto");
var algorithm = "aes-192-cbc"; //algorithm to use
var password = process.env.entryKey || "secret";
const key = crypto.scryptSync(password, 'salt', 24); //create key
const encode = (text)=>{
    const iv = crypto.randomBytes(16); // generate different ciphertext everytime
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex'); // encrypted text
    return encrypted;
}

const decode = ()=>{
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8'); //deciphered text
    return decrypted;
}




module.exports = {encode,decode};