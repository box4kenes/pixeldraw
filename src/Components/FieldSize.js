
import { connect } from "react-redux";

const FieldSize = (props) => {
const { fieldSize,changeFieldSize}=props
  return  <>
<div className="field-Size mg-10">
<div>
  <input
    type="radio"
    onChange={() => changeFieldSize(100)}
    name="px"
    value="huey"
    checked={fieldSize === 100}
  />
  <label for="huey">100px</label>
</div>

<div>
  <input
    type="radio"
    onChange={() => changeFieldSize(400)}
    name="px"
    value="dewey"
    checked={fieldSize === 400}
  />
  <label for="dewey">400px</label>
</div>

<div>
  <input
    type="radio"
    onChange={() => changeFieldSize(1600)}
    name="px"
    value="louie"
    checked={fieldSize === 1600}
  />
  <label for="louie">1600px</label>
</div>
</div>

</>
  
}

const mapStateToProps = (state) => ({
  fieldSize: state.fieldSize
});

const mapDispatchToProps = (dispatch) => ({
 changeFieldSize: (size) =>
    dispatch({
      type: "CHANGE_FIELD_SIZE",
      payload: {size},

    }),

});

export default connect(mapStateToProps, mapDispatchToProps)(FieldSize);

