const GiftSection = ({ isGift, setIsGift, giftMessage, setGiftMessage }) => {
	return (
		<div className='p-4 bg-rose-50/50 rounded-2xl border border-rose-100'>
			<label className='flex items-center gap-3 cursor-pointer group'>
				<div className='relative'>
					<input
						type='checkbox'
						checked={isGift}
						onChange={(e) => setIsGift(e.target.checked)}
						className='sr-only peer'
					/>
					<div className='w-12 h-6 bg-slate-200 rounded-full peer-checked:bg-rose-500 transition-colors'></div>
					<div className='absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6'></div>
				</div>
				<span className='text-sm font-bold text-slate-700 group-hover:text-rose-600 transition-colors'>
					Add a handwritten gift message?
				</span>
			</label>

			{isGift && (
				<div className='mt-4 animate-in slide-in-from-top duration-300'>
					<textarea
						value={giftMessage}
						onChange={(e) => setGiftMessage(e.target.value)}
						rows='2'
						placeholder='Write your sweet message here...'
						className='w-full bg-white border border-rose-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-rose-200 text-sm'
					/>
				</div>
			)}
		</div>
	)
}

export default GiftSection
