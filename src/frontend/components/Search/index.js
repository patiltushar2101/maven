import React from "react";
import Router from 'next/router';
import axios from "axios";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Col } from "react-bootstrap";

let data, x;

export default function Search() {

  var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };

  function onSubmit(e) {

  }

  function handleChange(e) {

    axios.get("http://localhost:8000/searchPageData")
      .then((res) => {
        data = res.data;

        data = stringToHTML(data);

        x = data.querySelector(".active").text;
        console.log(x);

        window.searchName = e.target.value;
        // alert(window.searchName);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  }

  return (
    <div className="search-bar">
      <div className="col-lg-12 text-center mt-5"></div>
      <form action="/Searchpage" onSubmit={onSubmit}>
        <div className="col-md-4 offset-md-4 mt-5 pt-3">
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search ......"
              onChange={handleChange}
            />
            <div className="input-group-append">
              <a href="/Searchpage">
                <button id="search-icon">
                  <AiOutlineSearch />
                </button>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
