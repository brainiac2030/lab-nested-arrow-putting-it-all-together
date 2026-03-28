


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

function createLoginTracker(userInfo) {
  let wrongAttempts = 0;

  const login = (passwordAttempt) => {

    
    if (wrongAttempts >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    
    wrongAttempts++;

    
    if (wrongAttempts >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    
    return `Login failed. Attempt ${wrongAttempts}`;
  };

  
  return login;
}
const user = {
  username: "john",
  password: "1234"
};

