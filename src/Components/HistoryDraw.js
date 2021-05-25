import React, { useState,useEffect} from "react";
import axios from 'axios';
import { connect } from "react-redux";
import {getDraw} from "../redux/action"
const HistoryDraw = (props) => {
  useEffect(()=>{
    props.getDraw()
  },[])
const {drawHistory, setDrawHistory, getFieldFromHistory,getDrawFromServer} = props;
const [historyInp, setHistoryInp] = useState("");


const addToDrawHistory = () => {
  if (historyInp.trim() !== "") {
    setDrawHistory(historyInp)
    setHistoryInp("");
  }
};



  return <div className="drawHistory mg-10">

<input
    value={historyInp}
    maxlength="15"
    size="17"
    onChange={(e) => setHistoryInp(e.target.value)}
  />
  <button onClick={addToDrawHistory}>Save</button>
  <button onClick={getDraw}>GET draw</button>
 

        <ul className="list-ul">
    {drawHistory.map((item,i)=> 
    
    <li className="list-li">
      <div className= "item_wrap"> 
      <div className="child-grow" onClick={() => getFieldFromHistory(i)}>{item.name}</div> 
      
      <div><button className="btn">X</button></div>
      
      </div>
      
      </li>)}
    </ul>
    
</div>
  
}

const mapStateToProps = (state) => ({
  drawHistory: state.drawHistory
});

const mapDispatchToProps = (dispatch) => ({
  
  setDrawHistory: (historyTitle) =>
    dispatch({
      type: "SAVE_HISTORY_TITLE",
      payload: {historyTitle},

    }),
    getFieldFromHistory: (index) =>
    dispatch({
      type: "GET_FIELD_FROM_HISTORY",
      payload: {index},

    }),
  getDraw:()=>dispatch(getDraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDraw);
