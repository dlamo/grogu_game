export default function Cell({idx, state}) {
  const isGroguHere = idx === state.position
  return <div className="cell">
    <img src="/images/grogu.jpg" style={{display: isGroguHere ? 'block' : 'none'}} alt='Grogu' />
  </div>
}