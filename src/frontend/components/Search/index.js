import React from "react";
import axios from "axios";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";

let data;

export default function Search() {

  function handleChange(e){
    axios.get("http://localhost:8000/")
            .then((res) => {
                data = res.data;
                console.log({data});
                this.setState({
                    details: data,
                });
            })
            .catch((err) => {console.log("err")});

  }

  return (
    <div className="search-bar">
      <div className="col-lg-12 text-center mt-5"></div>
      <form action="/Searchpage">
        <div className="col-md-4 offset-md-4 mt-5 pt-3">
          <div className="input-group mb-3">
            <input
              type="text"
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
