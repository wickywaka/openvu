export function PageControls({ nextFn, onPrevious }) {
  return (
    <div className='Navigation'>
      <button onClick={onNext} > Previous</button>
      <button onClick={onPrevious} > Next</button>
    </div>
  )
}
