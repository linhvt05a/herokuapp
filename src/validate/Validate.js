const IMAGE_TYPES = ['image/gif', 'image/jpeg', 'image/png'];
const MAX_SIZE_AVATAR = 11000000; // Bytes.

export {
    validateInput,
    isValidateInput,
    validateImage
}
function isValidateInput(value, props) {
    const { isPhone, isEmail, isEmpty, maxLength, minLength, sameValue, sameName } = props
    if (isEmpty) {
        const result = validateEmpty(value)
        if (result.isInputValid === false) {
            return false
        }
    }
    if (minLength) {
        const result = validateMinLength(value, minLength)
        if (result.isInputValid === false) {
            return false
        }
    }
    if (maxLength) {
        const result = validateMaxlenght(value, maxLength)
        if (result.isInputValid === false) {
            return false
        }
    }
    if (isEmail) {
        const result = validateEmail(value)
        if (result.isInputValid === false) {
            return false
        }
    }
    if (isPhone) {
        const result = validatePhone(value)
        if (result.isInputValid === false) {
            return false
        }
    }
    if (sameValue) {
        const result = validateSameValue(value, sameValue, sameName)
        if (result.isInputValid === false) {
            return false
        }
    }
    return true
}

function validateInput(value, props) {
    const { isPhone, isEmail, isEmpty, maxLength, minLength, sameValue, sameName } = props
    if (isEmpty) {
        const result = validateEmpty(value)
        if (result.isInputValid === false) {
            return result
        }
    }
    if (minLength) {
        const result = validateMinLength(value, minLength)
        if (result.isInputValid === false) {
            return result
        }
    }
    if (maxLength) {
        const result = validateMaxlenght(value, maxLength)
        if (result.isInputValid === false) {
            return result
        }
    }
    if (isEmail) {
        const result = validateEmail(value)
        if (result.isInputValid === false) {
            return result
        }
    }
    if (isPhone) {
        const result = validatePhone(value)
        if (result.isInputValid === false) {
            return result
        }
    }
    if (sameValue) {
        const result = validateSameValue(value, sameValue, sameName)
        if (result.isInputValid === false) {
            return result
        }
    }
    return {
        isInputValid: true,
        errorMessage: ''
    };
}

function validateImage(fileObject) {
    if (fileObject.size > MAX_SIZE_AVATAR) {
        return {
            isInputValid: false,
            errorMessage: "File size is not greater than (10Mb)"
        };
    }

    if (!IMAGE_TYPES.includes(fileObject.type)) {
        return {
            isInputValid: false,
            errorMessage: "Please choose image types in ('.gif', '.jpeg', '.png')"
        };
    }

    return {
        isInputValid: true,
        errorMessage: ''
    };
}

function validateEmpty(value) {
    if (value && isFinite(value)) {
        return {
            isInputValid: true,
            errorMessage: ''
        };
    }
    if (value && value.trim().length > 0) {
        return {
            isInputValid: true,
            errorMessage: ''
        };
    } else {
        return {
            isInputValid: false,
            errorMessage: "Missing"
        };
    }
}
function validateSameValue(value, sameValue, sameName) {
    if (value === sameValue) {
        return {
            isInputValid: true,
            errorMessage: ''
        };
    } else {
        return {
            isInputValid: false,
            errorMessage: "Confirm password wrong",
            number: sameName
        };
    }
}

const validateMinLength = (value, minLength) => {
    var checkingResult = !value || value.trim().length < minLength ? null : true
    if (checkingResult !== null) {
        return {
            isInputValid: true,
            errorMessage: ''
        };
    } else {
        return {
            isInputValid: false,
            errorMessage: "must be at least",
            number: minLength
        };
    }
}
function validateMaxlenght(value, maxLength) {

    var checkingResult = !value || value.trim().length > maxLength ? null : true
    if (checkingResult !== null) {
        return {
            isInputValid: true,
            errorMessage: ''
        };
    } else {
        return {
            isInputValid: false,
            errorMessage: "No more than",
            number: maxLength
        };
    }
}

function validateEmail(value) {
    const regexp = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const checkingResult = regexp.exec(value);
    if (checkingResult !== null) {
        return {
            isInputValid: true,
            errorMessage: ''
        };
    } else {
        return {
            isInputValid: false,
            errorMessage: "Invalid email"
        };
    }
}

function validatePhone(value) {
    const regexp = /^\d{10,10}$/;
    const checkingResult = regexp.exec(value);
    if (checkingResult !== null) {
        return {
            isInputValid: true,
            errorMessage: ''
        };
    } else {
        return {
            isInputValid: false,
            errorMessage: "Phone numbers must be digits."
        };
    }
}