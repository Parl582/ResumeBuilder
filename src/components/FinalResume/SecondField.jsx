import React from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router'
import { addContact } from '../../Redux/ContactSlice'

const SeconsField = () => {

    const [name, setName] = React.useState('')
    const [contact, setcontact] = React.useState('')
    const [address, setaddress] = React.useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (e) => {

        // console.log(`add ${name} ${contact} ${phone}`)
        // dispatch(addContact({ 
        //      address : address
        //  }))
        localStorage.setItem('address', address)
         navigate('/home')

    }

  return (
    <>
       
        <input type="text" placeholder='address' value={address} onChange={(e)=>setaddress(e.target.value)} />

        <button onClick={handleClick}>Submit</button>

    </>
  )
}

export default SeconsField