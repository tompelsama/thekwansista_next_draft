'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
    const gallery = useRef()
    const figureOne = useRef()
    const figureOneImg = useRef()
    const figureTwo = useRef()
    const figureTwoImg = useRef()

    useEffect(() => {
        gsap.to(figureOneImg.current, 0.6, {
            scrollTrigger: {
                target: gallery.current,
                start: "top+=20",
                end: "bottom",
                scrub: 1
            },
            y: 70,
            rotate: 25
        });
        gsap.to(figureOne.current, 0.6, {
            scrollTrigger: {
                target: gallery.current,
                start: "top+=20",
                end: "bottom",
                scrub: 1
            },
            y: -70,
            rotate: -25
        });
        
        gsap.to(figureTwoImg.current, 0.6, {
            scrollTrigger: {
                target: gallery.current,
                start: "top+=20",
                end: "bottom",
                scrub: 1
            },
            y: -50,
            rotate: -15
        });
        gsap.to(figureTwo.current, 0.6, {
            scrollTrigger: {
                target: gallery.current,
                start: "top+=20",
                end: "bottom",
                scrub: 1
            },
            y: 50,
            rotate: 15
        });
    }, [])

    return <div>
        <div className="wrapper flex flex-col sm:flex-row py-14 sm:py-32 text-yellow" ref={gallery}>
            <div className="flex basis-full sm:basis-1/2 pt-12 sm:pt-0">
                <figure className="figure figure--1" ref={figureOne}>
                    <div className="figure__image figure__image--1">
                        <img src="https://assets.codepen.io/652/shania-pinnata-7E-vKgzahd8-unsplash.jpg" alt="spaghetti with pesto sauce and cherry tomatoes." ref={figureOneImg} />
                    </div>
                </figure>
                <figure className="figure figure--2" ref={figureTwo}>
                    <div className="figure__image figure__image--2">
                        <img src="https://assets.codepen.io/652/tamanna-rumee-nswz6tIpgZk-unsplash.jpg" alt="tomato halves surrounded by basil leaves and peppercorns." ref={figureTwoImg} />
                    </div>
                </figure>
			</div>
            <div className="basis-full sm:basis-1/2 pt-20 sm:pt-0 sm:pl-28">
                <img src="" alt="sparkling icon" />
				<h2 className="sm:text-2xl text-xl mb-8">A Feast for the Eyes and Taste Buds</h2>
                <p>Discover our delectable range of heavenly home-baked pastries, crafted with love and care.</p>
			</div>
        </div>
    </div>
}

export default Gallery