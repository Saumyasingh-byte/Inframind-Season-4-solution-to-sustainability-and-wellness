import React from "react";
import "./Detail.css";
import {Bar} from "react-chartjs-2";

function BodyTemp(props){
    const state2 = {
        labels:props.Time,
        datasets: [
          {
            label: 'Body Temprature',
            backgroundColor: '#8FEF44',  
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
            data:props.Temp
          }
        ]
      }

    return(
        <div>
            <div style={{position:"absolute",height:"2000px",width:"1350px",top:"0px",left:"232px",zIndex:"300",background:"rgba(0,0,0,0.38)"}}></div>
            <div className="diab" style={{zIndex:"333"}}>
               <p className="nameDe" style={{color:"#000000",left:"-90px"}}>Body Temperature</p>
               <div className="DIVV">
                 <div className="GRAPH2">
                 <Bar
              data={state2}
              options={{
              title:{
              display:false,
              text:'Flights',
              fontSize:20
            },
              legend:{
              display:false,
              position:'right'
            }
          }}
        />
                 </div>
               </div>
           </div>
        </div>
    )
}

export default BodyTemp;