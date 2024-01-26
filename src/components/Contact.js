import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div>
            <h1>Reach Us through</h1>
        </div>
        <div className="my-4 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control-plaintext"
              id="staticEmail"
              placeholder="Enter your email id"
            />
          </div>
          <label htmlFor="staticPhone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control-plaintext"
              id="staticPhone"
              placeholder='Enter your number'
              />
          </div>
          <div classNameName="mt-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>

    </>
  );
}
