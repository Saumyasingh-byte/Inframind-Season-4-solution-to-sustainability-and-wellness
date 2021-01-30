import React from "react";
import "./Header.css";
import Dropdown from "./Dropdown";
import {Link,Route,Switch} from "react-router-dom";

function Header(props){
    const [acti,setacti]=React.useState(['nav-item active'])
    function clicked(){
      return[
        setacti(['nav-item active']),
        setacti1(['nav-item']),
        setacti2(['nav-item'])
      ]
    }
    const [acti1,setacti1]=React.useState(['nav-item'])
    function clicked1(){
      return[
        setacti(['nav-item']),
        setacti1(['nav-item active']),
        setacti2(['nav-item'])
      ]
    }
    const [acti2,setacti2]=React.useState(['nav-item'])
    function clicked2(){
      return[
        setacti(['nav-item']),
        setacti1(['nav-item']),
        setacti2(['nav-item active'])
      ]
    }

    return (
        <div>
           <div className="Header333">
            <div className="Name333">
             <p>{props.Name}</p>
            </div>
            <div className="Drop333" >
            <Dropdown Name="Michael Jon" first="1" second="2" third="3" style={{background:"#ffffff",border:"none"}}/>
            </div>
            <div className="help333">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000976562 12.313C-0.000976562 18.9404 5.37161 24.313 11.999 24.313C18.6264 24.313 23.999 18.9404 23.999 12.313C23.999 5.68557 18.6264 0.312988 11.999 0.312988C5.37161 0.312988 -0.000976562 5.68557 -0.000976562 12.313ZM21.8173 12.313C21.8173 17.7354 17.4215 22.1312 11.9991 22.1312C6.57666 22.1312 2.18091 17.7354 2.18091 12.313C2.18091 6.89055 6.57666 2.4948 11.9991 2.4948C17.4215 2.4948 21.8173 6.89055 21.8173 12.313ZM11.9995 17.7657C12.6022 17.7657 13.0907 17.2773 13.0907 16.6748C13.0907 16.0723 12.6022 15.5839 11.9995 15.5839C11.3968 15.5839 10.9082 16.0723 10.9082 16.6748C10.9082 17.2773 11.3968 17.7657 11.9995 17.7657ZM10.9081 14.4948H13.0899C13.0899 13.6239 13.2267 13.4642 14.1232 13.016C15.6813 12.237 16.3627 11.442 16.3627 9.5857C16.3627 7.2082 14.491 5.76752 11.999 5.76752C9.58904 5.76752 7.63538 7.72118 7.63538 10.1312H9.81719C9.81719 8.92617 10.794 7.94934 11.999 7.94934C13.3923 7.94934 14.1808 8.55632 14.1808 9.5857C14.1808 10.4566 14.044 10.6163 13.1475 11.0645C11.5895 11.8435 10.9081 12.6384 10.9081 14.4948Z" fill="#A9A9A9"/>
            </svg>
            </div>
            <div className="setting333">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6552 20.387L19.8724 18.1698L19.0915 15.333L19.4317 14.5205L21.999 13.0718V9.93644L19.439 8.48172L19.1045 7.67066L19.8952 4.83234L17.6764 2.61682L14.8393 3.39747L14.0286 3.05757L12.5798 0.48999H9.44446L7.98974 3.05003L7.17887 3.38445L4.341 2.5928L2.12573 4.80808L2.9065 7.64566L2.5666 8.45633L-0.000976562 9.90513V13.0396L2.55676 14.4976L2.89154 15.3093L2.10099 18.1472L4.31711 20.3633L7.1547 19.5825L7.96546 19.9225L9.41429 22.489H12.5489L14.0058 19.9312L14.8173 19.5965L17.6552 20.387ZM17.8517 13.1156L16.9799 15.1977L17.6352 17.5785L17.0668 18.1469L14.6911 17.4851L12.608 18.3442L11.3864 20.489H10.5819L9.37043 18.3428L7.29058 17.4708L4.90849 18.1262L4.34105 17.5588L5.00288 15.183L4.14385 13.1001L1.99903 11.8775V11.073L4.14613 9.86148L5.01822 7.78153L4.36278 5.39945L4.92904 4.83319L7.30479 5.49593L9.38857 4.63653L10.6083 2.48998H11.4119L12.6235 4.63708L14.7034 5.50918L17.086 4.8536L17.6549 5.42164L16.9932 7.79694L17.8525 9.88054L19.999 11.1003V11.9039L17.8517 13.1156ZM10.999 15.49C8.78988 15.49 6.99902 13.6991 6.99902 11.49C6.99902 9.28085 8.78988 7.48999 10.999 7.48999C13.2082 7.48999 14.999 9.28085 14.999 11.49C14.999 13.6991 13.2082 15.49 10.999 15.49ZM12.999 11.49C12.999 12.5946 12.1036 13.49 10.999 13.49C9.89445 13.49 8.99902 12.5946 8.99902 11.49C8.99902 10.3854 9.89445 9.48999 10.999 9.48999C12.1036 9.48999 12.999 10.3854 12.999 11.49Z" fill="#A9A9A9"/>
            </svg>
            </div>
           </div>
           <div className="header01333">
          <div className="hiddiv333"></div>
           <nav class="navbar navbar-expand-lg navbar-light bg-white" style={{paddingLeft:"120px",height:"200px",boxShadow:" 0px 0px 10px 0px rgba(0, 0, 0, 0.05)"}}>
    <a class="navbar-brand " style={{color:"#4460EF",fontSize:"72px",fontWeight:"800",fontFamily:"'Open Sans', sans-serif"}} href="#">{props.Name}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" style={{position:"absolute",height:"100px",width:"100px",left:"1330px",top:"40px"}}></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0" style={{fontSize:"30px",position:"relative",zIndex:"12",background:"#717171",left:"-130px",width:"1550px",fontWeight:"800",fontFamily:"'Open Sans', sans-serif"}}>
      <li class={acti} onClick={clicked}>
        <Link to="/"><a class="nav-link"  style={{height:"150px",fontSize:"52px",paddingTop:"40px"}}>Dashboard<span class="sr-only">(current)</span></a></Link>
      </li>
      <li class={acti1} onClick={clicked1}>
        <Link to="/Upload"><a class="nav-link" style={{height:"150px",fontSize:"52px",paddingTop:"40px"}}>Upload</a></Link>
      </li>
      <li class={acti2} onClick={clicked2}>
       <Link to="/Report"> <a class="nav-link"  style={{height:"150px",fontSize:"52px",paddingTop:"40px"}}>Report</a></Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
        </div>
    )
}

export default Header;