'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import QuantitySelector from './QuantitySelector'
import GiftSection from './GiftSection'
import ProductAdditionalInfo from './ProductAdditionalInfo'
import Link from 'next/link'

const ProductDetails = ({ product, onAddToCart }) => {
	const [qty, setQty] = useState(1)
	const [occasion, setOccasion] = useState('')
	const [instructions, setInstructions] = useState('')
	const [isGift, setIsGift] = useState(false)
	const [giftMessage, setGiftMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isAdded, setIsAdded] = useState(false)

	const handleAddToCart = async (e) => {
		e.preventDefault()

		if (!occasion) {
			toast.warning('Please select an occasion', {
				position: 'top-right',
				autoClose: 3000,
			})
			return
		}

		setIsLoading(true)

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 800))

			if (onAddToCart) {
				onAddToCart({
					...product,
					quantity: qty,
					occasion,
					instructions,
					giftMessage: isGift ? giftMessage : null,
				})
			}

			toast.success(`🎉 Added ${qty} ${product.title} to your Sweet Box!`, {
				position: 'top-right',
				autoClose: 4000,
			})

			setIsAdded(true)
			setTimeout(() => {
				setIsAdded(false)
				// Reset form
				setQty(1)
				setOccasion('')
				setInstructions('')
				setIsGift(false)
				setGiftMessage('')
			}, 3000)
		} catch (error) {
			console.error('Error adding to cart:', error)
			toast.error('Failed to add item to cart', {
				position: 'top-right',
				autoClose: 4000,
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='min-h-screen bg-rose-50 py-12 md:py-20'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Back Button */}
				<Link
					href={'/shop'}
					className='mb-10 flex items-center gap-2 text-rose-600 font-bold hover:text-rose-800 transition-colors group'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 transform group-hover:-translate-x-1 transition-transform'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M10 19l-7-7m0 0l7-7m-7 7h18'
						/>
					</svg>
					Back to Shop
				</Link>

				{/* Product Container */}
				<div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-start'>
					{/* Left: Images */}
					<ProductImage image={product.image} title={product.title} />

					{/* Right: Info & Form */}
					<div className='flex flex-col h-full'>
						<ProductInfo product={product} />

						<form onSubmit={handleAddToCart} className='space-y-6'>
							<QuantitySelector
								qty={qty}
								setQty={setQty}
								occasion={occasion}
								setOccasion={setOccasion}
								instructions={instructions}
								setInstructions={setInstructions}
							/>

							<GiftSection
								isGift={isGift}
								setIsGift={setIsGift}
								giftMessage={giftMessage}
								setGiftMessage={setGiftMessage}
							/>

							{/* Submit Button */}
							<button
								type='submit'
								disabled={isLoading}
								className={`w-full py-5 ${
									isAdded ? 'bg-emerald-500' : 'bg-rose-600'
								} text-white font-bold rounded-2xl shadow-xl shadow-rose-200 hover:${
									isAdded ? 'bg-emerald-600' : 'bg-rose-700'
								} hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed`}
							>
								{isLoading ? (
									<>
										<svg
											className='animate-spin h-5 w-5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
										>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'
											></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
											></path>
										</svg>
										Processing...
									</>
								) : isAdded ? (
									<>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M5 13l4 4L19 7'
											/>
										</svg>
										Added to Box!
									</>
								) : (
									<>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6 group-hover:animate-bounce'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
											/>
										</svg>
										Add to My Sweet Box
									</>
								)}
							</button>
						</form>

						{/* Trust Markers */}
						<div className='flex flex-wrap justify-center gap-6 pt-6 mt-4'>
							<div className='flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest'>
								<span className='text-rose-500'>🌸</span> Freshly Baked
							</div>
							<div className='flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest'>
								<span className='text-rose-500'>🚚</span> Next-Day Delivery
							</div>
							<div className='flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest'>
								<span className='text-rose-500'>🌿</span> Organic Ingredients
							</div>
						</div>
					</div>
				</div>

				{/* Additional Info Section */}
				<ProductAdditionalInfo product={product} />
			</div>
		</div>
	)
}

export default ProductDetails
