
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }


    greet = () => {
      const message = this.createChatBotMessage("Hello Friend");
      this.addMessageToState(message);
    };
    IdealBodyTemp = () => {
      const message = this.createChatBotMessage("The Ideal Body Temprature range for a normal adult varies from 36.1 to 37.2 degree celcius");
      this.addMessageToState(message);
    };
    IdealHeartRate = () => {
      const message = this.createChatBotMessage("The Ideal Heart Rate range for a normal adult varies from 60 to 100 beats per min");
      this.addMessageToState(message);
    };
    IdealBloodPressure = () => {
      const message = this.createChatBotMessage("The Ideal Blood Pressure range for a normal adult varies from 90/60 mmHg to 120/80 mmHg");
      this.addMessageToState(message);
    };
    IdealRespiration = () => {
      const message = this.createChatBotMessage("The Ideal Respiration Rate range for a normal adult varies from 12 to 25 beats per min");
      this.addMessageToState(message);
    };
    IdealBloodSugar = () => {
      const message = this.createChatBotMessage("The Ideal Sugar range for a normal adult varies from 5 to 7.8 mmol/L");
      this.addMessageToState(message);
    };
    IdealOxygenSaturation = () => {
      const message = this.createChatBotMessage("The Ideal Oxygen Saturation range for a normal adult varies from 75 to 100 mmHg");
      this.addMessageToState(message);
    };
    IdealCholestrol = () => {
      const message = this.createChatBotMessage("The Ideal Cholestrol range for a normal adult varies from 150 to 200 mg/dL");
      this.addMessageToState(message);
    };
    TreatBodyTemp = () => {
      const message = this.createChatBotMessage("In case of a fever you can take Tylenol or ibuprofen as recommended by your doctor");
      this.addMessageToState(message);
    };
    TreatHeartRate = () => {
      const message = this.createChatBotMessage("To decrease your Heart rate close your mouth and nose and raise the pressure in your chest , like you're stifling a sneeze .");
      this.addMessageToState(message);
    };
    TreatBloodPressure = () => {
      const message = this.createChatBotMessage(" To keep your blood pressure low, you need to keep exercising on a regular basis. It takes about one to three months for regular exercise to have an impact on your blood pressure. The benefits last only as long as you continue to exercise.");
      this.addMessageToState(message);
    };
    TreatRespiration = () => {
      const message = this.createChatBotMessage("Consult Your Doctor");
      this.addMessageToState(message);
    };
    TreatDiabetes = () => {
      const message = this.createChatBotMessage("For some people with type 2 diabetes, diet and exercise are enough to keep the disease under control. Other people need medication, which may include insulin and an oral drug. Drugs for type 2 diabetes work in different ways to bring blood sugar levels back to normal.");
      this.addMessageToState(message);
    };
    TreatCholestrol = () => {
      const message = this.createChatBotMessage("Consult Your Doctor");
      this.addMessageToState(message);
    };
    TreatOxygen = () => {
      const message = this.createChatBotMessage("The normal oxygen saturation level is 97–100% (OER #1). Older adults typically have lower oxygen saturation levels than younger adults. For example, someone older than 70 years of age may have an oxygen saturation level of about 95%, which is an acceptable level.");
      this.addMessageToState(message);
    };

    
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message]
      }));
    };
  }
  
  export default ActionProvider;


  