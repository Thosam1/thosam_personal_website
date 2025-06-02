"use client";
import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';

const Newsletter: React.FC = () => {
	const [email, setEmail] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		setIsValid(true); // Reset validation when the email changes
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Simple email validation
		if (!EmailValidator.validate(email)) {
			setIsValid(false);
			return;
		}

		setIsSubmitting(true);

		// Simulate API call or perform actual submission
		try {
			// Mocking API call delay
			await new Promise(resolve => setTimeout(resolve, 1000));

			// Handle valid email submission here
			console.log('Submitted email:', email);
			setIsSubmitting(false);
			setEmail(''); // Clear the email input
		} catch (error) {
			console.error('Error submitting email:', error);
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full flex justify-center text-center py-16">
			<div className="max-w-(--breakpoint-sm) rounded-xs overflow-hidden shadow-md">
				<div className="px-6 py-4">
					<div className="font-bold text-2xl mb-2">💌 Subscribe to my Newsletter</div>
					<p className="text-gray-700 text-base">Sign up for my monthly newsletter, I will send you interesting ideas and what I have been working on 🙂</p>
					<form onSubmit={handleSubmit}>
						<div className="mt-4">
							<input
								type="text"
								value={email}
								onChange={handleEmailChange}
								placeholder="Enter your email address"
								className={`border border-gray-400 rounded-xs px-3 py-2 w-full ${isValid ? '' : 'border-red-500'}`}
								disabled={isSubmitting}
							/>
							{!isValid && <p className="text-red-500 text-xs italic">Please enter a valid email address</p>}
						</div>
						<button
							type="submit"
							className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xs"
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Submitting...' : 'Subscribe'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
