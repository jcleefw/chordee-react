import React, { useState, useEffect } from 'react';
import ChordeeApi from '../api';
import Table from 'react-bulma-components/lib/components/table';

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
      <td><a href={`/song/${song._id}`}>View</a></td>
    </tr>
  )

  const displaySongHeader = () => <thead>
    <tr>
      <th>Name</th>
      <th>Artist</th>
      <th>Format</th>
      <th>&nbsp;</th>
    </tr>
  </thead>


  return <section>
    <Table>
      {displaySongHeader()}
      <tbody>
        {displaySongs()}
      </tbody>
    </Table>
  </section>
}

export default SongsList;
