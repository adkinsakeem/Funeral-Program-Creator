import React from "react";
import Switch from "./Switch";


function InfoBlocks(props){
    const [titleCheckBox, addCustomTitle] = React.useState(false);
    const [infoArray, addToArray] = React.useState({
        using: false,
        changeTitle:false,
        title: props.title,
        info: ""
    });

    const [dateArray, addToDateArray] = React.useState({
        using: false,
        changeTitle: false,
        title: props.title,
        info: {
            Month: "Jan",
            Day: "1",
            Year: "1900"
        }
    });

    let defaultTitle = props.title;
    let monthListID = props.blockName+"monthID";


    function toggleDisabled(){
        if(props.blockName === "dateOfBirth" || props.blockName === "dateOfDeath"){
            addToDateArray(prevValue=>{
                if(dateArray.using === true){
                    props.dataArray.using = false;
                    document.getElementById(monthListID).disabled = false;
                    return({using: false,
                        changeTitle: prevValue.changeTitle,
                        title: prevValue.title,
                        info: prevValue.info
                    });
                }else if(dateArray.using === false){
                    props.dataArray.using = true;
                    document.getElementById(monthListID).disabled = true;

                    return({using: true,
                        changeTitle: prevValue.changeTitle,
                        title: prevValue.title,
                        info: prevValue.info
                    });
                }
            });


        }else{
            addToArray(prevValue=>{
                if(infoArray.using === true){
                    props.dataArray.using = false;
                    return({using: false,
                        changeTitle: prevValue.changeTitle,
                        title: prevValue.title,
                        info: prevValue.info
                    });
                }else if(infoArray.using === false){
                    props.dataArray.using = true;
                    return({using: true,
                        changeTitle: prevValue.changeTitle,
                        title: prevValue.title,
                        info: prevValue.info
                    });
                }});
        }
    }

    function addTextFieldToArray(event){
        var newInfoValue = event.target.value;
        let targetName = event.target.name;


        if(props.blockName === "dateOfBirth" || props.blockName === "dateOfDeath"){
            var e = document.getElementById(monthListID);
            var targetMonthName = e.options[e.selectedIndex].value;
            addToDateArray(prevValue=>{
                props.dataArray.using = prevValue.using;
                props.dataArray.changeTitle = prevValue.changeTitle;
                props.dataArray.title = prevValue.title;
                if(targetName === "Month"){
                    props.dataArray.info.Month = targetMonthName;
                    props.dataArray.info.Day = prevValue.info.Day;
                    props.dataArray.info.Year = prevValue.info.Year;
                }else if(targetName === "Day"){
                    props.dataArray.info.Month = targetMonthName;
                    props.dataArray.info.Day = newInfoValue;
                    props.dataArray.info.Year = prevValue.info.Year;
                }else if(targetName === "Year"){
                    props.dataArray.info.Month = targetMonthName;
                    props.dataArray.info.Day = prevValue.info.Day;
                    props.dataArray.info.Year = newInfoValue;
                }

                if(targetName === "Month"){
                    return({
                        using: prevValue.using,
                        changeTitle: prevValue.changeTitle,
                        title: prevValue.title,
                        info: {
                            Month:targetMonthName,
                            Day:prevValue.info.Day,
                            Year: prevValue.info.Year
                        }
                    });
                }else  if(targetName === "Day"){
                    return({
                        using: prevValue.using,
                        changeTitle: prevValue.changeTitle,
                        title: prevValue.title,
                        info: {
                            Month:targetMonthName,
                            Day:newInfoValue,
                            Year: prevValue.info.Year
                        }
                    });
                }else  if(targetName === "Year"){
                    return({
                        using: prevValue.using,
                        changeTitle: prevValue.changeTitle,
                        title: prevValue.title,
                        info: {
                            Month:targetMonthName,
                            Day:prevValue.info.Day,
                            Year:newInfoValue
                        }
                    });
                }
            });

        }else{
            addToArray(prevValue=>{
                props.dataArray.using = prevValue.using;
                props.dataArray.changeTitle = prevValue.changeTitle;
                props.dataArray.info = newInfoValue;
                props.dataArray.title = prevValue.title;

                return({using: prevValue.using,
                    changeTitle: prevValue.changeTitle,
                    title: prevValue.title,
                    info: newInfoValue
                });
            });
        }
    }

    function getTextField(){

        if(props.blockName === "dateOfBirth" || props.blockName === "dateOfDeath"){
            return(
                <form>
                <table>
                <tr style={{textAlign:'center'}}>
                <th>Month</th>
                <th>Day</th>
                <th>Year</th>
                </tr>
                <tr>
                <td> &nbsp;
                <select name="Month" id={monthListID}>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">Apr</option>
                <option value="May">May</option>
                <option value="June">Jun</option>
                <option value="July">Jul</option>
                <option value="August">Aug</option>
                <option value="September">Sep</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>

            {/* placeholder="Enter Requested Information"  */}
            disabled={dateArray.using}
            onChange={addTextFieldToArray}
            </select>
            </td><td>&nbsp;
            <input 
            className={props.textBoxClass} 
            type="text"
            name="Day"
            placeholder="Day" 
            disabled={dateArray.using}
            onChange={addTextFieldToArray}
            maxlength="2"
            />
            </td><td>&nbsp;

            <input 
            className={props.textBoxClass} 
            type="text"
            name="Year" 
            placeholder="Year" 
            disabled={dateArray.using}
            onChange={addTextFieldToArray}
            maxlength="4"
            />
            </td></tr>


            </table>
            </form>



            );

        }else{
            return(
                <form>
                <input 
                className={props.textBoxClass} 
                type={props.inputType} 
                name={props.blockName} 
                placeholder="Enter Requested Information" 
                disabled={infoArray.using}
                onChange={addTextFieldToArray}
                />
                </form>
                );
            }
        }

        function headingTitleChange(){
            if(props.changeTitleOption === "yes"){
                return(
                <th className="infoTableText">Change Title?</th>);
            }

        }    

        function checkboxTitleChange(event){
            let checkBoxChecked = false;
            let checkBoxName = props.blockName + "CheckBox";
            if(props.blockName === "dateOfBirth" || props.blockName === "dateOfDeath"){
                checkBoxChecked = dateArray.changeTitle;
            }else{
                checkBoxChecked = infoArray.changeTitle;
            }
            if(props.changeTitleOption === "yes"){
                return(<td><center>
                <input 
                name={checkBoxName}
                className="largeCheckBox"
                type="checkbox"
                onChange={()=>{
                    if(checkBoxChecked === true){
                        props.dataArray.title = defaultTitle;
                        if(props.blockName === "dateOfBirth" || props.blockName === "dateOfDeath"){
                            addToDateArray(prevValue=>{
                                return {info: prevValue.info,
                                    changeTitle: false,
                                    title: defaultTitle,
                                    using: prevValue.using
                                }});
                                dateArray.changeTitle = false;

                            }else{
                                addToArray(prevValue=>{
                                    return {info: prevValue.info,
                                        changeTitle: false,
                                        title: defaultTitle,
                                        using: prevValue.using
                                    }});
                                    infoArray.changeTitle = false;
                                }

                            }else{
                                if(props.blockName === "dateOfBirth" || props.blockName === "dateOfDeath"){
                                    addToDateArray(prevValue=>{
                                        return {info: prevValue.info,
                                            changeTitle: true,
                                            title: defaultTitle,
                                            using: prevValue.using
                                        }});
                                        dateArray.changeTitle = true;

                                    }else{
                                        addToArray(prevValue=>{
                                            return {info: prevValue.info,
                                                changeTitle: true,
                                                title: defaultTitle,
                                                using: prevValue.using
                                            }});
                                            infoArray.changeTitle = true;
                                        }

                                    }
                                }}
                                />
                                </center>
                                </td>);
                            }else{
                                props.dataArray.title = props.title;
                            }
                        }

                        function addTitle(event){
                            var newTitleValue = event.target.value;
                            if(props.blockName === "dateOfBirth" || props.blockName === "dateOfDeath"){
                                addToDateArray(prevValue=>{
                                    props.dataArray.using = prevValue.using;
                                    props.dataArray.changeTitle = prevValue.changeTitle;
                                    props.dataArray.info = prevValue.info;
                                    if(dateArray.changeTitle === true){
                                        props.dataArray.title = newTitleValue;
                                    }else{
                                        props.dataArray.title = props.title;
                                    }

                                    return({using: prevValue.using,
                                        changeTitle: prevValue.changeTitle,
                                        title: newTitleValue,
                                        info: prevValue.info
                                    });
                                });

                            }else{
                                addToArray(prevValue=>{
                                    props.dataArray.using = prevValue.using;
                                    props.dataArray.changeTitle = prevValue.changeTitle;
                                    props.dataArray.info = prevValue.info;
                                    if(titleCheckBox === true){
                                        props.dataArray.title = newTitleValue;
                                    }else{
                                        props.dataArray.title = props.title;
                                    }

                                    return({using: prevValue.using,
                                        changeTitle: prevValue.changeTitle,
                                        title: newTitleValue,
                                        info: prevValue.info
                                    });
                                });
                            }
                        }

                        function changeTitleChecked(){
                            if(props.blockName === "dateOfBirth" || props.blockName === "dateOfDeath"){
                                if(dateArray.changeTitle === true){
                                    //props.dataArray.changeTitle = true;
                                    let newTitle = (props.blockName+"NewTitle");
                                    return(<div className="newTitleTextArea">
                                        New Title <input 
                                        className="newTitleTextBox"
                                        type="text"
                                        name={newTitle}
                                        placeholder="Enter New Title"
                                        onChange={addTitle}
                                        />
                                        </div>
                                        );
                                    }
                                }else{
                                    if(infoArray.changeTitle === true){
                                        //props.dataArray.changeTitle = true;
                                        let newTitle = (props.blockName+"NewTitle");
                                        return(<div className="newTitleTextArea">
                                            New Title <input 
                                            className="newTitleTextBox"
                                            type="text"
                                            name={newTitle}
                                            placeholder="Enter New Title"
                                            onChange={addTitle}
                                            />
                                            </div>
                                            );
                                        }

                                    }
                                }


                                return(
                                <center>
                                <table>
                                <tr>
                                <th className="infoTableText">Use This Info?</th>
                                <th className="infoTableText">{props.title}
                                {changeTitleChecked()}
                                </th>
                                {headingTitleChange()}
                                </tr>
                                <tr>
                                <td><center><Switch className="switchAlign" toggleDisabled={toggleDisabled} name={props.blockName}/></center></td>
                                <td width="70%"><center>{getTextField()}</center></td>
                                {checkboxTitleChange()}
                                </tr>


                                </table>
                                </center>
                                );
                            }

                            export default InfoBlocks;