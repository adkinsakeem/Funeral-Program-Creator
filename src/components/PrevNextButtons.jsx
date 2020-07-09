import React from "react";
import InfoBlocks from "./InfoBlocks";



function PrevNextButtons(props){

    let informationJSONArray = {};
    //informationJSONArray.push(InfoBlocks.infoArray);


    function increaseAndAddtoArray(){
        props.addIntoArray();
        props.increase();

    }


    return(<div>
    <br></br><br></br>
    <center><div className="buttonContainer"><button onClick={props.decrease} className="prevButton btn btn-primary btn-lg" type="button">Previous</button>
    <button onClick={props.increase} className="nextButton btn btn-primary btn-lg" type="button">Next</button>
   </div>
   </center>
    </div>
    );
}
export default PrevNextButtons;