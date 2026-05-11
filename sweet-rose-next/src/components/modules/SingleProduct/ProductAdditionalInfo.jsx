const ProductAdditionalInfo = ({ product }) => {
	const ingredients =
		product.ingredients ||
		'Organic cake flour, fair-trade cocoa, grass-fed butter, farm-fresh eggs, pure rose water infusion, Tahitian vanilla beans, cultured cream cheese, and edible gold leaf accents.'

	const allergies = product.allergies || [
		'Contains Dairy',
		'Contains Gluten',
		'Nut-Free',
	]

	const careInstructions =
		product.careInstructions ||
		'Best enjoyed within 48 hours. Store in a cool, dry place or refrigerate and bring to room temperature 30 minutes before serving for the best texture.'

	return (
		<section className='mt-20 border-t border-rose-100 pt-20'>
			<div className='grid md:grid-cols-3 gap-12'>
				{/* Ingredients */}
				<div>
					<h3 className='text-xl font-serif font-bold text-rose-900 mb-4'>
						The Ingredients
					</h3>
					<p className='text-slate-500 text-sm leading-relaxed'>
						{ingredients}
					</p>
				</div>

				{/* Allergies */}
				<div>
					<h3 className='text-xl font-serif font-bold text-rose-900 mb-4'>
						Allergy Advice
					</h3>
					<div className='flex flex-wrap gap-2'>
						{allergies.map((allergy, idx) => (
							<span
								key={idx}
								className='px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg uppercase tracking-widest'
							>
								{allergy}
							</span>
						))}
					</div>
				</div>

				{/* Care Instructions */}
				<div>
					<h3 className='text-xl font-serif font-bold text-rose-900 mb-4'>
						Care Instructions
					</h3>
					<p className='text-slate-500 text-sm leading-relaxed'>
						{careInstructions}
					</p>
				</div>
			</div>
		</section>
	)
}

export default ProductAdditionalInfo
