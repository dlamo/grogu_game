export default function Cell({idx, state}) {
  const isGroguHere = idx === state.position
  return <div className="cell">
    <p style={{display: isGroguHere ? 'block' : 'none'}}>Grogu</p>
  </div>
}