var users = [];

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var newUser = {
        username: document.getElementById('signup-username').value,
        email: document.getElementById('signup-email').value,
        age: document.getElementById('signup-age').value,
        gender: document.getElementById('signup-gender').value,
        phone: document.getElementById('signup-phone').value,
        password: document.getElementById('signup-password').value
    };

    if (validateUserData(newUser)) {
        users.push(newUser);
        alert('User created. Please proceed to the login page.');
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var loginUsername = document.getElementById('login-username').value;
    var loginPassword = document.getElementById('login-password').value;

    var matchedUser = users.find(function(user) {
        return user.username === loginUsername && user.password === loginPassword;
    });

    var usernameTextbox = document.getElementById('username-textbox');
    var emailTextbox = document.getElementById('email-textbox');
    var ageTextbox = document.getElementById('age-textbox');
    var genderTextbox = document.getElementById('gender-textbox');
    var phoneTextbox = document.getElementById('phone-textbox');

    if (matchedUser) {
        usernameTextbox.value = 'Username: ' + matchedUser.username;
        emailTextbox.value = 'Email: ' + matchedUser.email;
        ageTextbox.value = 'Age: ' + matchedUser.age;
        genderTextbox.value = 'Gender: ' + matchedUser.gender;
        phoneTextbox.value = 'Phone: ' + matchedUser.phone;
    } else {
        usernameTextbox.value = '';
        emailTextbox.value = '';
        ageTextbox.value = '';
        genderTextbox.value = '';
        phoneTextbox.value = '';
        alert('.Incorrect username or password. Please try again.');
    }
});

function validateUserData(user) {
    if (user.age < 18 || user.age > 60) {
        alert('Age must be between 18 and 60.');
        return false;
    }

    if (user.phone.length !== 11) {
        alert('Phone number must be 11 digits.');
        return false;
    }

    return true;
}

function showSignUpForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function forgetPassword() {
    var username = prompt('Enter your username:');
    var user = users.find(function(u) {
        return u.username === username;
    });

    if (user) {
        var newPassword = prompt('Enter your new password:');
        user.password = newPassword;
        alert('Password updated successfully.');
    } else {
        alert('Username not found. Please try again.');
    }
}