import React from 'react'
import { BiVolumeFull } from 'react-icons/bi'

export default function Speech({ text }) {

  const voices = window.speechSynthesis?.getVoices()
  const language = voices?.find((voice) => /pt-BR/.test(voice.lang))

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance()

    utterance.text = text
    utterance.lang = 'pt-BR'
    utterance.voice = language
    utterance.rate = 1

    window.speechSynthesis.speak(utterance)
  }

  return (
    <BiVolumeFull onClick={() => speak()} />
  )
}
