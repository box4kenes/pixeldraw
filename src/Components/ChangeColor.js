import React from "react";
import { connect } from "react-redux";

const ChangeColor = (props) => {
  const {currentColor,colorHistory,changeColor}=props
  return <div> <input
  type="color"
  value={currentColor}
  onChange={(e) => changeColor(e.target.value)}
/>
<div className="colorhistory">
            {colorHistory.map((el, i) => (
              <div
                className="pixelHistory"
                style={{ background: el }}
                onClick={() => changeColor(el)}
              >
                {" "}
              </div>
            ))}
          </div>
          </div>
}


const mapStateToProps = (state) => ({
colorHistory: state.colorHistory,
currentColor:state.currentColor
  });
  
  const mapDispatchToProps = (dispatch) => ({
    changeColor: (color) =>
      dispatch({
        type: "CHANGE_COLOR",
        payload: {color},
  
      }),
  
  });


export default connect(mapStateToProps, mapDispatchToProps)(ChangeColor);