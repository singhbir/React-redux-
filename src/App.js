import React ,{useState} from 'react';
import './App.css';
import MainComponent from './MainComponent'
import GoogleLogin from 'react-google-login';
import Typical from 'react-typical'

function App(props) {
  const [uname,setName] = useState("");
  const [upic , setPic] = useState("");
  const [uemail,setEmail] = useState("");
  const [success,setSuccess] = useState(false); 

  const responseGoogle = async (response) => {
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setPic(response.profileObj.imageUrl)
    setSuccess(true)
  }


return (
  <div className="App">
    {success ?
     
        <>  
     <MainComponent username={uname} userpic={upic} useremail={uemail}/>
      </> 
      :
      <>
     <Typical className="typ"
        steps={['WELCOME TO CRAZYMONK 🛕', 1000, 'MY NAME IS BIR 😎', 1000 , 'PLEASE SIGN IN  🚀',1000]}
        loop={Infinity}
        wrapper="p"
        />
    <GoogleLogin className = "gbutton"
         clientId="121940005038-8gd73ehlpu6e14tp6lruivbbldq8go4q.apps.googleusercontent.com"
         buttonText="Login"
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
         cookiePolicy={'single_host_origin'}
      />
      </>
     }
     </div>
  );
}

export default App;
