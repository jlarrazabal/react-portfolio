import React, {useState} from "react";
import validator from "validator";

function ContactMe(props) {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [messageText, setMessageText] = useState("");
const [fullNameError, setFullNameError] = useState(true);
const [emailError, setEmailError] = useState(true);
const [messageTextError, setMessageTextError] = useState(true);
const [fullNameErrorMsg, setFullNameErrorMsg] = useState("");
const [emailErrorMsg, setEmailErrorMsg] = useState("");
const [messageTextErrorMsg, setMessageTextErrorMsg] = useState("");

const validateEmail = (value) => {
  return validator.isEmail(value)? false : true;
}

const validateFullName = (value) => {
  return value.length <= 5? true: false;
}

const validateMessageText = (value) => {
  return value.length <= 10? true: false;
}

const handleInputChange = (event) => {
  const {name, value} = event.target;

  switch(name) {
    case "fullName":
      setFullName(value);
      setFullNameError(validateFullName(value));
      handleFullNameError();
      break;
    case "email":
      setEmail(value);
      setEmailError(validateEmail(value));
      handleEmailError();
      break;
    default:
      setMessageText(value);
      setMessageTextError(validateMessageText(value));
      handleMessageTextError();
  }
};

const handleFullNameError = () => {
  if(fullNameError) {
    return setFullNameErrorMsg("Error: Name cannot be less than 5 characters.")
  } else {
    return setFullNameErrorMsg("");
  }
}

const handleEmailError = () => {
  if(emailError) {
    return setEmailErrorMsg("Error: Email format is not correct.");
  } else {
    return setEmailErrorMsg("");
  }
}

const handleMessageTextError = () => {
  if(messageTextError) {
    return setMessageTextErrorMsg("Error: Name cannot be less than 10 characters.");
  } else {
    return setMessageTextErrorMsg("");
  }
}

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // Alert the user their first and last name, clear the inputs
    alert(`Hello, ${fullName} your message [${messageText}] has been submitted successfully. You will receive answer as soon as possible on ${email}.`);
    setEmail("");
    setEmailError(true);
    setFullName("");
    setFullNameError(true);
    setMessageText("");
    setMessageTextError(true);
  }
  return (
    <section className="width-85" style={{marginLeft: "auto", marginRight: "auto", marginTop: "1rem"}}>
      <form>
      <div className="mb-3">
        <label for="fullName" className="form-label">Name:</label>
        <input type="email" className="form-control" id="fullName" name="fullName" placeholder="Name" onChange={handleInputChange} value={fullName}></input>
        <p>{fullNameErrorMsg}</p>
      </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={handleInputChange} value={email}></input>
          <p>{emailErrorMsg}</p>
        </div>
        <div className="mb-3">
          <label for="messageText" className="form-label">Message</label>
          <textarea className="form-control" id="messageText" name="messageText" rows="3" onChange={handleInputChange} value={messageText}></textarea>
          <p>{messageTextErrorMsg}</p>
        </div>
        <div className="mb-3">
          <button disabled={fullNameError || emailError || messageTextError} className="btn btn-lg btn-primary" type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
