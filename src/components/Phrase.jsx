import React, { useState } from 'react'
import db from '../db/db.json'
import { BiRefresh } from 'react-icons/bi'

import Speech from './Speech'

export default function Phrase() {
  const [ phrase, setPhrase ] = useState(db[Math.floor(Math.random() * db.length)])
  return (
    <div>
      <p className="Phrase-text">{phrase.phrase}</p>

      <div className="Phrase-icons">
        <Speech text={phrase.phrase} />
        <BiRefresh onClick={() => setPhrase(db[Math.floor(Math.random() * db.length)])} />
      </div>
    </div>
  )
}
