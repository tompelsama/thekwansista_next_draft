import React from 'react'

const Welcome = () => {
	return <div className="py-20 sm:py-24 bg-yellow text-black">
		<div className="wrapper grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div className="md:px-10">
				<h2 className="sm:text-3xl text-xl">Mouth-Watering Masterpieces</h2>
			</div>
			<div className="md:px-10">
				<p className="sm:text-lg text-base">Our delicious pastries are made fresh daily, with our secret recipes passed down through generations. Taste the love in every scrumptious bite!</p>
			</div>
		</div>
	</div>
}

export default Welcome