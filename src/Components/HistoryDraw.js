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

  <select size="5" width="100px" height="100px">
    {drawHistory.map((el, i) => (
      <option 
      onClick={() => getFieldFromHistory(i)}
      >{el.name}</option>
    ))}
  </select>
  <br />
  <input
    value={historyInp}
    maxlength="15"
    size="17"
    onChange={(e) => setHistoryInp(e.target.value)}
  />
  <button onClick={addToDrawHistory}>Save</button>
  <button onClick={getDraw}>GET draw</button>

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
