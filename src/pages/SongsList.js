import React, { useState, useEffect } from 'react';
import ChordeeApi from '../api';

function SongsList() {
  const chordeeApi = new ChordeeApi();
  const [songs, setSongs] = useState([]);

  function fetchSongs() {
    chordeeApi.fetchAllSong().then((data) => {
      setSongs(data.songs);
    });
  }
  useEffect(fetchSongs, []);

  const displaySongs = () => {
    if (songs.length > 0) {
      return songs.map(song => (
        displaySongRow(song)
      ))
    }
  }

  const displaySongRow = (song) => (
    <tr key={song.name}>
      <td>{song.name}</td>
      <td>{song.artist.join()}</td>
      <td>{song.format}</td>
    </tr>
  )


  return <section>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Artist</th>
          <th>Format</th>
        </tr>
      </thead>
      <tbody>
        {displaySongs()}
      </tbody>
    </table>
  </section>
}

export default SongsList;
