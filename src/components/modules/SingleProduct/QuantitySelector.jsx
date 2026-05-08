import { Label, ListBox, Select } from '@heroui/react'

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
		<div className='space-y-6 bg-card p-8 rounded-[2.5rem] border border-border shadow-xl transition-colors duration-300'>
			{/* Quantity + Occasion */}
			<div className='grid md:grid-cols-2 gap-6'>
				{/* Quantity */}
				<div>
					<label className='block text-sm font-bold text-foreground mb-3'>
						Quantity
					</label>

					<div className='flex items-center bg-secondary rounded-2xl p-1.5 w-fit border border-border transition-colors duration-300'>
						<button
							type='button'
							onClick={() => setQty((q) => (q > 1 ? q - 1 : 1))}
							className='
								w-10 h-10
								flex items-center justify-center
								text-primary
								hover:bg-background
								rounded-xl
								transition-all
								font-bold text-xl
							'
						>
							−
						</button>

						<input
							type='number'
							value={qty}
							onChange={(e) =>
								setQty(Math.max(1, parseInt(e.target.value) || 1))
							}
							className='
								w-12 text-center
								bg-transparent
								text-foreground
								font-bold text-lg
								outline-none
								appearance-none
							'
						/>

						<button
							type='button'
							onClick={() => setQty((q) => q + 1)}
							className='
								w-10 h-10
								flex items-center justify-center
								text-primary
								hover:bg-background
								rounded-xl
								transition-all
								font-bold text-xl
							'
						>
							+
						</button>
					</div>
				</div>

				{/* Occasion */}
				<div>
					<Select
						selectedKeys={occasion ? [occasion] : []}
						onSelectionChange={(keys) => {
							const value = Array.from(keys)[0]
							setOccasion(value || '')
						}}
						className='w-full'
						placeholder='Select an occasion'
					>
						<Label className='text-sm font-bold text-foreground mb-2'>
							Select Occasion
						</Label>

						<Select.Trigger
							className='
								bg-secondary
								border border-border
								text-foreground
								rounded-2xl
								px-4 py-3
								min-h-14
								shadow-none
								transition-all
								duration-300
								data-[hovered=true]:bg-hover
								data-[focus-visible=true]:ring-2
								data-[focus-visible=true]:ring-primary/30
							'
						>
							<Select.Value />
							<Select.Indicator />
						</Select.Trigger>

						<Select.Popover
							className='
								bg-card
								border border-border
								rounded-2xl
								shadow-2xl
								p-2
							'
						>
							<ListBox className='space-y-1'>
								{occasions.map((occ) => (
									<ListBox.Item
										key={occ}
										id={occ}
										textValue={occ}
										className='
											rounded-xl
											px-3 py-3
											text-card-foreground
											cursor-pointer
											transition-all
											duration-200
											data-[hovered=true]:bg-hover
											data-[selected=true]:bg-primary
											data-[selected=true]:text-primary-foreground
										'
									>
										{occ}
										<ListBox.ItemIndicator />
									</ListBox.Item>
								))}
							</ListBox>
						</Select.Popover>
					</Select>
				</div>
			</div>

			{/* Special Instructions */}
			<div>
				<label className='block text-sm font-bold text-foreground mb-3'>
					Special Baker Instructions
				</label>

				<textarea
					value={instructions}
					onChange={(e) => setInstructions(e.target.value)}
					rows='3'
					placeholder='e.g. Less sugar, extra rose petals on top...'
					className='
						w-full
						bg-secondary
						border border-border
						text-foreground
						placeholder:text-muted-foreground
						rounded-2xl
						px-4 py-4
						outline-none
						resize-none
						transition-all
						duration-300
						focus:ring-2
						focus:ring-primary/20
					'
				/>
			</div>
		</div>
	)
}

export default QuantitySelector
