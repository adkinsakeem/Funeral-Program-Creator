import React from 'react';
import TopTitle from "./TopTitle";

function Start(props) {

    if(props.pageNumber === 1){
  return (
        <div>
        <TopTitle title="Start" />
        <br></br>
        <div className="mainDescription scale-up-center">This is a program that allows the user to create their desired funeral program for free with ease.</div>
        <br></br><br></br><center>
        <button onClick={props.increase} className="proceedButton btn btn-primary btn-lg" type="button">Begin</button>
        </center>
        </div>
      );}else{
        return <div></div>
      }
}

export default Start;
