// Function to generate a random email address based on the username
function generateEmail(username) {
  const domain = "@example.com";  // Static email domain
  return username + domain;
}

// Function to generate a random password (8 characters long)
function generatePassword() {
  const length = 8;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Function to create a user profile
function createUserProfile(username) {
  const email = generateEmail(username);
  const password = generatePassword();

  return {
    username: username,
    email: email,
    password: password
  };
}

// Function to generate and display 5 user profiles
function generateUsers() {
  const users = [];
  const usernames = ["Yashu", "vaibhu", "moni", "chethu", "sundri"];

  usernames.forEach(username => {
    const user = createUserProfile(username);
    users.push(user);
  });

  // Print out each user profile
  users.forEach(user => {
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    console.log(`Password: ${user.password}`);
    console.log("----------------------");
  });
}

// Call the function to generate and print 5 user profiles
generateUsers();
