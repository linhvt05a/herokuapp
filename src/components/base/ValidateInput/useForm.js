import { useState, useEffect } from 'react'

const useForm = (signupValue, callback, validate) =>{
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

export {
	useForm
} 