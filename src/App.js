import React from 'react'
import './App.css'
import Comments from './Comments'
import NewComment from './NewComment'
import {AuthProvider} from './auth'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <SignInUser />
        <UserInfo />
      </div>
    </AuthProvider>
  )
}

export default App;
