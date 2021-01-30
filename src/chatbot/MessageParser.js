class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
      if (lowercase.includes("hello")) {
        this.actionProvider.greet();
      }
      if (lowercase.includes("ideal") && lowercase.includes("body temperature")) {
        this.actionProvider.IdealBodyTemp();
      }
      if (lowercase.includes("ideal") && lowercase.includes("heart rate")) {
        this.actionProvider.IdealHeartRate();
      }
      if (lowercase.includes("ideal") && lowercase.includes("blood pressure")) {
        this.actionProvider.IdealBloodPressure();
      }
      if (lowercase.includes("ideal") && lowercase.includes("respiration rate")) {
        this.actionProvider.IdealRespiration();
      }
      if (lowercase.includes("ideal") && lowercase.includes("blood sugar")) {
        this.actionProvider.IdealBloodSugar();
      }
      if (lowercase.includes("ideal") && lowercase.includes("oxygen saturation")) {
        this.actionProvider.IdealOxygenSaturation();
      }
      if (lowercase.includes("ideal") && lowercase.includes("cholestrol")) {
        this.actionProvider.IdealCholestrol();
      }
      if (lowercase.includes("how") && (lowercase.includes("body temperature") || lowercase.includes("fever")) && (lowercase.includes("treat") || lowercase.includes("medicine") || lowercase.includes("cure"))) {
        this.actionProvider.TreatBodyTemp();
      }
      if (lowercase.includes("how") && (lowercase.includes("heart rate") || lowercase.includes("beat") || lowercase.includes("heart")) && (lowercase.includes("treat") || lowercase.includes("medicine") || lowercase.includes("cure"))) {
        this.actionProvider.TreatHeartRate();
      }
      if (lowercase.includes("how") && (lowercase.includes("blood pressure")) && (lowercase.includes("treat") || lowercase.includes("medicine") || lowercase.includes("cure"))) {
        this.actionProvider.TreatBloodPressure();
      }
      if (lowercase.includes("how") && (lowercase.includes("respiration") || lowercase.includes("respiratory rate")) && (lowercase.includes("treat") || lowercase.includes("medicine") || lowercase.includes("cure"))) {
        this.actionProvider.TreatRespiration();
      }
      if (lowercase.includes("how") && (lowercase.includes("blood sugar") || lowercase.includes("diabetes")) && (lowercase.includes("treat") || lowercase.includes("medicine") || lowercase.includes("cure"))) {
        this.actionProvider.TreatDiabetes();
      }
      if (lowercase.includes("how") && (lowercase.includes("cholestrol") || lowercase.includes("fat")) && (lowercase.includes("treat") || lowercase.includes("medicine") || lowercase.includes("cure"))) {
        this.actionProvider.TreatCholestrol();
      }
      if (lowercase.includes("how") && (lowercase.includes("oxygen saturation") || lowercase.includes("oxygen")) && (lowercase.includes("treat") || lowercase.includes("medicine") || lowercase.includes("cure"))) {
        this.actionProvider.TreatOxygen();
      }
    }
  }
  
  export default MessageParser;
  
  