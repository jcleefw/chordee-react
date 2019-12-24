import Tag from 'chordsheetjs/lib/chord_sheet/tag.js';
import ChordSheetJS from 'chordsheetjs';
import ChordLyricsPair from 'chordsheetjs/lib/chord_sheet/chord_lyrics_pair.js';
import React from 'react';

class SongFormatter {

  chordSheetParser(chordSheet) {
    const parser = new ChordSheetJS.ChordSheetParser();
    return parser.parse(chordSheet);
  }

  format(song) {
    return song.lines.map((line, index) =>
      <div className="song-row" key={index}>
        {this.formatLine(line)}
      </div>
    );
  }

  formatLine(line) {
    return line.items.map((item, index) => this.formatItem(item, index));
  }

  formatItem(item, index) {
    if (item instanceof Tag) {
      // return this.formatTag(item);
      return 'this is tag'
    } else if (item instanceof ChordLyricsPair) {
      return this.formatChordLyricsPair(item, index);
    }
    return '';
  }

  // formatTag(tag) {
  //   if (tag.hasValue()) {
  //     return `{${tag.originalName}: ${tag.value}}`;
  //   }
  //   return `{${tag.originalName}}`;
  // }

  formatChordLyricsPair(chordLyricsPair, index) {
    return <div className="song-column" key={index}>
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