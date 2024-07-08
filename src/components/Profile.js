import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'; 

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <div>Usuario no autenticado</div>;
    }
  return (
    <div>
        
        <h2>{user.name}</h2>
        <h4>{user.email}</h4>
       
      

    </div>
  )
}

export default Profile

//<p>{user.email}</p>
//<pre>{JSON.stringify(user)}</pre>