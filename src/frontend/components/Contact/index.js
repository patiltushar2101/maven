import React from "react";
import "./styles.css";

export default function Contact() {
  return (
    <div className="conact-form">
      <div className="subpageTitle u-bg10">
        <div className="container">
          <h1 className="text-uppercase">Contact Us</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-sm-8 col-sm-push-4 col-md-7 col-md-push-5 col-lg-8 col-lg-push-4"
            id="mainContent"
          >
            <form
              name="contentForm"
              encType="multipart/form-data"
              method="post"
              action="/contact-us/index.stml"
            >
              <div className="contactForm">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group icon-1">
                      <label className="control-label sr-only" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        id="firstName"
                        className="form-control"
                        placeholder="FIRST NAME"
                        type="text"
                        required
                      />
                    </div>
                    <div className="form-group icon-1">
                      <label className="control-label sr-only" htmlFor="c_lastname">
                        Last Name
                      </label>
                      <input
                        name="lastname"
                        id="c_lastname"
                        className="form-control"
                        placeholder="LAST NAME"
                        type="text"
                      />
                    </div>
                    <div className="form-group icon-2">
                      <label className="control-label sr-only" htmlFor="fromEmail">
                        Email
                      </label>
                      <input
                        name="fromEmail"
                        id="fromEmail"
                        className="form-control"
                        placeholder="EMAIL"
                        type="email"
                        required
                      />
                    </div>
                    <div className="form-group icon-3">
                      <label
                        className="control-label sr-only"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        name="phoneNumber"
                        id="phoneNumber"
                        className="form-control"
                        placeholder="PHONE"
                        type="tel"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label sr-only" htmlFor="comments">
                        Your Message
                      </label>
                      <textarea
                        name="comments"
                        rows="5"
                        id="comments"
                        className="form-control"
                        placeholder="YOUR MESSAGE"
                        cols="10"
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      value="SUBMIT"
                      className="btn btn-primary btn-block"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div
            className="col-sm-4 col-sm-pull-8 col-md-5 col-md-pull-7 col-lg-4 col-lg-pull-8 pageSidebar"
            id="leftSideNav"
          >
            <ul className="sidebar-widget list-group u-paddingTop30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.497563754517!2d72.62677371497078!3d23.188530984869374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1616443820014!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="map"
                className="map"
              ></iframe>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
