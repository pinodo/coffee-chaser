import React, { useState } from 'react'
import "./MoodSelectionForm.css"

function MoodSelectionForm(props) {
  const submitHandler = (e) => {
    e.preventDefault()

    const moodData = []
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="title title-center">
        <div className="main-title">It&apos;s today!</div>
        <div className="sub-title">Select your mood then we&apos;ll suggest the best coffee menu for you :)</div>
        <div className="sub-title2">Select all that apply!</div>
      </div>
      <div className="new-mood-container">
        <div className="new-mood">Hurt</div>
        <div className="new-mood">Confused</div>
        <div className="new-mood">Hateful</div>
        <div className="new-mood">Disappointed</div>
        <div className="new-mood">Exhausted</div>
        <div className="new-mood">Anxious</div>
        <div className="new-mood">Proud</div>
        <div className="new-mood">Peaceful</div>
        <div className="new-mood">Lonely</div>
        <div className="new-mood">Joyful</div>
        <div className="new-mood">Grateful</div>
        <div className="new-mood">Guilty</div>
        <div className="new-mood">Excited</div>
        <div className="new-mood">Special</div>
      </div>
      <div className="btn-container btn-center">
        <button type="submit">SEE THE RESULT</button>
      </div>
    </form>
  )
}

export default MoodSelectionForm
