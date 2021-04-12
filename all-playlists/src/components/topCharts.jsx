import React, {useState, useEffect} from "react";
import "../styles/topCharts.css";
import {Container, Row, Col} from "react-bootstrap";
import ChartsSong from "./chartsSong.jsx";
import axios from "axios";

const TopCharts = () => {

  const [charts, setCharts] = useState({});

  useEffect(async() => {
    const result = await fetchCharts();
    setCharts({"data": result})
  }, [])

  const fetchCharts = async() => {
    return await axios.get(`https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/chart`)
  }
  return (
    <div className="charts-container">
      <div className="first-row">
        <h5>Top Charts</h5>
        <p>See all</p>
      </div>
      <Container>
        <Row>
        {/*console.log("charts.data: ", charts?.data?.data?.tracks)*/}
        {
          charts?.data?.data?.tracks?.data?.slice(0, 5).map((track, key) => 
            <ChartsSong data={track} id={key} item={track}/>
          )
        }
        </Row>
      </Container>
    </div>
  );
};

export default TopCharts;
