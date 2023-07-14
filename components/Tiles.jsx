import React from 'react'

const Tiles = () => {
    return <div className="my-16 sm:my-40"> 
        <div className="wrapper grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-light-black p-10">
                <img src="" alt="Satisfied Client" />
                <span className="text-4xl my-8 block">100+</span>
                <p>Satisfied Client</p>
            </div>
            <div className="bg-light-black p-10">
                <img src="" alt="Lip-smacking Pastries" />
                <span className="text-4xl my-8 block">40+</span>
                <p>Lip-smacking Pastries</p>
            </div>
            <div className="bg-light-black p-10">
                <img src="" alt="Custom Orders" />
                <span className="text-4xl my-8 block">20+</span>
                <p>Custom Orders</p>
            </div>
        </div>
    </div>
}

export default Tiles