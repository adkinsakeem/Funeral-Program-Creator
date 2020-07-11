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

        <InfoBlocks inputType="number" title="Service Date" blockName="serviceDate" 
        textBoxClass="DayTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.dateOfDeath}/>
        
        <InfoBlocks inputType="text" title="Time of Service" blockName="timeOfService" 
        textBoxClass="infoTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.timeOfService}/>

        <InfoBlocks inputType="text" title="Location" blockName="locationOfService" 
        textBoxClass="infoTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.locationOfService}/>

        <InfoBlocks inputType="text" title="Obituary" blockName="obituary" 
        textBoxClass="infoTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.obituary}/>

        <InfoBlocks inputType="text" title="Scripture" blockName="scripture" 
        textBoxClass="infoTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.scripture}/>

        <InfoBlocks inputType="text" title="Acknowledgements" blockName="acknowledgements" 
        textBoxClass="infoTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.acknowledgements}/>

        <InfoBlocks inputType="text" title="Poem" blockName="poem" 
        textBoxClass="infoTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.poem}/>

        <InfoBlocks inputType="text" title="Arranged By" blockName="arrangedBy" 
        textBoxClass="infoTableWidth" changeTitleOption="yes" PNumber={props.pageNumber} dataArray={props.infoJSON.arrangedBy}/>





        <PrevNextButtons increase={props.increase} decrease={props.decrease} addIntoArray={props.IntoArray} PNumber={props.pageNumber}/>
        </div>
      );}else{
        return <div></div>
      }
    }

export default Information;
