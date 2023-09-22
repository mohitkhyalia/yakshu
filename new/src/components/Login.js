import React ,{ useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import { Link } from "react-router-dom";
import Edit from './Edit';




export default function Login() {
const [user,setUser] =useState();

  const com = (data) => {
    console.log("data", data);
  };

  const [flag, setFlag] = useState(false);
  const [pp, setPp] = useState();

  
  const responseFacebook = (response) => {
    setFlag(true);
    setPp(response);
    console.log(response);
    console.log(pp);
    
    
    
  };

    
    const rendertem = () => {
      const shlink = `http://localhost:3000/Edit/${pp.id}`; // Define shlink here
    
      return (
        <>
          <div className="navbar">
          <Link className="nav" to={shlink}>{shlink}</Link>
            <Link className="nav-a">
              
              <img src={pp.picture.data.url} alt="User Profile" />
            </Link>
          </div>
          <div className='msg-er'>
            <h1>Under Development</h1>
            <p>Ongoing Database Development</p>
          </div>
        </>
      );
    };
    
    return (
      <>
    {flag?(
      rendertem()
    ):(

    <FacebookLogin
      appId="840655871102987"
      autoLoad={true}
      fields="name,email,picture"
      onClick={com}
      callback={responseFacebook}
    />
    )}
</>
    );
    };