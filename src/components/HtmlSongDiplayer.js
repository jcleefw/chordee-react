import React from 'react';
import SongFormatter from '../formatter/songFormatter';

function formatToHtml(chordSheet) {
  const formatter = new SongFormatter()
  const parsed = formatter.chordSheetParser(chordSheet)
  // console.log(parsed)
  const formatted = formatter.format(parsed)
  debugger
  return formatted
}

const HtmlSongDisplayer = ({ chordSheet }) => {
  return <div>{formatToHtml(chordSheet)}</div>
}

export default HtmlSongDisplayer;
