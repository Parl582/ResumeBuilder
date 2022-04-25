import React from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router'
import { addContact } from '../../Redux/ContactSlice'

const Inputfield = () => {

    const [name, setName] = React.useState('')
    const [contact, setcontact] = React.useState('')
    const [phone, setphone] = React.useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (e) => {

        // console.log(`add ${name} ${contact} ${phone}`)
        // dispatch(addContact({ 
        //      name ,
        //      contact : phone
        //  }))
        //  navigate('/second')

        localStorage.setItem('name', name)
         navigate('/second')

    }

  return (
    <>
        <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='dev' />
        <input type="text" placeholder='phone'value={contact} onChange={(e)=>setcontact(e.target.value)} />
        <input type="text" placeholder='address' value={phone} onChange={(e)=>setphone(e.target.value)} />

        <button onClick={handleClick}>Submit</button>

    </>
  )
}

export default Inputfield