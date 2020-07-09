import React from 'react';

function IndexPage(props) {



  if(props.pageNumber === 0){
  return (
    <div>
    <br></br>
      <div className="mainDescription">
      A few years ago, one of my favorite aunts passed away. Because of my background, I was tasked with creating her funeral program. I didn't want to do it because, to me, it was hammering home that she was no longer with us. I wanted to make this process as easy as possible. Unfortunately, while searching online for a tool that allowed me to create this within a few minutes, I noticed that every option required some sort of payment. It was like "sorry your relative passed. Give us some money and we'll make things easier for you." I thought to myself "This is not ok." That's when I decided to make a free Funeral-Program-Creator. This is part of the process that should be as easy as possible.  
      </div>
      <center>
      <button onClick={props.increase} className="proceedButton btn btn-primary btn-lg" type="button">Click Here to Proceed</button>
    </center>
    </div>
  );}else{
    return <div></div>
  }
}

export default IndexPage;
