import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export default function CalendlyForm({ ...props }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const attribute = event.target.name;
    const newValue = event.target.value;
    switch (attribute) {
      case "name":
        setName(newValue);
        break;
      case "email":
        setEmail(newValue);
        break;
      case "company":
        setCompany(newValue);
        break;
      case "message":
        setMessage(newValue);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const invalid = name === "" || email === "";
    if (invalid) {
      document.getElementsByClassName("book-my-call")[0].disabled = true;
    } else {
      document.getElementsByClassName("book-my-call")[0].disabled = false;
    }
  }, [name, email]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto">
          <h2>LET’S CONNECT! </h2>
          <div className="form-group row">
            <label className="col-3 col-form-label">YOUR NAME</label>
            <div className="col">
              <input
                type="text"
                name={"name"}
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">COMPANY</label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name={"company"}
                placeholder="www.yourcompany.com"
                value={company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">EMAIL</label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name={"email"}
                placeholder="username@email.com"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">MESSAGE</label>
            <div className="col">
              <textarea
                value={message}
                name={"message"}
                className="form-control"
                rows="6"
                placeholder="Please tell us about your project..."
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3"></label>
            <div className="col">
              <PopupButton
                className="btn button-vds book-my-call"
                url={`https://calendly.com/openingcall/30min`}
                rootElement={document.getElementById("root")}
                text="BOOK MY CALL"
                prefill={{
                  email: email,
                  name: name,
                  customAnswers: {
                    a1: company,
                    a2: message,
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 m-auto hidd-sm">
          <img src="images/book-my-call.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
