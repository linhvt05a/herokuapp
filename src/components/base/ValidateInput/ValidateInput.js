const phoneRex = /^([+]39)?((3[\d]{2})([ ,\-,\/]){0,1}([\d, ]{6,9}))|(((0[\d]{1,4}))([ ,\-,\/]){0,1}([\d, ]{5,10}))$/
const emailRex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passRex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/

 function validateSignup(values) {
    let errors = {};
   
    if (!values.fullName) {
        errors.fullName = 'Missing information is required';
    }
    if(!values.rePass){
        errors.rePass = 'Missing information require'
    }else if(!values.rePass.match(passRex)){
        errors.rePass = 'Password dont match'
    }
    else if (values.rePass != values.passwordSignup){
        errors.rePass = 'Password dont match'
    }
    if(!values.emailSignup){
        errors.emailSignup ="Missing information require"
    }else if(!values.emailSignup.match(emailRex)){
        errors.emailSignup ="Please enter a email valid and retry! "
    }

    if(!values.passwordSignup){
        errors.passwordSignup = "Missing information require"
    }else if(!values.passwordSignup.match(passRex)){
        errors.passwordSignup = "Wrong format for password require"
    }

    return errors;
  };
function validateLogin (){
    
}
  export {
      validateSignup,
      validateLogin
  }