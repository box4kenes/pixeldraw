import { connect } from "react-redux";



const GridMap = (props) => {

const { gridMap,setGridMap}=props
  return  <div className="grid-Map mg-10">
            <div>
              <input
                type="checkbox"
                value={gridMap}
                checked={gridMap}
                onChange={() => setGridMap(!gridMap)}
              />
              <label for="border">Grid Map</label>
            </div>
          </div>
  
}

const mapStateToProps = (state) => ({
gridMap: state.gridMap
});

const mapDispatchToProps = (dispatch) => ({
  setGridMap: (showGrid) =>
    dispatch({
      type: "SHOW_GRID",
      payload: {showGrid},

    }),

});

export default connect(mapStateToProps, mapDispatchToProps)(GridMap);

