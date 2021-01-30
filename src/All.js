import React from "react";
import {Link,Route} from "react-router-dom";
import firebase from "./firebase";
import Deatil from "./Detail";
import Detail from "./Detail";


function All(){




    const ref=firebase.firestore().collection("users");
    const [profile,setprofile]=React.useState([])

    React.useEffect(()=>{
        ref.onSnapshot((querySnapshot)=>{
            const items=[];
           
            querySnapshot.forEach((doc)=>{
             {
                items.push(doc.data()); 
              }
            
            });
            setprofile(items);
        });
       
    },[]);


  function inputResult(){
    let filter=document.getElementById('userInput').value.toUpperCase();
    var tableEntry=document.getElementsByClassName("TableEntry");

    for (var i=0;i<tableEntry.length;i++){
      let div=tableEntry[i].getElementsByTagName("div")[2];
      let name=div.innerText;

      if(name.toUpperCase().indexOf(filter)>-1){
        tableEntry[i].style.display="";
      }else{
        tableEntry[i].style.display="none";
      }
    }
    
  }



    
    return(
        <div>
           <div className="search">
            <input  className="Rectangle158" type="text" placeholder="  Type Something" id="userInput" onKeyUp={inputResult}></input><svg className="svg31" style={{height:"20px",width:"20px"}} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.61655 10.8928C7.73051 11.5035 6.65652 11.8611 5.49902 11.8611C2.46146 11.8611 -0.000976562 9.39865 -0.000976562 6.36108C-0.000976562 3.32352 2.46146 0.861084 5.49902 0.861084C8.53659 0.861084 10.999 3.32352 10.999 6.36108C10.999 7.51858 10.6415 8.59257 10.0308 9.47861L13.7061 13.154L12.2919 14.5682L8.61655 10.8928ZM5.49902 9.86108C7.43202 9.86108 8.99902 8.29408 8.99902 6.36108C8.99902 4.42809 7.43202 2.86108 5.49902 2.86108C3.56603 2.86108 1.99902 4.42809 1.99902 6.36108C1.99902 8.29408 3.56603 9.86108 5.49902 9.86108Z" fill="black"/>
            </svg>
            <button className="btn164 btn "> <span className="btntxt">Search</span></button>
            </div>
            <div className="Table">
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
              <div className="col-lg-2 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="data">Risk</p>
              </div>
              <div className="col-lg-4 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="data">Note</p>
              </div>
              </div>
          </div>
          <div className="EntryTable">
          {profile.map((users)=>(
            <Link to="/Detail" style={{textDecoration:"none"}}>
          <div className="TableEntry">
          <div className="row" onClick={()=>localStorage.setItem('id',users.id)}>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6" >
              <p className="dataE">{users.department}</p>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 uuser">
              <p className="dataE">{users.name}</p>  
              </div>
              <div className="col-lg-2 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="dataE">{users.age}</p>  
              </div>
              <div className="col-lg-2 col-md-0 hid col-sm-0 col-0 hidden">
              <p className="dataE"><p className={users.risk}>{users.risk}</p></p>
              </div>
              <div className="col-lg-4 col-md-0 hid col-sm-0 col-0 hidden">
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

export default All;