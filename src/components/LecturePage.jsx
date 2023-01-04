import { useState } from "react"
import { Comments } from "./Comments"
import { PageControls } from "./PageControls"
import { VideoPlayer } from "./VideoPlayer"

export default function LecturePage() {
  const [source, setSource] = useState(0)
  const sources = [
    "https://www.youtube.com/embed/RebA5J-rlwg",
    "https://www.youtube.com/embed/7EmboKQH8lM",
    "https://www.youtube.com/embed/lyNetvEfvT0",
  ]

  const onNext = () => {
    console.log("Next clicked")
    let newSource = source + 1
    if (newSource => sources.length) {
      newSource = 0
    }

    setSource(newSource)
  }

  const onPrevious = () => {
    console.log("Prev clicked")
    let newSource = source - 1
    if (newSource < 0) {
      newSource = sources.length - 1
    }

    setSource(newSource)
  }

  return (
    <div className="App">
      <VideoPlayer source={sources[source]} />
      <PageControls onNext={onNext} onPrevious={onPrevious} />
      <Comments source={sources[source]} />
    </div>
  )
}
