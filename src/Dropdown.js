import React from "react";
import "./Dropdown.css"

function Dropdown(props){
    return(
        <div>
              <div class="dropdown">
              <a class="btn btn-primary custom-btn btn-light btn-sm dropdown-toggle" style={props.style} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {props.Name}
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">{props.first}</a>
              <a class="dropdown-item" href="#">{props.second}</a>
              <a class="dropdown-item" href="#">{props.third}</a>
              </div>
              </div>
        </div>
    )
}

export default Dropdown;