import React from "react";
import "./Navbar.css";
import Dashboard from "./Dashboard";
import {Link,Route,Switch} from "react-router-dom";


function Navbar(){
     
    const[Dash,setDash]=React.useState('DashboardS333')
    const[Dashfill,setDashfill]=React.useState('#ffffff')
    const[Uploads,setUploads]=React.useState('Upload333')
    const[Reportfill,setReportfill]=React.useState('#717171')
    function ClickDash(){
        return(
            setDash('DashboardS333'),
            setDashfill('#ffffff'),
            setUploads("Upload333"),
            setReportfill("#717171"),
            localStorage.setItem('first','DashboardS'),
    localStorage.setItem('second','Upload'),
    localStorage.setItem('third','Report')
        )
    }
    function ClickUpload(){
        return(
            setDash('Dashboard333'),
        setDashfill('#717171')
        )
    }

    function chatbot(){
        var x=document.getElementById('Chatbot');
        if (x.style.display==='none'){
          x.style.display="block";
        }else{
          x.style.display='none';
        }
        if (Uploads==="Upload333"){
            setUploads('UploadS333')
        }
        else{
            setUploads('Upload333')
        }
        if(Reportfill==="#717171"){
            setReportfill("#ffffff")
        }else{
            setReportfill("#717171")
        }
      }
  
    localStorage.setItem('first','DashboardS')
    localStorage.setItem('second','Upload')
    localStorage.setItem('third','Report')
    return(
        <div>
            <div className="Navbar333">
                <div className="logo333">
                <p>HAPWE</p>
                </div>
                <Link to="/">
                <div className={Dash} onClick={ClickDash}>
                <div className="DashIcon">
                <svg className="svg3333" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5684 27.9998V29.9998H0.568359V-0.000244141H2.56836V27.9998H32.5684ZM10.5684 25.9998H6.56836V15.9998H10.5684V25.9998ZM18.5684 25.9998H14.5684V5.99976H18.5684V25.9998ZM26.5684 25.9998H22.5684V11.9998H26.5684V25.9998Z" fill={Dashfill}/>
                </svg>
                </div>
                <p className="txt333" >Dashboard</p>
                </div>
                </Link>
                <div onClick={chatbot}>
                <div className={Uploads} onClick={ClickUpload}>
                <div className="UploadIcon">
                <svg className="svg4333"  viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H22V17H14L6 21V17H1V1ZM6 9H7V10H6V9ZM11 9H12V10H11V9ZM16 9H17V10H16V9Z" stroke={Reportfill} stroke-width="2"/>
                </svg>
                </div>
                <p className="txt333">Chatbot</p>
                </div>
                </div>
            </div>
            <Switch>
            <Route path="/"  component={Dashboard}/>
            </Switch>
        </div>
    )
}


export default Navbar;