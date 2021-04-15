import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Homepage from './components/Homepage';

let detail;
function App()
{
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details =>
  {
    if (details.email === adminUser.email && details.password === adminUser.password)
    {
      detail = details;
      console.log('Logged In!');
      setUser({
        email: details.name,
        password: details.password
      })
    } else
    {
      console.log('Incorrect Credentials');
      setError('Incorrect Credentials');
    }
  }


  return (
    <div className="App">
      {(user.email !== "") ? (
        <Homepage email={detail.email}/>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
