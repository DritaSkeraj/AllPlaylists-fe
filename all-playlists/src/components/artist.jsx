import React from 'react';
import "../styles/artist.css";

const Artist = (props) => {
    return (
        <div className="artist-container main-hover">
        {console.log("artist props:::::", props)}
            <img src={props.data.picture} />
            <h6>{props.data.name}</h6>
        </div>
    );
};

export default Artist;