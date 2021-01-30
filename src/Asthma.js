import React from "react";
import {Link} from "react-router-dom";
import firebase from "./firebase";

function Asthma(){

    const ref=firebase.firestore().collection("users");
    const [profile,setprofile]=React.useState([])

    React.useEffect(()=>{
        ref.onSnapshot((querySnapshot)=>{
            const items=[];
           
            querySnapshot.forEach((doc)=>{
            if(doc.data().risk==="Asthma") {
                items.push(doc.data()); 
              }
            
            });
            setprofile(items);
        });
       
    },[]);

    return(
        <div>
            <div className="Table" style={{zIndex:"31"}}>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <p className="data">Department</p>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <p className="data"> Name</p>  
              </div>
              <div className="col-lg-2 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="data">Age</p>  
              </div>
              <div className="col-lg-3 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="data">Respiration rate</p>
              </div>
              <div className="col-lg-3 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="data">Note</p>
              </div>
              </div>
          </div>
          <div style={{position:"absolute",height:"1000px",width:"1200px",top:"530px",left:"300px",background:"#fcfcfc",zIndex:"30"}}></div>
          <div className="EntryTable" style={{zIndex:"32"}}>
          {profile.map((users)=>(
            <Link to="/Detail" style={{textDecoration:"none"}}>
          <div className="TableEntry">
          <div className="row"  onClick={()=>localStorage.setItem('id',users.id)}>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <p className="dataE">{users.department}</p>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
              <p className="dataE">{users.name}</p>  
              </div>
              <div className="col-lg-2 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="dataE">{users.age}</p>  
              </div>
              <div className="col-lg-3 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="dataE">{users.respiratoryRate}</p>
              </div>
              <div className="col-lg-3 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="dataE">{users.note}</p>
              </div>
            </div>
          </div>
          </Link>
          ))}
          </div>
        </div>
    )
}

export default Asthma;