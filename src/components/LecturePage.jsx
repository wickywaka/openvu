import { useState } from "react"
import { Comments } from "./Comments"
import { PageControls } from "./PageControls"
import { VideoPlayer } from "./VideoPlayer"

export default function LecturePage() {
  const [source, setSource] = useState("https://www.youtube.com/embed/7EmboKQH8lM")

  return (
    <div className="App">
      <VideoPlayer source={source} />
      <PageControls />
      <Comments source={source} />
    </div>
  )
}
