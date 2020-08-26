import { useState, useEffect } from 'react'



export {
	useFormSignup,
	useFormSignIn,
	useFormVisit,
	useFormContact
} 

const useFormSignup = (signupValue, callback, validate) =>{
	const [signupValues, setSignup] = useState(signupValue)
	const [signupErrors, setSignupErrors] = useState({}) 
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(
		() => {
			if (Object.keys(signupErrors).length === 0 && isSubmitting) {
				callback()
			}
		},
		[signupErrors],
	)
   const handleSignUp = event =>{
	if (event) event.preventDefault()
	if (validate) {
		setSignupErrors(validate(signupValues))
	}
	setIsSubmitting(true)
}
	const handleChangeSignup = event =>{
		event.persist()
		setSignup(values => ({
			...values,
			[event.target.name]: event.target.value,
		}))
	}
return {
		handleSignUp,
		handleChangeSignup,
		signupValues,
		signupErrors
    }
}
const useFormSignIn = (signInValue, callback, validate) =>{
	const [signInValues, setSignIn] = useState(signInValue)
	const [signInErrors, setErrors] = useState({}) 
	const [submitted, setSubmitted] = useState(false)
	
	useEffect(
		() => {
			if (Object.keys(signInErrors).length === 0 && submitted) {
				callback()
			}
		},
		[signInErrors],
	)

	const handleSignIn = event =>{
		if (event) event.preventDefault()
		if (validate) {
			setErrors(validate(signInValues))
		}
		setSubmitted(true)
	}
	const handleChangeSignIn = event =>{
		event.persist()
		setSignIn(values => ({
			...values,
			[event.target.name]: event.target.value,
		}))
	}
	return{
		handleSignIn,
		handleChangeSignIn,
		signInValues,
		signInErrors
	}
}

const useFormVisit = (signValue, callback, validate) =>{
	const [signValues, setSign] = useState(signValue)
	const [signErrors, setVisitError] = useState({}) 
	const [submitVisit, setSubmitVisit] = useState(false)
	
	useEffect(
		() => {
			if (Object.keys(signErrors).length === 0 && submitVisit) {
				callback()
			}
		},
		[signErrors],
	)

	const handleSignVisit = event =>{
		if (event) event.preventDefault()
		if (validate) {
			setVisitError(validate(signErrors))
		}
		setSubmitVisit(true)
	}
	const handleChangeVisit = event =>{
		event.persist()
		setSign(values => ({
			...values,
			[event.target.name]: event.target.value,
		}))
	}

	const handleSelectVisit = (option, value) => {
		setSign(values =>({...values, 
		[option.name]: value
		}))
	}

	return{
		handleSignVisit,
		handleChangeVisit,
		handleSelectVisit,
		signValues,
		signErrors
	}
}

const useFormContact = (contactValue, callback, validate) =>{
	const [contactValues, setContact] = useState(contactValue)
	const [contactErrors, setContactErrors] = useState({}) 
    const [isSubmitContact, setSubmitContact] = useState(false)
	useEffect(
		() => {
			if (Object.keys(contactErrors).length === 0 && isSubmitContact) {
				callback()
			}
		},
		[contactErrors],
	)
	const handleContactRegister = event =>{
		if (event) event.preventDefault()
		if (validate) {
			setContactErrors(validate(contactValues))
		}
		setSubmitContact(true)
	}
	const handleChangeContact = event =>{
		event.persist()
		setContact(values => ({
			...values,
			[event.target.name]: event.target.value,
		}))
	}
return{
	handleChangeContact,
	handleContactRegister,
	contactErrors,
	contactValues
}
}



