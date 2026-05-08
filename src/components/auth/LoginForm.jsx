'use client'

import { useState } from 'react'
import { Card, InputGroup, TextField, Label, Button } from '@heroui/react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const LoginForm = () => {
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const handleLogin = (e) => {
		e.preventDefault()
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			alert('Logged in successfully (demo)')
		}, 1200)
	}

	return (
		<Card className='w-full max-w-md p-8 shadow-2xl rounded-[2.5rem] border border-border bg-surface text-surface-foreground'>
			{/* Header */}
			<div className='text-center mb-8'>
				<div className='w-16 h-16 mx-auto bg-primary-soft text-primary flex items-center justify-center rounded-2xl mb-4'>
					<Lock size={28} />
				</div>

				<h1 className='text-3xl font-serif font-bold text-foreground'>
					Welcome Back
				</h1>

				<p className='text-muted-foreground mt-2'>
					Sign in to your Sweet Rose account
				</p>
			</div>

			{/* Form */}
			<form onSubmit={handleLogin} className='space-y-5'>
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

				{/* Forgot Password */}
				<div className='flex justify-end -mt-2'>
					<Link
						href='/forgot-password'
						className='text-sm text-primary font-medium hover:underline'
					>
						Forgot password?
					</Link>
				</div>

				{/* Login Button */}
				<Button
					type='submit'
					isLoading={loading}
					className='w-full bg-primary text-primary-foreground font-bold'
				>
					Sign In
				</Button>

				{/* Divider */}
				<div className='flex items-center gap-3 my-4'>
					<div className='h-px bg-border flex-1' />
					<span className='text-xs text-muted-foreground'>OR</span>
					<div className='h-px bg-border flex-1' />
				</div>

				{/* Google Login */}
				<Button
					variant='secondary'
					className='w-full'
					onPress={() => alert('Google login')}
				>
					<FcGoogle size={20} />
					<span>Continue with Google</span>
				</Button>

				{/* Register Link */}
				<p className='text-center text-sm text-muted-foreground mt-4'>
					Don&apos;t have an account?{' '}
					<Link
						href='/register'
						className='text-primary font-bold hover:underline'
					>
						Create one
					</Link>
				</p>
			</form>
		</Card>
	)
}

export default LoginForm
