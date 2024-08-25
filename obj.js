let userOne = {
    email: "nikhil@gmail.com",  // use comma
    upiId: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "nishant@gmail.com"
                                            //both changes as we give refernce as this is in heap
                                            
console.log(userOne.email);
console.log(userTwo.email);