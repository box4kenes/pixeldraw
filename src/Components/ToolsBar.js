
import React from "react";
import GridMap from "./GridMap";
import FieldSize from "./FieldSize";
import ChangeColor from "./ChangeColor"
import HistoryDraw from "./HistoryDraw"
const ToolsBar = () => {
  return  <div className="tools-Container">
<FieldSize/>
<GridMap/>
<HistoryDraw/>
<ChangeColor/>
</div>
}



export default ToolsBar