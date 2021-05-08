import axios from "axios";

const initialState = {
  field: new Array(100).fill({ color: "#ffffff" }),
fieldSize:100,
  pixelSize:10,
  currentColor:"#000000",
 gridMap: true,
colorHistory:["#ffffff","#000000"],
drawHistory:[]
}

const fieldDraw = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PIXEL_COLOR":
        let copyColorHistory = state.colorHistory
      const copyField = [...state.field]
      .map((el,i)=>i===action.payload.index ?  {...el, color: state.currentColor}: el)

      if(!state.colorHistory.includes(state.currentColor)){
        copyColorHistory = [...state.colorHistory,state.currentColor]
      }
      return { ...state, field: copyField, colorHistory: copyColorHistory};

    case "SHOW_GRID":
      
      return { ...state, gridMap: action.payload.showGrid};
      
      case  "CHANGE_FIELD_SIZE":
        let fsize = 100;
        let pxsize = 10;
              if(action.payload.size === 400){
        fsize=400;
        pxsize=5;
              }else if(action.payload.size === 1600){
        fsize=1600;
        pxsize=2.5;
              }
                return { ...state, fieldSize: fsize, pixelSize: pxsize, field: new Array(fsize).fill({ color: "#ffffff" })};
                
    case "CHANGE_COLOR":
      return { ...state, currentColor: action.payload.color};
    case "SAVE_HISTORY_TITLE":

    let newDraw =  {name:action.payload.historyTitle, 
      field: state.field, 
      pixelSize: state.pixelSize,
      fieldSize: state.fieldSize,
      username:"Roman"
    }
    axios.post('http://localhost:5000/draw', newDraw)
    .then(function (res) {
      console.log(res);
    })
      return { ...state, drawHistory:[...state.drawHistory, newDraw
       ]};
      
    case "GET_FIELD_FROM_HISTORY":
      return { ...state,...state.drawHistory[action.payload.index]}

      case "GET_DRAW_FROM_SERVER":
let hisoryArr = []
        axios.get('http://localhost:5000/draw')
        .then(function (res) {
          console.log(res.data)
hisoryArr = res.data
          return { ...state, drawHistory: res.data }
        })
        return { ...state , drawHistory: hisoryArr }
          

    
        
      
    default:
      return state;
  }
};

export default fieldDraw;
