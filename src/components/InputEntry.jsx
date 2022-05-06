import React from 'react';

export default function InputEntry({ entry, setEntry, submitEntry }) {
  return (
    <div>
      <input
        type="text"
        placeholder="new entry"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button onClick={submitEntry}>Submit</button>
    </div>
  );
}
