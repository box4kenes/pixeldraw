import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {useState} from "react"
const Field = (props) => {
const {field, pixelSize,changePixelColor, gridMap}=props
const [continueToDraw, setContinueToDraw] = useState(false);
const onKeyPressed = (e) => {
  if (e.code === "Space" || e.type === "mousedown") {
    setContinueToDraw(true);
  }
};
const onKeyUp = (e) => {
  if (e.code === "Space" || e.type === "mouseup") {
    setContinueToDraw(false);
  }}
  return <div
    className="grid"
    onMouseDown={onKeyPressed}
    onMouseUp={onKeyUp}
    tabIndex="0"
  >
    {field.map((el, i) => (
      <div
        className="pixel"
        style={{
          background: el.color,
          width: pixelSize + "%",
          height: pixelSize + "%",
          border: gridMap ? "1px solid lightgrey" : ""

        }}
        // {continueToDraw ? `onMouseOver={() => changePixelColor(${i})}` : `onClick={() => changePixelColor(${i})}`}
        onClick={() => changePixelColor(i)}
        onMouseOver={() => changePixelColor(continueToDraw ? i : undefined)}
      >
        {" "}
        
      </div>
    ))}
  </div>

}

const mapStateToProps = (state) => ({
  field: state.field,
 pixelSize: state.pixelSize,
gridMap: state.gridMap
});

const mapDispatchToProps = (dispatch) => ({
  changePixelColor: (index) =>
    dispatch({
      type: "CHANGE_PIXEL_COLOR",
      payload: {index},

    }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
