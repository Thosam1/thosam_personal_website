"use client";
import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import {log} from "node:util";

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

		console.log(email)
		setIsSubmitting(true);

		// Simulate API call or perform actual submission
		try {
			// Mocking API call delay
			// await new Promise(resolve => setTimeout(resolve, 1000));
			const response = await fetch("/api/subscribe", {
				method: "POST",
				body: JSON.stringify({ email }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if(response.status == 400) {
				console.log("Hey you already joined the mailing list! 😎")
			} else if (response.status != 200) {
				// some internal error
				console.log("Oh no an error occured! 😢 Please try again later.")
				return;
			} else {
				console.log("Thanks for signing up. If you don't receive an email shortly, double check your spam box 🙂!")
			}

			setIsSubmitting(false);
			setEmail(''); // Clear the email input

		} catch (error) {
			console.error('Error submitting email:', error);
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full flex justify-center text-center py-16">
			<div className="max-w-screen-sm bg-slate-50 rounded-md border-2 border-slate-200">
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
								className={`border border-gray-400 rounded px-3 py-2 w-full ${isValid ? '' : 'border-red-500'}`}
								disabled={isSubmitting}
							/>
							{!isValid && <p className="text-red-500 text-xs italic">Please enter a valid email address</p>}
						</div>
						<button
							type="submit"
							className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
