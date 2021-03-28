import React from 'react';
import "../styles/artist.css";

const Artist = () => {
    return (
        <div className="artist-container">
            <img src="http://placehold.it/50x50" />
            <h6>Artist Name</h6>
            <p>16M Plays</p>
        </div>
    );
};

export default Artist;