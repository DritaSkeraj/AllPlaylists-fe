import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import "../styles/artist.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SideMenu from "../components/sideMenu";
import Player from "../components/player";
import ChartsSong from "../components/chartsSong";
import "../styles/mainContent.css";
import "../styles/artistPage.css";
import { Row, Col } from "react-bootstrap";

const ArtistPage = (props) => {
  const artistId = props.location.pathname.split("/")[2];
  const [artist, setArtist] = useState(null);
  const [top, setTop] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(async () => {
    const result = await axios.get(
      `https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/artist/${artistId}`
    );
    console.log("fetch artist from artist page result: ", result.data);
    setArtist(result.data);
//comment
const name = 'hello'
    const top = await axios.get(
      `https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/artist/${artistId}/top`
    );
    console.log("top from this artist: ", top.data);
    setTop(top.data);

    const playlists = await axios.get(
      `https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/artist/${artistId}/playlists`
    );
    console.log("playlists for this artist: ", playlists.data);
    setPlaylists(playlists.data);

    const albums = await axios.get(
      `https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/artist/${artistId}/albums`
    );
    console.log("albums for this artist: ", albums.data);
    setAlbums(albums.data);
  }, []);

  return (
    <div>
      <SideMenu />
      <div className="main-container" id="artist-pg">
        <Container>
          <Header />
          <Row>
            <div className="artist-info">
              <img src={artist?.picture_big} />
              <h1>{artist?.name}</h1>
            </div>
          </Row>
          <Row className="mt-5">
            <Col md={7}>
              <div className="artist-holder">
                <h3>top tracks</h3>
                {top?.data?.map((res, key) => (
                  <ChartsSong data={res} id={key} img={res?.album?.cover} />
                ))}
              </div>
            </Col>
            <Col md={5}>
              <div className="artist-holder playlist-holder">
                <h3>top playlists</h3>
                {playlists?.data?.slice(0, 6).map((p) => (
                  <div className="playlist-item">
                    <Row>
                    <Col xs={3}>
                      <img src={p?.picture_small} />
                      </Col>
                      <Col xs={8}>
                        <Row>
                      <h6>{p?.title}</h6>
                      </Row>
                      <Row>
                      <p>{p?.user?.name}</p>
                      </Row>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <div className="artist-holder">
            <h3>albums</h3>
            <Row>
            {albums?.data?.slice(0, 6).map((a) => (
              <>
              <Col md={4} className="artist-album">
                <img src={a?.cover} />
                <h6>{a?.title}</h6>
                </Col>
              </>
            ))}
            </Row>
          </div>
        </Container>
      </div>
      <Player />
    </div>
  );
};

export default withRouter(ArtistPage);
