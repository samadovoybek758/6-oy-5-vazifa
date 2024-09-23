import React from 'react';
import delet from '../assets/delet.svg';
import check from '../assets/Check.svg'

function Card(props) {
    const{delet_btn}= props
  return (
    <div className='w-[432px] flex justify-between mx-auto my-5 bg-blue-900 px-4 py-4 rounded-md align-middle ' >
        <h3 className='text-base font-medium w-[200px] overflow-auto text-violet-500'>{props.title.input}</h3>
        <div className='flex gap-2'>
            <img src={check} alt="" />
            <img src={delet} onClick={() => {delet_btn(props.title.id)}}/>
        </div>
    </div>
  )
}

export default Card