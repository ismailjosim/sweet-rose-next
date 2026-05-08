'use client'

import { useState } from 'react'
import { Card, InputGroup, TextField, Label, Button } from '@heroui/react'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const RegisterForm = () => {
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const handleRegister = (e) => {
		e.preventDefault()
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			alert('Account created successfully (demo)')
		}, 1200)
	}
	return (
		<Card className='w-full max-w-md p-8 shadow-2xl rounded-[2.5rem] border border-border bg-surface text-surface-foreground'>
			{/* Header */}
			<div className='text-center mb-8'>
				<div className='w-16 h-16 mx-auto bg-primary-soft text-primary flex items-center justify-center rounded-2xl mb-4'>
					<User size={28} />
				</div>

				<h1 className='text-3xl font-serif font-bold text-foreground'>
					Create Account
				</h1>

				<p className='text-muted-foreground mt-2'>
					Join Sweet Rose and enjoy sweet moments
				</p>
			</div>

			{/* Form */}
			<form onSubmit={handleRegister} className='space-y-5'>
				{/* Name */}
				<TextField isRequired>
					<Label>Full Name</Label>
					<InputGroup fullWidth className='border-2'>
						<InputGroup.Prefix>
							<User size={18} className='text-primary' />
						</InputGroup.Prefix>
						<InputGroup.Input type='text' placeholder='John Doe' />
					</InputGroup>
				</TextField>

				{/* Email */}
				<TextField isRequired>
					<Label>Email</Label>
					<InputGroup fullWidth className='border-2'>
						<InputGroup.Prefix>
							<Mail size={18} className='text-primary' />
						</InputGroup.Prefix>
						<InputGroup.Input type='email' placeholder='hello@sweetrose.com' />
					</InputGroup>
				</TextField>

				{/* Password */}
				<TextField isRequired>
					<Label>Password</Label>
					<InputGroup fullWidth className='border-2'>
						<InputGroup.Prefix>
							<Lock size={18} className='text-primary' />
						</InputGroup.Prefix>
						<InputGroup.Input
							type={showPassword ? 'text' : 'password'}
							placeholder='••••••••'
						/>
						<InputGroup.Suffix>
							<button
								type='button'
								onClick={() => setShowPassword(!showPassword)}
								className='text-muted-foreground hover:text-primary transition'
							>
								{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
							</button>
						</InputGroup.Suffix>
					</InputGroup>
				</TextField>

				{/* Confirm Password */}
				<TextField isRequired>
					<Label>Confirm Password</Label>
					<InputGroup fullWidth className='border-2'>
						<InputGroup.Prefix>
							<Lock size={18} className='text-primary' />
						</InputGroup.Prefix>
						<InputGroup.Input
							type={showConfirmPassword ? 'text' : 'password'}
							placeholder='••••••••'
						/>
						<InputGroup.Suffix>
							<button
								type='button'
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								className='text-muted-foreground hover:text-primary transition'
							>
								{showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
							</button>
						</InputGroup.Suffix>
					</InputGroup>
				</TextField>

				{/* Register Button */}
				<Button
					type='submit'
					isLoading={loading}
					className='w-full bg-primary text-primary-foreground font-bold'
				>
					Create Account
				</Button>

				{/* Divider */}
				<div className='flex items-center gap-3 my-4'>
					<div className='h-px bg-border flex-1' />
					<span className='text-xs text-muted-foreground'>OR</span>
					<div className='h-px bg-border flex-1' />
				</div>

				{/* Google Signup */}
				<Button
					variant='secondary'
					className='w-full'
					onPress={() => alert('Google signup')}
				>
					<FcGoogle size={20} />
					<span>Continue with Google</span>
				</Button>

				{/* Login Link */}
				<p className='text-center text-sm text-muted-foreground mt-4'>
					Already have an account?{' '}
					<Link
						href='/login'
						className='text-primary font-bold hover:underline'
					>
						Sign in
					</Link>
				</p>
			</form>
		</Card>
	)
}

export default RegisterForm
