
export default function validate(values) {
    let errors = {};
    const phoneRex = /^([+]39)?((3[\d]{2})([ ,\-,\/]){0,1}([\d, ]{6,9}))|(((0[\d]{1,4}))([ ,\-,\/]){0,1}([\d, ]{5,10}))$/
    if (!values.fullName) {
        errors.fullName = 'Email address is required';
    }
    if(!values.projectSelect){
        errors.projectSelect = 'Missing information require'
    }
    if(!values.content){
        errors.content = 'Missing information require '
    }
    // if (!values.email) {
    //     errors.email = 'Email address is required';
    //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //     errors.email = 'Email address is invalid';
    //   }

    if(!values.mobile){
        errors.mobile = 'Phone number is require'
    }else if(!values.mobile.match(phoneRex)){
        errors.mobile = 'Please enter a phone number with 10 digits.1 not necessary'
     }

    return errors;
  };