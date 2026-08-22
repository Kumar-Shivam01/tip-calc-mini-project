
const Bill = ({bill, setBill}) => {
  return (
    <div style={{display: 'flex'}}>
        <p style={{margin: '10px 10px'}}>How much was the bill?</p>
        <input value={bill} type="number" onChange={(e)=>setBill(e.target.value)}/>
    </div>
  )
}

export default Bill