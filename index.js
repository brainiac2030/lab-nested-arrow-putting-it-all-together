


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const login = (passwordAtempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked dued to too many faild login attempts";
    }

    if (passwordAtempt === userInfo.password) {
      return "Login successful";
    } 

    return `Login failed. Attempt ${attemptCount}`;
  };

  return login;
}


const user = {
  username:"john",
  password: "1234"
};

const login = createLoginTracker(user);

console.log(login("1111"));
console.log(login("2222"));
console.log(login("3333"));
console.log(login("1234"));
