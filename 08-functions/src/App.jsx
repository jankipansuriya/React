import React from 'react'

const App = () => {
  function btnClicked(elem){
    console.log(elem);
  }

  return (
    <div>
      <button onClick={function(){ btnClicked('button clicked')}}>Click</button>
    </div>
  )
}

export default App


// function inputTyping(val){
//   console.log(val);
// }

// const pageScrolling = (val)=>{
//  if(val>0){
//   console.log('up-down');
//  }else{
//   console.log('down to up');
//  }
// }






    // <div onWheel={(elem)=>{
    //   pageScrolling(elem.deltaY)
    // }}>
      {/* <h1>Hi Janki</h1>
      <button onClick={()=>{console.log('btn clicked');
      }}>Change user</button> */}

      {/* <input 
      onChange={
        function(elem){
          inputTyping(elem.target.value)
        }} 
      type="text" 
      placeholder='Enter Name' 
      /> */}

      {/* <div onMouseMove={(elem)=>{
        console.log(elem.clientY)
      }}
      className='box'
      > */}


      {/* <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div> */}