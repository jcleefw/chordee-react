import React, { useState, useEffect } from 'react';
import HtmlSongDisplayer from '../components/HtmlSongDiplayer';
import '../styles/_song_display.scss';

function NewSong() {
  const [content, setContent] = useState("");

  function updateContent(event) {
    setContent(event.value)
  };

  return (
    <div>
      <div className="columns">
        <div className="column is-1 is-offset-10">
          <button className="button is-primary is-right">Convert</button>
        </div>
        <div className="column is-2">
          <button className="button is-primary is-right">Add Song</button>
        </div>
      </div>
      <div className="columns">
        <div className="column" id="NewSong_original">
          <textarea onChange={e => updateContent(e.target)} name="song-input" className="textarea song-input" placeholder="Start adding your song here"></textarea>

        </div>
        <div className="column song-column">
          <HtmlSongDisplayer chordSheet={content} />
        </div>
      </div>
    </div >
  )
}

export default NewSong;