'use client'

import { useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'

import {
	ArrowLeft,
	Check,
	Flower2,
	Leaf,
	ShoppingBag,
	Truck,
} from 'lucide-react'

import { Button, Card, Spinner } from '@heroui/react'

import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import QuantitySelector from './QuantitySelector'
import ProductAdditionalInfo from './ProductAdditionalInfo'

const ProductDetails = ({ product, onAddToCart }) => {
	const [qty, setQty] = useState(1)
	const [occasion, setOccasion] = useState('')
	const [instructions, setInstructions] = useState('')
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
			await new Promise((r) => setTimeout(r, 800))

			onAddToCart?.({
				...product,
				quantity: qty,
				occasion,
				instructions,
			})

			toast.success(`🎉 Added ${qty} ${product.title} to your Sweet Box!`)

			setIsAdded(true)

			setTimeout(() => {
				setIsAdded(false)
				setQty(1)
				setOccasion('')
				setInstructions('')
			}, 3000)
		} catch (error) {
			toast.error('Failed to add item to cart')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='min-h-screen bg-background py-12 text-foreground md:py-20'>
			<div className='container mx-auto'>
				{/* BACK BUTTON */}
				<Button
					asChild
					href='/shop'
					variant='light'
					className='mb-10 font-medium text-primary'
				>
					<Link className='flex items-center gap-2 text-lg' href={'/shop'}>
						<ArrowLeft size={18} />
						Back to Shop
					</Link>
				</Button>

				{/* GRID */}
				<div className='grid gap-12 lg:grid-cols-2 lg:gap-20'>
					{/* IMAGE */}
					<Card className='border border-border bg-card p-4 shadow-sm'>
						<ProductImage image={product.image} title={product.title} />
					</Card>

					{/* INFO */}
					<Card className='border border-border bg-card p-6 shadow-sm md:p-8'>
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

							{/* ADD TO CART BUTTON */}
							<Button
								type='submit'
								size='lg'
								fullWidth
								className='bg-primary'
								isDisabled={isLoading}
								startContent={
									isLoading ? (
										<Spinner size='sm' />
									) : isAdded ? (
										<Check size={18} />
									) : (
										<ShoppingBag size={18} />
									)
								}
							>
								{isLoading
									? 'Processing...'
									: isAdded
										? 'Added to Box!'
										: 'Add to My Sweet Box'}
							</Button>
						</form>

						{/* SIMPLE DIVIDER */}
						<div className='absolute bottom-10 left-0 w-full'>
							<div className='my-8 h-px w-full bg-border' />

							{/* TRUST MARKERS */}
							<div className='flex flex-wrap justify-center gap-6 text-muted-foreground'>
								<div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-widest'>
									<Flower2 className='h-4 w-4 text-primary' />
									Fresh
								</div>

								<div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-widest'>
									<Truck className='h-4 w-4 text-primary' />
									Next-Day
								</div>

								<div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-widest'>
									<Leaf className='h-4 w-4 text-primary' />
									Organic
								</div>
							</div>
						</div>
					</Card>
				</div>

				{/* EXTRA SECTION */}
				<div className='mt-16'>
					<ProductAdditionalInfo product={product} />
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
