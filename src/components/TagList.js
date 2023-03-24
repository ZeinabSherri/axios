import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TagList() {
  const [Tags, setTags] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:5001/api/Tags")
      .then(res => {
        const Tags = res.data;
        setTags(Tags);
      })
  }, []);

  return (
    <ul>
      {
        Tags
          .map(Tags =>
            <li key={Tags.id}>{Tags.name}</li>
          )
      }
    </ul>
  )
}

