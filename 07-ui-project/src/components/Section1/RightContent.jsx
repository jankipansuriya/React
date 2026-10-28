import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className=' flex rounded-4xl overflow-x-auto flex-nowrap gap-5 p-4 h-full w-2/3 '>
        {props.users.map(function(val,idx){

            return <RightCard color={val.color} key={idx} id={idx} img={val.img} tag={val.tag}/>
        })}
    </div>
  )
}

export default RightContent