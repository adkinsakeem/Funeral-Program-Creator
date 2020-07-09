import React from "react";



function MainDescription (props){

    function getDescription(desc){
        console.log("break "+desc);
        return(<div className="mainDescription scale-up-center">{desc}</div>);

    }


    return(<div>
    {getDescription(...props.description)}
    {/* <div className="mainDescription scale-up-center"></div> */}

    </div>);
}
export default MainDescription;