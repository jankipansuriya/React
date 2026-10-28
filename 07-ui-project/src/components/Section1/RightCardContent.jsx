const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 p-10 flex flex-col justify-between h-full w-full'>
        <h2 className='h-12 w-12 rounded-full flex justify-center items-center text-2xl font-bold bg-white'>{(props.id)+1}</h2>
        <div>
          <p className=' text-shadow-2xs leading-relaxed pb-10 text-white font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laudantium animi beatae blanditiis vitae quibusdam.</p>
          <div className='flex items-center justify-between'>
            <button style={{backgroundColor:props.color}} className='text-white px-12 py-2 rounded-full'>{props.tag}</button>
            <button className= 'text-white px-3 py-1.5 rounded-full'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
    </div>
  )
}

export default RightCardContent