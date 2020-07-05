var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var usernameRegex = /^[A-Za-z0-9]+$/;


module.exports = class ProfileManagementRules {
    registerUser = (userObject) => {
        if (!(userObject.email.match(mailformat) && userObject.userName.match(usernameRegex))) {
            return 'Username or Email invalid!';
        } else if (userObject.email === 'sama@gmail.com' || userObject.userName === 'sama007') {
            return 'Sama007 already exists!';
        } else {
            return `${userObject.userName} has been registered!`
        }
    }

    loginUser = (userloginObject) => {
        if(!(userloginObject.userName === 'sama007' || userloginObject.password === 'sama1234' )){
            return 'Invalid username or password!!'
        }
        else{
            return `${userloginObject.userName} has been successfully logged in!`
        }
    }
}