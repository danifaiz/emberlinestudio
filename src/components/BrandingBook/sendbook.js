import React, { useEffect, useState } from "react";
import axios from "axios";
import * as PATHS from "../../constants/data_routes";
import Loader from "react-loader-spinner";
export default function SendBook({
  gotYourCopySection,
  btnGreenClass = "",
  ...props
}) {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState({ status: "", message: "" });

  useEffect(() => {}, []);

  const handleChange = (event) => {
    const attribute = event.target.name;
    const newValue = event.target.value;
    switch (attribute) {
      case "email":
        setEmail(newValue);
        break;
      default:
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (email) {
      document.getElementById("sendBookBtn").disabled = true;
      var bodyFormData = new FormData();
      bodyFormData.set("email", email);
      setLoader(true);
      axios({
        method: "post",
        url: `${PATHS.BASE_URL}` + `${PATHS.E_BOOK_URL}`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          console.log(response);
          setLoader(false);
          setResponse(response.data);
          document.getElementById("sendBookBtn").disabled = false;
        })
        .catch((response) => {
          //handle error
          setResponse(response.data);
          setLoader(false);
          console.log(response);
          document.getElementById("sendBookBtn").disabled = false;
        });
    }
  };

  return (
    <>
      {gotYourCopySection ? (
        <form id="sendBookForm" onSubmit={submitHandler}>
          <div className="row mt-20">
            <div className="col pr-0">
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email address"
                formControlName="email"
                className="form-control"
              />
            </div>
            <div className="col-auto pl-0">
              <button
                type="button"
                id="sendBookBtn"
                className={`button-sub ${btnGreenClass}`}
              >
                Join
              </button>
              <div className="center-aligned">
                {response && (
                  <p className="text-success" style={{ fontSize: "15px" }}>
                    <b>{response.message}</b>
                  </p>
                )}
              </div>
              <div className="col-sm-12 text-center">
                {loader ? (
                  <Loader
                    type="Circles"
                    color="#ef373a"
                    height={30}
                    width={30}
                    timeout={3000000} //3 secs
                    visible={true}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </form>
      ) : (
        <form id="sendBookForm" onSubmit={submitHandler}>
          <div className="eb-form">
            <input
              className="form-control"
              name="email"
              value={email}
              required
              onChange={handleChange}
              type="text"
              placeholder="Enter your email address"
            />
            <button
              id="sendBookBtn"
              type="submit"
              name="submit"
              className={`button-sub ${btnGreenClass}`}
            >
              DOWNLOAD FREE E-BOOK
            </button>
            <div className="center-aligned">
              {response && (
                <p className="text-success" style={{ fontSize: "15px" }}>
                  <b>{response.message}</b>
                </p>
              )}
            </div>
            <div className="col-sm-12 text-center">
              {loader ? (
                <Loader
                  type="Circles"
                  color="#ef373a"
                  height={30}
                  width={30}
                  timeout={3000000} //3 secs
                  visible={true}
                />
              ) : null}
            </div>
          </div>
        </form>
      )}
    </>
  );
}
