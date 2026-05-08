const QuantitySelector = ({
	qty,
	setQty,
	occasion,
	setOccasion,
	instructions,
	setInstructions,
}) => {
	const occasions = [
		'Just Treat Yourself',
		'Birthday Celebration',
		'Anniversary',
		"Valentine's Day",
		'Gift for Someone',
	]

	return (
		<div className='space-y-6 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-rose-200/50 border border-rose-100'>
			{/* Quantity and Occasion Row */}
			<div className='grid md:grid-cols-2 gap-6'>
				{/* Quantity */}
				<div>
					<label className='block text-sm font-bold text-slate-700 mb-3'>
						Quantity
					</label>
					<div className='flex items-center bg-rose-50 rounded-2xl p-1.5 w-fit border border-rose-100'>
						<button
							type='button'
							onClick={() => setQty((q) => (q > 1 ? q - 1 : 1))}
							className='w-10 h-10 flex items-center justify-center text-rose-600 hover:bg-white rounded-xl transition-all font-bold text-xl'
						>
							−
						</button>
						<input
							type='number'
							value={qty}
							onChange={(e) =>
								setQty(Math.max(1, parseInt(e.target.value) || 1))
							}
							className='w-12 text-center bg-transparent font-bold text-lg outline-none'
						/>
						<button
							type='button'
							onClick={() => setQty((q) => q + 1)}
							className='w-10 h-10 flex items-center justify-center text-rose-600 hover:bg-white rounded-xl transition-all font-bold text-xl'
						>
							+
						</button>
					</div>
				</div>

				{/* Occasion */}
				<div>
					<label className='block text-sm font-bold text-slate-700 mb-3'>
						Select Occasion
					</label>
					<select
						value={occasion}
						onChange={(e) => setOccasion(e.target.value)}
						className='w-full bg-rose-50 border border-rose-100 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-rose-200 transition-all font-medium appearance-none'
						style={{
							backgroundImage:
								'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 20 20%22%3E%3Cpath stroke=%22%23e11d48%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M6 8l4 4 4-4%22/%3E%3C/svg%3E")',
							backgroundPosition: 'right 0.75rem center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: '1.25em 1.25em',
							paddingRight: '2.5rem',
						}}
					>
						<option value=''>-- Select an occasion --</option>
						{occasions.map((occ) => (
							<option key={occ} value={occ}>
								{occ}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Special Instructions */}
			<div>
				<label className='block text-sm font-bold text-slate-700 mb-3'>
					Special Baker Instructions
				</label>
				<textarea
					value={instructions}
					onChange={(e) => setInstructions(e.target.value)}
					rows='3'
					placeholder='e.g. Less sugar, extra rose petals on top...'
					className='w-full bg-rose-50 border border-rose-100 rounded-2xl px-4 py-4 outline-none focus:ring-2 focus:ring-rose-200 transition-all resize-none'
				/>
			</div>
		</div>
	)
}

export default QuantitySelector
