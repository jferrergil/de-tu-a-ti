import React from 'react'
import centroDia from '../assets/centroDia.jpg'

const Acompañamiento = () => {
  return (
    <div name='acompañamiento ' className='w-full h-screen bg-[#ECFAEE] text-[#6F6F6F] ' >
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4FECA5] mt-6'>Acompañamiento terapéutico</p>
            <p className='py-4' >Posible descripción de la terapia</p>
        <div>
            <div>
                <img className='w-50 mx-auto' src={centroDia} alt='foto acompañamiento' />
            </div>
        </div>
        </div>

    </div>
  )
}

export default Acompañamiento