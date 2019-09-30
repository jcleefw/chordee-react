import Tag from 'chordsheetjs/lib/chord_sheet/tag.js';
import ChordLyricsPair from 'chordsheetjs/lib/chord_sheet/chord_lyrics_pair.js';
import React from 'react';

class SongFormatter {
  format(song) {
    return song.lines.map(line =>
      <div className="song-row">
        {this.formatLine(line)}
      </div>
    );
  }

  formatLine(line) {
    return line.items.map(item => this.formatItem(item));
  }

  formatItem(item) {
    if (item instanceof Tag) {
      // return this.formatTag(item);
      return 'this is tag'
    } else if (item instanceof ChordLyricsPair) {
      return this.formatChordLyricsPair(item);
    }
    return '';
  }

  // formatTag(tag) {
  //   if (tag.hasValue()) {
  //     return `{${tag.originalName}: ${tag.value}}`;
  //   }

  //   return `{${tag.originalName}}`;
  // }

  formatChordLyricsPair(chordLyricsPair) {
    return <div className="song-column">
      {this.formatChordLyricsPairChords(chordLyricsPair)}
      {this.formatChordLyricsPairLyrics(chordLyricsPair)}
    </div>
  }

  formatChordLyricsPairChords(chordLyricsPair) {
    if (chordLyricsPair.chords) {
      return <div>
        <span className="chord">
          {chordLyricsPair.chords.trim()}
        </span>
      </div>
    }

    return '';
  }

  formatChordLyricsPairLyrics(chordLyricsPair) {
    return <div className="lyrics">
      {chordLyricsPair.lyrics}
    </div> || <div className="lyrics"></div>;
  }
}

export default SongFormatter;