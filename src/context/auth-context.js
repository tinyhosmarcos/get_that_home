import React from 'react'
import * as sessions from "./sessions-services"

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [user, setUser] = React.useState(null);
  // const navigate = useNavigate()

  // React.useEffect(() => {
  //   getUser()
  //     .then(data => {
  //       setLoading(false)
  //       setUser(data)
  //     })
  //     .catch(error => setLoading(false))
  // },[])

  function login(credentials){
    return sessions.login(credentials).then( user => {
      setUser(user)
      // navigate("/categories")
    })
  }

  function logout(){
    return sessions.logout().then(() => {
      setUser(null)
      // navigate("/login")
    })
  }

  // function signup(credentials){
  //   return sessions.signup(credentials).then(user =>{
  //     setUser(user)
  //     navigate('/categories')
  //   })
  // }

  const value = { 
    user, 
    login,
    logout,
  }

  // if(loading) return <p>Loading ...</p>

  return <AuthContext.Provider value={value} {...props} />
}

function useAuth(){
  return React.useContext(AuthContext)
}

export {AuthProvider, useAuth}