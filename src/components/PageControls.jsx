export function PageControls({ nextFn, prevFn }) {
  return (
    <div className='Navigation'>
      <button onClick={prevFn} > Previous</button>
      <button onClick={nextFn} > Next</button>
    </div>
  )
}
