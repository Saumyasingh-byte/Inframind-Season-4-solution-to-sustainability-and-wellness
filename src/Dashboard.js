import React,{useState} from "react";
import "./Dashboard.css";
import Header from "./Header";
import Diabetes from "./Diabetes";
import Bronchiectasis from "./Bronchiectasis";
import CHD from "./CHD";
import Hypoxemia from "./Hypoxemia";
import Asthma from "./Asthma";
import All from "./All";
import Chatbot from "./Chatbot";
import {Link,Route} from "react-router-dom";
import firebase from "./firebase";
import Detail from "./Detail";
import emailjs from "emailjs-com";

  

function Dashboard(){
  


  // Automated email function 


   function sendEmail(e){
     e.preventDefault();
    emailjs.sendForm('service_j28k6ed', 'template_87t1zml', e.target, 'user_Nj60fJUAWKPD97UODZV6e')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   }





 // Firebase references


  const ref=firebase.firestore().collection("users");
  const refer=firebase.firestore().collection("users").doc("user-1").collection("Data");
  const refer2=firebase.firestore().collection("users").doc("user-2").collection("Data");
  const refer3=firebase.firestore().collection("users").doc("user-3").collection("Data");
  const refer4=firebase.firestore().collection("users").doc("user-4").collection("Data");
  const refer5=firebase.firestore().collection("users").doc("user-5").collection("Data");
  const refer6=firebase.firestore().collection("users").doc("user-6").collection("Data");
  const refer7=firebase.firestore().collection("users").doc("user-7").collection("Data");

  





//UseState Hooks  

const [formValue,setformValue]=React.useState("none");
const [profile,setprofile]=React.useState([]);
const [countAll,setcountAll]=React.useState(0);
const [countDia,setcountDia]=React.useState(0);
const [countBron,setcountBron]=React.useState(0);
const [countCh,setcountCh]=React.useState(0);
const [countHy,setcountHy]=React.useState(0);
const [countAs,setcountAs]=React.useState(0);







// React UseEffect Hook to count total number of employees with respective dieases  


  React.useEffect(()=>{
    ref.onSnapshot((querySnapshot)=>{
        const items=[];
        var countA=0;
        var countD=0;
        var countB=0;
        var countC=0;
        var countH=0;
        var countAs=0;
        

        querySnapshot.forEach((doc)=>{
         
            items.push(doc.data()); 
            countA=countA+1;
        
          if (doc.data().risk==="Diabetes"){
            countD=countD+1;
          }
          if (doc.data().risk==="Bronchiectasis"){
            countB=countB+1;
          }
          if (doc.data().risk==="CHD"){
            countC=countC+1;
          }
          if (doc.data().risk==="Hypoxemia"){
            countH=countH+1;
          }
          if (doc.data().risk==="Asthma"){
            countAs=countAs+1;
          }
        });
        setprofile(items);
        setcountDia(countD);
        setcountAll(countA);
        setcountBron(countB);
        setcountCh(countC);
        setcountHy(countH);
        setcountAs(countAs);
    });
   
},[]);







// React UseEffect to set Random values to various health parameters

React.useEffect(()=>{
 
  var count=0;
  const interval=setInterval(()=>{
    count=count+1;
    var document=count.toString();
    refer.doc(document)
    .set({
      bloodSugar:((Math.random()*10)+5) ,
      respiratoryRate:((Math.random()*20)+20),
      cholesterol:((Math.random()*190)+1),
      Bp:((Math.random()*140)+90),
      heartRate:((Math.random()*30)+60),
      oxygenSaturation:((Math.random()*6)+92),
      bodyTemp:((Math.random()*3)+36),
      time:(new Date().getHours()),
      id:document
    })
    .catch((err)=>{
      console.log(err)
    });
    refer2.doc(document)
    .set({
      bloodSugar:((Math.random()*10)+5) ,
      respiratoryRate:((Math.random()*20)+20),
      cholesterol:((Math.random()*190)+1),
      Bp:((Math.random()*140)+90),
      heartRate:((Math.random()*30)+60),
      oxygenSaturation:((Math.random()*6)+92),
      bodyTemp:((Math.random()*3)+36),
      time:(new Date().getHours()),
      id:document
    })
    .catch((err)=>{
      console.log(err)
    });
    refer3.doc(document)
    .set({
      bloodSugar:((Math.random()*10)+5) ,
      respiratoryRate:((Math.random()*20)+20),
      cholesterol:((Math.random()*190)+1),
      Bp:((Math.random()*140)+90),
      heartRate:((Math.random()*30)+60),
      oxygenSaturation:((Math.random()*6)+92),
      bodyTemp:((Math.random()*3)+36),
      time:(new Date().getHours()),
      id:document
    })
    .catch((err)=>{
      console.log(err)
    });
    refer4.doc(document)
    .set({
      bloodSugar:((Math.random()*10)+5) ,
      respiratoryRate:((Math.random()*20)+20),
      cholesterol:((Math.random()*190)+1),
      Bp:((Math.random()*140)+90),
      heartRate:((Math.random()*30)+60),
      oxygenSaturation:((Math.random()*6)+92),
      bodyTemp:((Math.random()*3)+36),
      time:(new Date().getHours()),
      id:document
    })
    .catch((err)=>{
      console.log(err)
    });
    refer5.doc(document)
    .set({
      bloodSugar:((Math.random()*10)+5) ,
      respiratoryRate:((Math.random()*20)+20),
      cholesterol:((Math.random()*190)+1),
      Bp:((Math.random()*140)+90),
      heartRate:((Math.random()*30)+60),
      oxygenSaturation:((Math.random()*6)+92),
      bodyTemp:((Math.random()*3)+36),
      time:(new Date().getHours()),
      id:document
    })
    .catch((err)=>{
      console.log(err)
    });
    refer6.doc(document)
    .set({
      bloodSugar:((Math.random()*10)+5) ,
      respiratoryRate:((Math.random()*20)+20),
      cholesterol:((Math.random()*190)+1),
      Bp:((Math.random()*140)+90),
      heartRate:((Math.random()*30)+60),
      oxygenSaturation:((Math.random()*6)+92),
      bodyTemp:((Math.random()*3)+36),
      time:(new Date().getHours()),
      id:document
    })
    .catch((err)=>{
      console.log(err)
    });
    refer7.doc(document)
    .set({
      bloodSugar:((Math.random()*10)+5) ,
      respiratoryRate:((Math.random()*20)+20),
      cholesterol:((Math.random()*190)+1),
      Bp:((Math.random()*140)+90),
      heartRate:((Math.random()*30)+60),
      oxygenSaturation:((Math.random()*6)+92),
      bodyTemp:((Math.random()*3)+36),
      time:(new Date().getHours()),
      id:document
    })
    .catch((err)=>{
      console.log(err)
    });
  },900000);
  return()=> clearInterval(interval);

},[]);




// Firebase reference to put the new updates health parameters and store in a document called "Data"


const refer8=firebase.firestore().collection("users").doc("user-1").collection("Data")
.orderBy("id", "desc")
const refer9=firebase.firestore().collection("users").doc("user-2").collection("Data")
.orderBy("id", "desc");
const refer10=firebase.firestore().collection("users").doc("user-3").collection("Data")
.orderBy("id", "desc");
const refer11=firebase.firestore().collection("users").doc("user-4").collection("Data")
.orderBy("id", "desc");
const refer12=firebase.firestore().collection("users").doc("user-5").collection("Data")
.orderBy("id", "desc");
const refer13=firebase.firestore().collection("users").doc("user-6").collection("Data")
.orderBy("id", "desc");
const refer14=firebase.firestore().collection("users").doc("user-7").collection("Data")
.orderBy("id", "desc");








// Firebase reference to put the latest Updated health parameters  in a document called "LatestRisk"


const refe=firebase.firestore().collection("users").doc("user-1").collection("LatestRisk");
const refe2=firebase.firestore().collection("users").doc("user-2").collection("LatestRisk");
const refe3=firebase.firestore().collection("users").doc("user-3").collection("LatestRisk");
const refe4=firebase.firestore().collection("users").doc("user-4").collection("LatestRisk");
const refe5=firebase.firestore().collection("users").doc("user-5").collection("LatestRisk");
const refe6=firebase.firestore().collection("users").doc("user-6").collection("LatestRisk");
const refe7=firebase.firestore().collection("users").doc("user-7").collection("LatestRisk");
const [user1,setuser1]=React.useState({});
const [user2,setuser2]=React.useState({});
const [user3,setuser3]=React.useState({});
const [user4,setuser4]=React.useState({});
const [user5,setuser5]=React.useState({});
const [user6,setuser6]=React.useState({});
const [user7,setuser7]=React.useState({});






// React useEffect to update every users document information

React.useEffect(()=>{
  ref.onSnapshot((querySnapshot)=>{
      const items=[];
      querySnapshot.forEach((doc1)=>{
       if (doc1.data().id==="user-1"){
         refer8.onSnapshot((querySnapshot1)=>{
           const itemsA=[];
           querySnapshot1.forEach((doc)=>{
           
            itemsA.push(doc.data()); 
          
        });
        console.log(itemsA[0]);
        if (itemsA[0].bloodSugar < 7.8 && itemsA[0].Bp < 130 && itemsA[0].cholesterol < 130 && itemsA[0].respiratoryRate > 30 && itemsA[0].oxygenSaturation > 96 && itemsA[0].heartRate>125){
          return[
            setuser1({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:doc1.data().risk,
            note:doc1.data().note
          }),
          refe.doc("1")
          .set({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
           risk:"NoRisk",
          note:"EveryThing Fine"
          })
          .catch((err)=>{
            console.log(err)
          }) ,
          ref.doc("user-1")
          .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
           risk:"NoRisk",
          note:"EveryThing Fine"
          }).catch((err)=>{
            console.log(err)
          })
          ]
        }
        if (itemsA[0].bloodSugar > 7.8 && itemsA[0].bloodSugar<=11.0){
          return[
          setuser1({
            age:doc1.data().age,
            Id:itemsA[0].id,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            note:"Prone to pre-diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }),
          refe.doc("1")
          .set({
            age:doc1.data().age,
            Id:itemsA[0].id,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            note:"Prone to pre-diabetes",
            bloodSugar:itemsA[0].bloodSugar
          })
          .catch((err)=>{
            console.log(err)
          }),
          ref.doc("user-1")
          .update({
            age:doc1.data().age,
            Id:itemsA[0].id,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            note:"Prone to pre-diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
            console.log(err)
          }),
         setformValue("You have a high level of sugar , Kindly take Care of your Sugar Intake"),
         document.getElementById('sendEmail').click(),

        ]
        }
        if (itemsA[0].respiratoryRate <15){
          return[
          setuser1({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Bronchiectasis",
            note:"risk to bronchiectasis",
            bloodSugar:itemsA[0].bloodSugar
          }),
          refe.doc("1")
          .set({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Bronchiectasis",
            note:"risk to bronchiectasis",
            bloodSugar:itemsA[0].bloodSugar
          })
          .catch((err)=>{
            console.log(err)
          }),
          ref.doc("user-1")
          .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Bronchiectasis",
            note:"risk to bronchiectasis",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
            console.log(err)
          }),
          setformValue("Your Respiratory rate is low , you have a risk to Bronchiectasis"),
          document.getElementById('sendEmail').click(),
 
        ]
        }
        if (itemsA[0].bloodSugar > 11.0){
          return[
          setuser1({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            Id:itemsA[0].id,
            note:"High risk to diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }),
          refe.doc("1")
          .set({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            Id:itemsA[0].id,
            note:"High risk to diabetes",
            bloodSugar:itemsA[0].bloodSugar
          })
          .catch((err)=>{
            console.log(err)
          }),
          ref.doc("user-1")
          .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            Id:itemsA[0].id,
            note:"High risk to diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
            console.log(err)
          }),
          setformValue("You have a very high level of sugar , Kindly take Care of your Sugar Intake You have risk to diabetes"),
          document.getElementById('sendEmail').click(),
        ]
        }
        if (itemsA[0].oxygenSaturation < 96){
          return[
          setuser1({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Hypoxemia",
            note:"Risk to Hypoxemia",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation
          }),
          refe.doc("1")
          .set({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Hypoxemia",
            note:"Risk to Hypoxemia",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation
          })
          .catch((err)=>{
            console.log(err)
          }),
          ref.doc("user-1")
          .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Hypoxemia",
            note:"Risk to Hypoxemia",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation
          }).catch((err)=>{
            console.log(err)
          }),
          setformValue("You have risk to Hypoxemia"),
          document.getElementById('sendEmail').click(),
 
        ]
        }
        if (itemsA[0].oxygenSaturation > 92 && itemsA[0].oxygenSaturation < 95 &&  itemsA[0].heartRate>100 && itemsA[0].heartRate<125 && itemsA[0].respiratoryRate>20 && itemsA[0].respiratoryRate<30){
          return[
          setuser1({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Asthma",
            note:" High Risk to Asthma",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate
          }),
          refe.doc("1")
          .set({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Asthma",
            note:" High Risk to Asthma",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate
          })
          .catch((err)=>{
            console.log(err)
          }),
          ref.doc("user-1")
          .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Asthma",
            note:" High Risk to Asthma",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate
          }).catch((err)=>{
            console.log(err)
          })
        ]
        }
        if (itemsA[0].cholesterol > 130 && itemsA[0].Bp > 130 &&  itemsA[0].heartRate > 84){
          return[
          setuser1({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"CHD",
            note:"Risk to CHD",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate,
            bp:itemsA[0].Bp,
            cholesterol:itemsA[0].cholesterol,
          }),
          refe.doc("1")
          .set({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"CHD",
            note:"Risk to CHD",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate,
            bp:itemsA[0].Bp,
            cholesterol:itemsA[0].cholesterol,
          })
          .catch((err)=>{
            console.log(err)
          }),
          ref.doc("user-1")
          .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"CHD",
            note:"Risk to CHD",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate,
            bp:itemsA[0].Bp,
            cholesterol:itemsA[0].cholesterol,
          }).catch((err)=>{
            console.log(err)
          })
        ]
        }
      });
        }
        if (doc1.data().id==="user-2"){
          refer9.onSnapshot((querySnapshot1)=>{
            const itemsA=[];
            querySnapshot1.forEach((doc)=>{
            
             itemsA.push(doc.data()); 
           
         });
         console.log(itemsA[0]);
         if (itemsA[0].bloodSugar < 7.8 && itemsA[0].Bp < 130 && itemsA[0].cholesterol < 130 && itemsA[0].respiratoryRate > 30 && itemsA[0].oxygenSaturation > 96 && itemsA[0].heartRate>125){
           return[
           setuser2({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           }),
           refe2.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           })
           .catch((err)=>{
             console.log(err)
           }),
          ref.doc("user-2")
          .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:doc1.data().risk,
            note:doc1.data().note
          }).catch((err)=>{
            console.log(err)
          })
          ]
         }
         if (itemsA[0].bloodSugar > 7.8 && itemsA[0].bloodSugar<=11.0){
           return[
           setuser2({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe2.doc("1")
           .set({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
          ref.doc("user-2")
          .update({
            age:doc1.data().age,
            Id:itemsA[0].id,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            note:"Prone to pre-diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
            console.log(err)
          })
          ] 
         }
         if (itemsA[0].respiratoryRate <15){
           return[
           setuser2({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe2.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-2")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Bronchiectasis",
            note:"risk to bronchiectasis",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].bloodSugar > 11.0){
           return[
           setuser2({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe2.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-2")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            Id:itemsA[0].id,
            note:"High risk to diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].oxygenSaturation < 96){
           return[
           setuser2({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           }),
           refe2.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-2")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Hypoxemia",
            note:"Risk to Hypoxemia",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].oxygenSaturation > 92 && itemsA[0].oxygenSaturation < 95 &&  itemsA[0].heartRate>100 && itemsA[0].heartRate<125 && itemsA[0].respiratoryRate>20 && itemsA[0].respiratoryRate<30){
          return[ 
          setuser2({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           }),
           refe2.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-2")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Asthma",
            note:" High Risk to Asthma",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].cholesterol > 130 && itemsA[0].Bp > 130 &&  itemsA[0].heartRate > 84){
           return[
           setuser2({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           }),
           refe2.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-2")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"CHD",
            note:"Risk to CHD",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate,
            bp:itemsA[0].Bp,
            cholesterol:itemsA[0].cholesterol,
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         
       });
         }
         if (doc1.data().id==="user-3"){
          refer10.onSnapshot((querySnapshot1)=>{
            const itemsA=[];
            querySnapshot1.forEach((doc)=>{
            
             itemsA.push(doc.data()); 
           
         });
         console.log(itemsA[0]);
         if (itemsA[0].bloodSugar < 7.8 && itemsA[0].Bp < 130 && itemsA[0].cholesterol < 130 && itemsA[0].respiratoryRate > 30 && itemsA[0].oxygenSaturation > 96 && itemsA[0].heartRate>125){
           return[
           setuser3({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           }),
           refe3.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-3")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:doc1.data().risk,
            note:doc1.data().note
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].bloodSugar > 7.8 && itemsA[0].bloodSugar<=11.0){
           return[
           setuser3({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe3.doc("1")
           .set({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-3")
           .update({
            age:doc1.data().age,
            Id:itemsA[0].id,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            note:"Prone to pre-diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })

          ]
         }
         if (itemsA[0].respiratoryRate <15){
           return[
           setuser3({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe3.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-3")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Bronchiectasis",
            note:"risk to bronchiectasis",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].bloodSugar > 11.0){
           return[
           setuser3({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe3.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-3")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            Id:itemsA[0].id,
            note:"High risk to diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].oxygenSaturation < 96){
           return[
           setuser3({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           }),
           refe3.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-3")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Hypoxemia",
            note:"Risk to Hypoxemia",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].oxygenSaturation > 92 && itemsA[0].oxygenSaturation < 95 &&  itemsA[0].heartRate>100 && itemsA[0].heartRate<125 && itemsA[0].respiratoryRate>20 && itemsA[0].respiratoryRate<30){
          return[ 
          setuser3({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           }),
           refe3.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-3")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Asthma",
            note:" High Risk to Asthma",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].cholesterol > 130 && itemsA[0].Bp > 130 &&  itemsA[0].heartRate > 84){
           return[
           setuser3({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           }),
           refe3.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-3")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"CHD",
            note:"Risk to CHD",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate,
            bp:itemsA[0].Bp,
            cholesterol:itemsA[0].cholesterol,
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         
       });
         }
         if (doc1.data().id==="user-4"){
          refer11.onSnapshot((querySnapshot1)=>{
            const itemsA=[];
            querySnapshot1.forEach((doc)=>{
            
             itemsA.push(doc.data()); 
           
         });
         console.log(itemsA[0]);
         if (itemsA[0].bloodSugar < 7.8 && itemsA[0].Bp < 130 && itemsA[0].cholesterol < 130 && itemsA[0].respiratoryRate > 30 && itemsA[0].oxygenSaturation > 96 && itemsA[0].heartRate>125){
           return[
           setuser4({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           }),
           refe4.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-4")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:doc1.data().risk,
            note:doc1.data().note
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].bloodSugar > 7.8 && itemsA[0].bloodSugar<=11.0){
           return[
           setuser4({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe4.doc("1")
           .set({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-4")
           .update({
            age:doc1.data().age,
            Id:itemsA[0].id,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            note:"Prone to pre-diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].respiratoryRate <15){
          return[ 
          setuser4({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe4.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-4")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Bronchiectasis",
            note:"risk to bronchiectasis",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].bloodSugar > 11.0){
          return[ 
          setuser4({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe4.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-4")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            Id:itemsA[0].id,
            note:"High risk to diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].oxygenSaturation < 96){
          return[ 
          setuser4({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           }),
           refe4.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-4")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Hypoxemia",
            note:"Risk to Hypoxemia",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].oxygenSaturation > 92 && itemsA[0].oxygenSaturation < 95 &&  itemsA[0].heartRate>100 && itemsA[0].heartRate<125 && itemsA[0].respiratoryRate>20 && itemsA[0].respiratoryRate<30){
          return[ 
          setuser4({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           }),
           refe4.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-4")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Asthma",
            note:" High Risk to Asthma",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].cholesterol > 130 && itemsA[0].Bp > 130 &&  itemsA[0].heartRate > 84){
          return[ 
          setuser4({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           }),
           refe4.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-4")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"CHD",
            note:"Risk to CHD",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate,
            bp:itemsA[0].Bp,
            cholesterol:itemsA[0].cholesterol,
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         
       });
         }
         if (doc1.data().id==="user-5"){
          refer12.onSnapshot((querySnapshot1)=>{
            const itemsA=[];
            querySnapshot1.forEach((doc)=>{
            
             itemsA.push(doc.data()); 
           
         });
         console.log(itemsA[0]);
         if (itemsA[0].bloodSugar < 7.8 && itemsA[0].Bp < 130 && itemsA[0].cholesterol < 130 && itemsA[0].respiratoryRate > 30 && itemsA[0].oxygenSaturation > 96 && itemsA[0].heartRate>125){
           return[
           setuser5({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           }),
           refe5.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-5")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:doc1.data().risk,
            note:doc1.data().note
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].bloodSugar > 7.8 && itemsA[0].bloodSugar<=11.0){
          return[ 
          setuser5({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe5.doc("1")
           .set({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-5")
           .update({
            age:doc1.data().age,
            Id:itemsA[0].id,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            note:"Prone to pre-diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].respiratoryRate <15){
          return[ 
          setuser5({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe5.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-5")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Bronchiectasis",
            note:"risk to bronchiectasis",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].bloodSugar > 11.0){
           return[
             setuser5({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe5.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-5")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            Id:itemsA[0].id,
            note:"High risk to diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].oxygenSaturation < 96){
           return[
             setuser5({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           }),
           refe5.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-5")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Hypoxemia",
            note:"Risk to Hypoxemia",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].oxygenSaturation > 92 && itemsA[0].oxygenSaturation < 95 &&  itemsA[0].heartRate>100 && itemsA[0].heartRate<125 && itemsA[0].respiratoryRate>20 && itemsA[0].respiratoryRate<30){
           return[
             setuser5({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           }),
           refe5.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-5")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Asthma",
            note:" High Risk to Asthma",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].cholesterol > 130 && itemsA[0].Bp > 130 &&  itemsA[0].heartRate > 84){
           return[
             setuser5({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           }),
           refe5.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-5")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"CHD",
            note:"Risk to CHD",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate,
            bp:itemsA[0].Bp,
            cholesterol:itemsA[0].cholesterol,
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         
       });
         }
         if (doc1.data().id==="user-6"){
          refer13.onSnapshot((querySnapshot1)=>{
            const itemsA=[];
            querySnapshot1.forEach((doc)=>{
            
             itemsA.push(doc.data()); 
           
         });
         console.log(itemsA[0]);
         if (itemsA[0].bloodSugar < 7.8 && itemsA[0].Bp < 130 && itemsA[0].cholesterol < 130 && itemsA[0].respiratoryRate > 30 && itemsA[0].oxygenSaturation > 96 && itemsA[0].heartRate>125){
           return[
           setuser6({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           }),
           refe6.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-6")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:doc1.data().risk,
            note:doc1.data().note
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].bloodSugar > 7.8 && itemsA[0].bloodSugar<=11.0){
           return[
             setuser6({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe6.doc("1")
           .set({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-6")
           .update({
            age:doc1.data().age,
            Id:itemsA[0].id,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            note:"Prone to pre-diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].respiratoryRate <15){
           return[
             setuser6({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe6.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-6")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Bronchiectasis",
            note:"risk to bronchiectasis",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].bloodSugar > 11.0){
           return[
             setuser6({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe6.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-6")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            Id:itemsA[0].id,
            note:"High risk to diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].oxygenSaturation < 96){
           return[
             setuser6({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           }),
           refe6.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-6")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Hypoxemia",
            note:"Risk to Hypoxemia",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].oxygenSaturation > 92 && itemsA[0].oxygenSaturation < 95 &&  itemsA[0].heartRate>100 && itemsA[0].heartRate<125 && itemsA[0].respiratoryRate>20 && itemsA[0].respiratoryRate<30){
           return[
             setuser6({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           }),
           refe6.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-6")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Asthma",
            note:" High Risk to Asthma",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].cholesterol > 130 && itemsA[0].Bp > 130 &&  itemsA[0].heartRate > 84){
           return[
             setuser6({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           }),
           refe6.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-6")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"CHD",
            note:"Risk to CHD",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate,
            bp:itemsA[0].Bp,
            cholesterol:itemsA[0].cholesterol,
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         
       });
         }
         if (doc1.data().id==="user-7"){
          refer14.onSnapshot((querySnapshot1)=>{
            const itemsA=[];
            querySnapshot1.forEach((doc)=>{
            
              itemsA.push(doc.data()); 
           
         });
         console.log(itemsA[0]);
         if (itemsA[0].bloodSugar < 7.8 && itemsA[0].Bp < 130 && itemsA[0].cholesterol < 130 && itemsA[0].respiratoryRate > 30 && itemsA[0].oxygenSaturation > 96 && itemsA[0].heartRate>125){
           return[
             setuser7({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           }),
           refe7.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:doc1.data().risk,
             note:doc1.data().note
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-7")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:doc1.data().risk,
            note:doc1.data().note
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].bloodSugar > 7.8 && itemsA[0].bloodSugar<=11.0){
           return[
             setuser7({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe7.doc("1")
           .set({
             age:doc1.data().age,
             Id:itemsA[0].id,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             note:"Prone to pre-diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-7")
           .update({
            age:doc1.data().age,
            Id:itemsA[0].id,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            note:"Prone to pre-diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].respiratoryRate <15){
           return[
             setuser7({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe7.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Bronchiectasis",
             note:"risk to bronchiectasis",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-7")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Bronchiectasis",
            note:"risk to bronchiectasis",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].bloodSugar > 11.0){
           return[
             setuser7({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           }),
           refe7.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             department:doc1.data().department,
             risk:"Diabetes",
             Id:itemsA[0].id,
             note:"High risk to diabetes",
             bloodSugar:itemsA[0].bloodSugar
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-7")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            department:doc1.data().department,
            risk:"Diabetes",
            Id:itemsA[0].id,
            note:"High risk to diabetes",
            bloodSugar:itemsA[0].bloodSugar
          }).catch((err)=>{
             console.log(err)
           })
          ] 
         }
         if (itemsA[0].oxygenSaturation < 96){
           return[
             setuser7({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           }),
           refe7.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Hypoxemia",
             note:"Risk to Hypoxemia",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-7")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Hypoxemia",
            note:"Risk to Hypoxemia",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].oxygenSaturation > 92 && itemsA[0].oxygenSaturation < 95 &&  itemsA[0].heartRate>100 && itemsA[0].heartRate<125 && itemsA[0].respiratoryRate>20 && itemsA[0].respiratoryRate<30){
           return[
             setuser7({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           }),
           refe7.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"Asthma",
             note:" High Risk to Asthma",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-7")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"Asthma",
            note:" High Risk to Asthma",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         if (itemsA[0].cholesterol > 130 && itemsA[0].Bp > 130 &&  itemsA[0].heartRate > 84){
           return[
             setuser7({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           }),
           refe7.doc("1")
           .set({
             age:doc1.data().age,
             name:doc1.data().name,
             id:doc1.data().id,
             Id:itemsA[0].id,
             department:doc1.data().department,
             risk:"CHD",
             note:"Risk to CHD",
             bloodSugar:itemsA[0].bloodSugar,
             oxygenSaturation:itemsA[0].oxygenSaturation,
             heartRate:itemsA[0].heartRate,
             respiratoryRate:itemsA[0].respiratoryRate,
             bp:itemsA[0].Bp,
             cholesterol:itemsA[0].cholesterol,
           })
           .catch((err)=>{
             console.log(err)
           }),
           ref.doc("user-7")
           .update({
            age:doc1.data().age,
            name:doc1.data().name,
            id:doc1.data().id,
            Id:itemsA[0].id,
            department:doc1.data().department,
            risk:"CHD",
            note:"Risk to CHD",
            bloodSugar:itemsA[0].bloodSugar,
            oxygenSaturation:itemsA[0].oxygenSaturation,
            heartRate:itemsA[0].heartRate,
            respiratoryRate:itemsA[0].respiratoryRate,
            bp:itemsA[0].Bp,
            cholesterol:itemsA[0].cholesterol,
          }).catch((err)=>{
             console.log(err)
           })
          ]
         }
         
       });
         }
      });
  });

 
},[]);






// Functions to change the Selected Featues (Dashboard , Chatbot , All employees, diabetic employee etcr ) colour on selection
 

  const [classes,setClasses]=useState(["AllDS"]);
  const [col,setcol]=useState(['DbS']);
  const [colp,setcolp]=useState(['Db1S']);
   function ClassChanger(){
     return (
        setClasses(
          ['AllDS']
        ),
        setClasses1(
          ['InuseD']
        ),
        setClasses2(
          ['RTFD']
        ),
        setClasses3(
          ['FailedD']
        ),
        setClasses4(
          ['RentedD']
        ),
        setcol(['DbS']),
        setcol1(['Db']),
        setcol2(['Db']),
        setcol3(['Db']),
        setcol4(['Db']),
        setcolp(['Db1S']),
        setcolp1(['Db1']),
        setcolp2(['Db1']),
        setcolp3(['Db1']),
        setcolp4(['Db1']),
        setClasses5(["asthma"]),
        setcol5(["Db"]),
        setcolp5(["Db1"])
     );
   }
   const [classes1,setClasses1]=useState(["InuseD"]);
   const [col1,setcol1]=useState(['Db']);
   const [colp1,setcolp1]=useState(['Db1']);
   function ClassChanger1(){
     return [
        setClasses1(
          ['InuseDS']
        ),
        setClasses(
          ['AllD']
        ),
        setClasses2(
          ['RTFD']
        ),
        setClasses3(
          ['FailedD']
        ),
        setClasses4(
          ['RentedD']
        ),setcol1(['DbS']),
        setcol(['Db']),
        setcol2(['Db']),
        setcol3(['Db']),
        setcol4(['Db']),
        setcolp1(['Db1S']),
        setcolp(['Db1']),
        setcolp2(['Db1']),
        setcolp3(['Db1']),
        setcolp4(['Db1']),
        setClasses5(["asthma"]),
        setcol5(["Db"]),
        setcolp5(["Db1"])
        ];
   }
   const [classes2,setClasses2]=useState(["RTFD"]);
   const [col2,setcol2]=useState(['Db']);
   const [colp2,setcolp2]=useState(['Db1']);
   function ClassChanger2(){
     return [
        setClasses2(
          ['RTFDS']
        ),
        setClasses(
          ['AllD']
        ),
        setClasses1(
          ['InuseD']
        ),
        setClasses3(
          ['FailedD']
        ),
        setClasses4(
          ['RentedD']
        ),
        setcol2(['DbS']),
        setcol(['Db']),
        setcol1(['Db']),
        setcol3(['Db']),
        setcol4(['Db']),
        setcolp(['Db1']),
        setcolp1(['Db1']),
        setcolp2(['Db1S']),
        setcolp3(['Db1']),
        setcolp4(['Db1']),
        setClasses5(["asthma"]),
        setcol5(["Db"]),
        setcolp5(["Db1"])
        ];
   }
   
   const [classes3,setClasses3]=useState(["FailedD"]);
   const [col3,setcol3]=useState(['Db']);
   const [colp3,setcolp3]=useState(['Db1']);
   function ClassChanger3(){
     return [
        setClasses3(
          ['FailedDS']
        ),
        setClasses(
          ['AllD']
        ),
        setClasses1(
          ['InuseD']
        ),
        setClasses2(
          ['RTFD']
        ),
         setClasses4(
           ['RentedD']
         ),
         setcol2(['Db']),
         setcol(['Db']),
         setcol1(['Db']),
         setcol3(['DbS']),
         setcol4(['Db']),
         setcolp(['Db1']),
         setcolp1(['Db1']),
         setcolp2(['Db1']),
         setcolp3(['Db1S']),
         setcolp4(['Db1']),
         setClasses5(["asthma"]),
         setcol5(["Db"]),
         setcolp5(["Db1"])
        ];
   }
   const [classes4,setClasses4]=useState(["RentedD"]);
   const [col4,setcol4]=useState(['Db']);
   const [colp4,setcolp4]=useState(['Db1']);
   function ClassChanger4(){
     return [
        setClasses3(
          ['FailedD']
        ),
        setClasses(
          ['AllD']
        ),
        setClasses1(
          ['InuseD']
        ),
        setClasses2(
          ['RTFD']
        ),
        setClasses4(
          ['RentedDS']
        ),
        setcol2(['Db']),
        setcol(['Db']),
        setcol1(['Db']),
        setcol3(['Db']),
        setcol4(['DbS']),
        setcolp(['Db1']),
        setcolp1(['Db1']),
        setcolp2(['Db1']),
        setcolp3(['Db1']),
        setcolp4(['Db1S']),
        setClasses5(["asthma"]),
        setcol5(["Db"]),
        setcolp5(["Db1"])
        ];
   }
   const [classes5,setClasses5]=useState(["asthma"]);
   const [col5,setcol5]=useState(['Db']);
   const [colp5,setcolp5]=useState(['Db1']);
   function ClassChanger5(){
     return [
        setClasses3(
          ['FailedD']
        ),
        setClasses(
          ['AllD']
        ),
        setClasses1(
          ['InuseD']
        ),
        setClasses2(
          ['RTFD']
        ),
        setClasses4(
          ['RentedD']
        ),
        setClasses5(["asthmaS"]),
        setcol2(['Db']),
        setcol(['Db']),
        setcol1(['Db']),
        setcol3(['Db']),
        setcol4(['Db']),
        setcolp(['Db1']),
        setcolp1(['Db1']),
        setcolp2(['Db1']),
        setcolp3(['Db1']),
        setcolp4(['Db1']),
        setcol5(["DbS"]),
        setcolp5(["Db1S"]),
       
        ];
   }
 





 


    return(
        <div>
            <div>
            <Header Name="Dashboard"/>
            </div>
            <div className="search">
            <input  className="Rectangle158" type="text" placeholder="  Type Something"></input><svg className="svg31" style={{height:"20px",width:"20px"}} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.61655 10.8928C7.73051 11.5035 6.65652 11.8611 5.49902 11.8611C2.46146 11.8611 -0.000976562 9.39865 -0.000976562 6.36108C-0.000976562 3.32352 2.46146 0.861084 5.49902 0.861084C8.53659 0.861084 10.999 3.32352 10.999 6.36108C10.999 7.51858 10.6415 8.59257 10.0308 9.47861L13.7061 13.154L12.2919 14.5682L8.61655 10.8928ZM5.49902 9.86108C7.43202 9.86108 8.99902 8.29408 8.99902 6.36108C8.99902 4.42809 7.43202 2.86108 5.49902 2.86108C3.56603 2.86108 1.99902 4.42809 1.99902 6.36108C1.99902 8.29408 3.56603 9.86108 5.49902 9.86108Z" fill="black"/>
            </svg>
            <form onSubmit={sendEmail} style={{width:"0px",height:"0px"}}>
              <input value={formValue} name="name" type="text" style={{width:"0px",height:"0px"}}/>
            <button className="btn164 btn " type="submit"id="sendEmail"> <span className="btntxt">Search</span></button>
            </form>
            </div>
            <div className="Descr">
            <Link to="/">
          <div className={classes} onClick={ClassChanger}>
        <p className={col}>All Employees</p>
      <p className={colp}>{countAll}</p>
        </div>
        <div className="AllDb"></div>
        </Link>
        <Link to="/Diabetes">
       <div className={classes1} onClick={ClassChanger1}>
        <p className={col1}> Diabetes </p>
        <p className={colp1}>{countDia}</p>
        </div>
        <div className="InuseDb"></div>
        </Link>
        <Link to="/Bronchiectasis">
      <div className={classes2} onClick={ClassChanger2}>
        <p className={col2}>Bronchiectasis </p>
      <p className={colp2}>{countBron}</p>
        </div>
        <div className="RTFDb"></div>
        </Link>
        <Link to="/CHD">
      <div className={classes3} onClick={ClassChanger3}>
        <p className={col3}> CHD </p>
        <p className={colp3}>{countCh}</p>
        </div>
        <div className="FailedDb"></div>
        </Link>
        <Link to="/Hypoxemia">
      <div className={classes4} onClick={ClassChanger4}>
        <p className={col4}>Hypoxemia</p>
      <p className={colp4}>{countHy}</p>
        </div>
        <div className="RentedDb"></div>
        </Link>
        <Link to="/Asthma">
        <div className={classes5} onClick={ClassChanger5}>
        <p className={col5}>Asthma</p>
      <p className={colp5}>{countAs}</p>
        </div>
        <div className="AsthmaDb"></div>
        </Link>
        
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
          <div className="row"  onClick={()=>localStorage.setItem('id',users.id)}>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6" >
              <p className="dataE">{users.department}</p>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
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
        
         <div  className="chatbot" id="Chatbot">
           <Chatbot/>
         </div>
           
            <Route path="/Detail"  component={()=><Detail/>}/>
            <Route path="/Diabetes"  component={()=><Diabetes/>}/>
            <Route path="/Bronchiectasis"  component={()=><Bronchiectasis/>}/>
            <Route path="/CHD"  component={()=><CHD/>}/>
            <Route path="/Hypoxemia"  component={()=><Hypoxemia/>}/>
            <Route path="/Asthma"  component={()=><Asthma/>}/>
            <Route path="/"  component={()=><All />}/>
           
        </div>

    )
}

export default Dashboard;