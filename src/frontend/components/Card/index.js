import React from "react";
import "./styles.css";
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom'

export default function Card(props) {

  const history = useHistory();

  function handleclick() {
    var x = props.heading;
    console.log(x)
    x = x.split(/\s/).join('');

    history.push("/Searchpage/" + x)
  }

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.image} alt="Avatar"></img>
        </div>
        <div className="flip-card-back">
          <h1>{props.heading}</h1>
          <div className="w-100 h-100">
            {props.detail}
            {/* <a href={"/Searchpage/" + props.heading}>Search</a> */}
            <Button
              className="m-2"
              variant="contained"
              color="primary"
              endIcon={<SearchIcon />}
              onClick={handleclick}
            >
              Search
      </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
