const accountId = 12311936
let accountMail = "nikkhil.google.com"
var accountPass = "242525"
accountCity = "Jammu"   //prefer not to use this type also

let accountState          // this gives undefineds

//  we cannot assign to a const variable accountId = 7839924

accountMail = "nikhilkumar.google.com"
accountPass = "35366363"

//In present days we use only let and const 

/*
Prefer not to use var because of issue in block scope and functional scope

*/

console.log(accountId)

console.table([accountId, accountMail, accountPass, accountCity, accountState])