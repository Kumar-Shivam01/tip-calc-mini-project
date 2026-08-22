
const Calculation = ({bill,tip,friendTip,resetAll}) => {
    let totalTip = tip+friendTip
    let calcTip = ((bill*totalTip)/100)/2
    let totalBill = bill + calcTip 
  return (
    <div>
        <p><b>{`You pay $${totalBill} ($${bill} + $${calcTip} tip)`}</b></p>
        <button onClick={resetAll}>RESET</button>
    </div>
  )
}

export default Calculation