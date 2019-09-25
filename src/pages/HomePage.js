import React from 'react';
import Header from '../components/Header';
import ChordSheetJS from 'chordsheetjs';

function viewChords() {
  const chordSheet = `
      Am         C/G        F          C
    Let it be, let it be, let it be, let it be
    C                G              F  C/E Dm C
    Whisper words of wisdom, let it be`.substring(1);

  const parser = new ChordSheetJS.ChordSheetParser();
  const song = parser.parse(chordSheet);
  const formatter = new ChordSheetJS.HtmlTableFormatter();
  console.log(formatter)
  const disp = formatter.format(song);
  return disp
}

const HomePage = () => {
  return <div>
    <Header />
    {viewChords()}
  </div>
}

export default HomePage;
