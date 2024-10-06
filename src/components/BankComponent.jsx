import React, { useState } from 'react'
import { deposit } from '../redux/bankSlice'
import { useDispatch } from 'react-redux'

export const BankComponent = () => {
  const [depositAmount, setdeposit] = useState(0)
  const dispatch = useDispatch()
  const depositHandler = () => {
    dispatch(deposit(parseInt(depositAmount)))
  }
  return (
    <div>
      <h1>Bank</h1>

      <div>
        <label>DEPOSIT</label>
        <input type='number'  onChange={(event)=>{setdeposit(event.target.value)}}/>
      </div>
      <div>
        <button onClick={()=>{depositHandler()}}>DEPOSIT</button>
      </div>
    </div>
  )
}
