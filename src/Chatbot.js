import React from "react";
import Config from "./chatbot/Config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import Chatbot from "react-chatbot-kit";


function chatbot(){


    return(
        <div>
         
          <div id="Chatbot" >
          <Chatbot
          config={Config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          />
          </div>
        </div>
    )
}

export default chatbot;