export default function LecturePage({ source }) {

  return (
    <div className="App">
      <div className="Video">
        <iframe
          width="960"
          height="615"
          src={source}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div className='Navigation'>
        Next, Previous
      </div>
      <div className="Comments">
        <h4>Comments goes here</h4>
        <p>User Name</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, enim nihil eius laudantium amet, et iusto
          natus illo quam ratione magnam dignissimos sequi, temporibus consequatur? At mollitia ducimus aut unde?</p>
      </div>
    </div>
  )
}
