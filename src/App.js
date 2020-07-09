import React from 'react';
import logo from './logo.svg';
import IndexPage from "./components/IndexPage";
import Header from "./components/Header";
import Start from "./components/Start";
import Information from "./components/Information";
import InfoBlocks from "./components/InfoBlocks";

function App() {

  const [pageNumber, changePage] = React.useState(2);
  var informationJSONArray = {
    "nameOfDeceased":{title:"", using: true, changeTitle: false, info:""},
    "dateOfBirth":{title:"", using: true, changeTitle: false, info:{Month: "Jan",Day: "1",Year: "1900"}},
    "dateOfDeath":{title:"", using: true, changeTitle: false, info:{Month: "Jan",Day: "1",Year: "1900"}}

  
  };

  

  function increasePage(){
    if(pageNumber === 2){
      console.log("finalTest");
      console.log(informationJSONArray);
      
    }
      changePage(pageNumber+1);
      console.log(pageNumber);
  }
  function decreasePage(){
      changePage(pageNumber--);
  }

  function storeIntoJSONArray(infoArray){
    if(pageNumber === 2){
    informationJSONArray.push(infoArray);
    //console.log(informationJSONArray.info);
    }
    
  }




  return (
    <div>
    <Header />
    <IndexPage pageNumber={pageNumber} increase={increasePage} decrease={decreasePage}/>
    <Start pageNumber={pageNumber} increase={increasePage} decrease={decreasePage}/>
    <Information pageNumber={pageNumber} increase={increasePage} decrease={decreasePage} IntoArray={storeIntoJSONArray} infoJSON={informationJSONArray}/>


    
    </div>
  );
}

export default App;
