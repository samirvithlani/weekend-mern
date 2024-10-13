import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchEmployeeData } from '../redux/employeeDataSlice'

export const EmployeeHome = () => {
    const dispatch = useDispatch()

    const loadEmployees = ()=>{

        dispatch(fetchEmployeeData())
    }
    useEffect(()=>{
        loadEmployees()
    })
  return (
    <div>
        <h1>EMPLOYEE HOME</h1>
    </div>
  )
}
