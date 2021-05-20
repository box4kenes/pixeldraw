import axios from "axios";
export function getDraw(){
    return dispatch => {axios.get('https://draw-pixel-server.herokuapp.com/draw')
          .then((res) =>{
            dispatch({
                type:"GET_DRAWS_FROM_SERVER",
                payload:res.data
            })
          
          })
  }}