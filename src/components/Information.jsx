import React from 'react';
import PrevNextButtons from "./PrevNextButtons";
import TopTitle from "./TopTitle";
import MainDescription from "./MainDescription";
import Switch from "./Switch";
import InfoBlocks from "./InfoBlocks";

function Information(props) {

    if(props.pageNumber === 2){
  return (
        <div>
        <TopTitle title="Information" />
        {/* <MainDescription description={["Please Enter the Required Information", "Make the necessary changes if needed"]}/> */}
        <div className="mainDescription scale-up-center">Please Enter the Required Information</div>
        <div className="mainDescription scale-up-center">Make the necessary changes if needed</div>
        <br></br>
        <InfoBlocks inputType="text" title="Name of Deceased" blockName="nameOfDeceased" 
        textBoxClass="infoTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.nameOfDeceased}/>

        <InfoBlocks inputType="number" title="Sunrise" blockName="dateOfBirth" 
        textBoxClass="DayTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.dateOfBirth}/>

        <InfoBlocks inputType="number" title="Sunset" blockName="dateOfDeath" 
        textBoxClass="DayTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.dateOfDeath}/>



        <PrevNextButtons increase={props.increase} decrease={props.decrease} addIntoArray={props.IntoArray} PNumber={props.pageNumber}/>
        </div>
      );}else{
        return <div></div>
      }
    }

export default Information;
