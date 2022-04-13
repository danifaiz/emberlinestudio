import React, { useEffect, useState } from "react";

export default function SendBook({
  gotYourCopySection,
  btnGreenClass = "",
  ...props
}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {}, []);

  return gotYourCopySection ? (
    <div className="row mt-20">
      <div className="col pr-0">
        <input
          type="email"
          placeholder="Enter your email address"
          formcontrolname="email"
          className="form-control"
        />
      </div>
      <div className="col-auto pl-0">
        <button type="button" className={`button-sub ${btnGreenClass}`}>
          Join
        </button>
      </div>
    </div>
  ) : (
    <div className="eb-form">
      <input
        className="form-control"
        name="name"
        type="text"
        placeholder="Enter your email address"
        value=""
      />
      <button
        type="submit"
        name="submit"
        className={`button-sub ${btnGreenClass}`}
      >
        DOWNLOAD FREE E-BOOK
      </button>
    </div>
  );
}
