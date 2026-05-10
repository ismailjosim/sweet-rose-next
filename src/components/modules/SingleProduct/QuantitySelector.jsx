'use client'

import { ListBox, Select } from '@heroui/react'

const occasions = [
	'Just Treat Yourself',
	'Birthday Celebration',
	'Anniversary',
	"Valentine's Day",
	'Gift for Someone',
]

const QuantitySelector = ({
	qty,
	setQty,
	occasion,
	setOccasion,
	instructions,
	setInstructions,
}) => {
	return (
		<div className='space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm transition-colors'>
			<div className='grid gap-6 md:grid-cols-2'>
				{/* QUANTITY */}
				<div>
					<label className='mb-3 block text-sm font-semibold text-foreground'>
						Quantity
					</label>

					<div className='flex w-fit items-center rounded-2xl border border-border bg-muted p-1'>
						<button
							type='button'
							onClick={() => setQty((q) => (q > 1 ? q - 1 : 1))}
							className='flex h-10 w-10 items-center justify-center text-xl font-bold text-foreground transition-colors hover:text-primary'
						>
							−
						</button>

						<input
							type='number'
							value={qty}
							onChange={(e) =>
								setQty(Math.max(1, parseInt(e.target.value) || 1))
							}
							className='w-full bg-transparent text-center text-foreground outline-none'
						/>

						<button
							type='button'
							onClick={() => setQty((q) => q + 1)}
							className='flex h-10 w-10 items-center justify-center text-xl font-bold text-foreground transition-colors hover:text-primary'
						>
							+
						</button>
					</div>
				</div>

				{/* OCCASION */}
				<div>
					<label className='mb-3 block text-sm font-semibold text-foreground'>
						Occasion
					</label>

					<Select
						className='w-full'
						placeholder='Choose occasion'
						selectedKey={occasion || null}
						onSelectionChange={(key) => setOccasion(key || '')}
					>
						<Select.Trigger className='flex w-full items-center justify-between rounded-2xl border border-border bg-muted p-1 px-4 h-[52px] text-foreground data-[placeholder]:text-muted-foreground shadow-none'>
							<Select.Value className='text-foreground' />
							<Select.Indicator className='text-muted-foreground' />
						</Select.Trigger>

						<Select.Popover>
							<ListBox className='p-2'>
								{occasions.map((occ) => (
									<ListBox.Item key={occ} id={occ} textValue={occ}>
										{occ}
									</ListBox.Item>
								))}
							</ListBox>
						</Select.Popover>
					</Select>
				</div>
			</div>

			{/* INSTRUCTIONS */}
			<div>
				<label className='mb-3 block text-sm font-semibold text-foreground'>
					Special Baker Instructions
				</label>

				<textarea
					placeholder='your message for baker...'
					value={instructions}
					onChange={(e) => setInstructions(e.target.value)}
					rows={3}
					className='w-full rounded-2xl border border-border bg-transparent p-4 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary transition-shadow'
				/>
			</div>
		</div>
	)
}

export default QuantitySelector
