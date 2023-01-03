import { Comments } from "./Comments"
import { PageControls } from "./PageControls"
import { VideoPlayer } from "./VideoPlayer"

export default function LecturePage({ source }) {

  return (
    <div className="App">
      <VideoPlayer source={source} />
      <PageControls />
      <Comments source={source} />
    </div>
  )
}


