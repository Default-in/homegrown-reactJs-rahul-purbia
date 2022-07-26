import React, { useEffect, useState } from "react";
import "./Form.css";

const isAdult = (date) => {
  const today = new Date();
  const dob = new Date(date);

  const age = (today - dob) / (365 * 24 * 60 * 60 * 1000);

  return age > 18;
};

const Form = () => {
  const [displayedDetails, setDisplayedDetails] = useState({});
  const [userDetails, setUserDetails] = useState({
    name: {
      required: true,
      dirty: false,
      value: "",
      error: "",
      getIssue: (val) =>
        !val.trim()
          ? "name is required"
          : val.trim().length > 78
          ? "length should be less than 78"
          : "",
    },
    dob: {
      required: true,
      dirty: false,
      value: "",
      error: "",
      getIssue: (val) =>
        val.length === 0
          ? "dob is required"
          : !isAdult(val)
          ? "must be an adult"
          : "",
    },
    email: {
      required: true,
      dirty: false,
      value: "",
      error: "",
      getIssue: (val) => (val.trim().length === 0 ? "email is required" : ""),
    },
    gender: {
      required: true,
      dirty: false,
      value: "",
      error: "",
      getIssue: (val) => (val.trim().length === 0 ? "gender is required" : ""),
    },
    number: {
      required: true,
      dirty: false,
      value: "",
      error: "",
      getIssue: (val) => (val.trim().length === 0 ? "number is required" : ""),
    },
    address: {
      required: true,
      dirty: false,
      value: "",
      error: "",
      getIssue: (val) => (val.trim().length === 0 ? "address is required" : ""),
    },
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const updateField = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    console.log(fieldValue.length === 0);

    const errorIfAny = userDetails[fieldName].getIssue
      ? userDetails[fieldName].getIssue(fieldValue)
      : "";

    setUserDetails({
      ...userDetails,
      [fieldName]: {
        ...userDetails[fieldName],
        dirty: true,
        value: fieldValue,
        error: errorIfAny,
      },
    });
  };

  useEffect(() => {
    isSubmitButtonDisabled();
  }, [userDetails]);

  const isSubmitButtonDisabled = () => {
    const buttonDisabled = Object.values(userDetails)
      .map((field) => ({ dirty: field.dirty, error: field.error }))
      .some((data) => !data.dirty || data.error.length > 0);

    setIsDisabled(buttonDisabled);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isDisabled) {
      setDisplayedDetails(userDetails);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="input-wrapper">
            <label htmlFor="name"> Name *</label>
            <input
              required={userDetails.name.required}
              type="text"
              name="name"
              id="name"
              value={userDetails.name.value}
              onChange={updateField}
            />
            {userDetails.name.error && (
              <small className="error-msg">{userDetails.name.error}</small>
            )}
          </div>
          <div className="input-wrapper">
            <label htmlFor="dob"> Date of Birth *</label>
            <input
              required={userDetails.dob.required}
              type="date"
              name="dob"
              id="dob"
              value={userDetails.dob.value}
              onChange={updateField}
            />
            {userDetails.dob.error && (
              <small className="error-msg">{userDetails.dob.error}</small>
            )}
          </div>
          <div className="input-wrapper">
            <label htmlFor="email"> Email *</label>

            <input
              required={userDetails.email.required}
              type="email"
              name="email"
              id="email"
              value={userDetails.email.value}
              onChange={updateField}
            />
            {userDetails.email.error && (
              <small className="error-msg">{userDetails.email.error}</small>
            )}
          </div>
          <div className="gender-input input-wrapper">
            <label htmlFor="gender">Sex *</label>
            <select
              required={userDetails.gender.required}
              name="gender"
              id="gender"
              value={userDetails.gender.value}
              onChange={updateField}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            {userDetails.gender.error && (
              <small className="error-msg">{userDetails.gender.error}</small>
            )}
          </div>
          <div className="input-wrapper">
            <label htmlFor="number">Number *</label>
            <input
              required={userDetails.number.required}
              type="number"
              name="number"
              id="number"
              value={userDetails.number.value}
              onChange={updateField}
            />
            {userDetails.number.error && (
              <small className="error-msg">{userDetails.number.error}</small>
            )}
          </div>
          <div className="input-wrapper">
            <label htmlFor="address">Address *</label>
            <textarea
              required={userDetails.address.required}
              name="address"
              id="address"
              cols="10"
              rows="5"
              value={userDetails.address.value}
              onChange={updateField}
            ></textarea>
            {userDetails.address.error && (
              <small className="error-msg">{userDetails.address.error}</small>
            )}
          </div>
          <div className="submit-btn">
            <button disabled={isDisabled}>Submit</button>
          </div>
        </form>
        <div className="instruction">* means the field is required</div>
      </div>
      <div className="user-info-wrapper">
        <div className="user-info">
          <h3>Your details are....</h3>
          <ul>
            <li>
              Name:
              {displayedDetails.name && displayedDetails.name.value}
            </li>
            <li>
              Date of Birth:
              {displayedDetails.dob && displayedDetails.dob.value}
            </li>
            <li>
              Email:
              {displayedDetails.email && displayedDetails.email.value}
            </li>
            <li>
              Gender:
              {displayedDetails.gender && displayedDetails.gender.value}
            </li>
            <li>
              Number:
              {displayedDetails.number && displayedDetails.number.value}
            </li>
            <li>
              Address:
              {displayedDetails.address && displayedDetails.address.value}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
