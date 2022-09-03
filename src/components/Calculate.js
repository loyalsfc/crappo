import React from "react"

function Calculate(){
    return(
      <div className='calculate width-100 mb-2'>
        <div className='hash-rate flex-column'>
          <input type="text" className="hash-rate-input width-100" placeholder="Enter your hash rate" />
          <select className="ths width-100">
            <option>TH/s</option>
            <option>TH/m</option>
            <option>TH/h</option>
          </select>
          <button className="button-sm">Calculate</button>
        </div>
        <div className='revenue'>
          <h5 className="revenue-24hour">ESTIMATED 24 HOUR REVENUE</h5>
          <p className="revenue-eth">0.055 130 59 ETH <span>($1275)</span></p>
          <p className="revenue-text">Revenue will change based on mining difficulty and Ethereum price</p>
        </div>
      </div>
    )
}

export default Calculate