import { Button } from '@heroui/react'

const ShopHeading = () => {
	return (
		<div className='container mx-auto flex flex-col justify-center items-center text-center my-10 gap-6'>
			{/* Title */}
			<div>
				<h2 className='text-3xl font-serif font-bold text-foreground mb-2'>
					Our Signature Collection
				</h2>

				<p className='text-muted-foreground'>
					Discover handcrafted sweets made with love, elegance, and a touch of
					rose.
				</p>
			</div>

			{/* Filters */}
			<div className='flex gap-2 flex-wrap justify-center'>
				{/* Active Button */}
				<Button
					radius='full'
					className='bg-primary text-primary-foreground font-medium hover:opacity-90 transition'
				>
					All Products
				</Button>

				<Button
					radius='full'
					variant='bordered'
					className='border-border text-foreground hover:bg-hover transition'
				>
					Cakes
				</Button>

				<Button
					radius='full'
					variant='bordered'
					className='border-border text-foreground hover:bg-hover transition'
				>
					Pastries
				</Button>

				<Button
					radius='full'
					variant='bordered'
					className='border-border text-foreground hover:bg-hover transition'
				>
					Specialty
				</Button>
			</div>
		</div>
	)
}

export default ShopHeading
