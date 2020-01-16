import React, {useState, useContext} from 'react'
import {AuthContext} from './auth'

const FormDisplayName = ({displayName, user}) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName)
  const save = () => {
    if(newDisplayName !== ''){
      user.updateProfile({displayName:newDisplayName})
    }
  }
  return (
    <>
      <input type='text' value={newDisplayName} onChange={evt => setNewDisplayName(evt.target.value)}/>
      <button onClick={save}>Alterar display name</button>
    </>
  )
}

const UserInfo = () => {
  const auth = useContext(AuthContext)
  
  
  if(auth.user === null){
    return null
  }
  const {displayName} = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')
  const dn = displayName || alternativeDisplayName
  return (
    <>
      <p>Olá { displayName || alternativeDisplayName}!</p>
      <FormDisplayName displayName={dn} user={auth.user} />
      <button onClick={auth.signout}>Sair!</button>
    </>
  )
}

export default UserInfo