import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'; 
import LogoutButton from './LogoutButton';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <div>Inicie sesion</div>;
    }
  return (
    <div>
        <img src={user.picture} className='img-box-perfil'/>
        <p><strong>{user.name}</strong></p>
        <p>{user.email}</p>
        <LogoutButton/>
       
      

    </div>
  )
}

export default Profile

//<p>{user.email}</p>
//<pre>{JSON.stringify(user)}</pre>