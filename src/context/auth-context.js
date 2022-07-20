import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as sessions from "./sessions-services"
import * as PropertySessions from "./properties-services"

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [user, setUser] = React.useState(null);
  const [profileType, setProfileType] = React.useState({});
  const [properties, setProperties] = React.useState([])
  const navigate = useNavigate()

  React.useEffect(() => {
    PropertySessions.getProperties()
      .then(data => {
        setProperties(data)
      })
      .catch(console.log)
  },[])

  function login(credentials){
    return sessions.login(credentials).then( user => {
      setUser(user)
      navigate('/')
    })
  }

  function logout(){
    return sessions.logout().then(() => {
      setUser(null)
      setProfileType({})
      navigate('/')
    })
  }

  function signup(credentials){
    const newUser = {...credentials, ...profileType}
    return sessions.signup(newUser).then(user =>{
      setUser(user)
      setProfileType({})
      navigate('/')
    })
  }

  const value = { 
    user, 
    login,
    logout,
    setProfileType,
    properties,
    signup,
  }

  return <AuthContext.Provider value={value} {...props} />
}

function useAuth(){
  return React.useContext(AuthContext)
}

export {AuthProvider, useAuth}