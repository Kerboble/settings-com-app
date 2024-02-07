import React from 'react'
import {Form, } from 'react-router-dom'

export default function Account() {


  const storedAccountData = JSON.parse(localStorage.getItem('accountData'))

  const [accountData, setAccountData] = React.useState( storedAccountData ? storedAccountData : 
    {
      firstName: "",
      lastName: "",
      userName: "",
      email: ""
    }
  )

  function handleChange(e){
    const {name, type, value} = e.target

    setAccountData(prevAccountData => {
      return {
        ...prevAccountData,
        [name]:  value
      };
    })
  };

  React.useEffect(() => {
    localStorage.setItem('accountData', JSON.stringify(accountData))
  },[accountData])

  function handleSubmit(e){
    e.preventDefault();
    console.log(accountData)
  }
  
  

  return (
    <div className='setting-div'>
      <h2 className="setting-title preferences">Account Settings</h2>        
      <span className="settings-description">Change your account and profile settings </span>
      <hr align="center" className="horizontal-line"></hr>
      <div className="search-form">
        <form className='account-form' onSubmit={handleSubmit}>

          <h4>First Name</h4>
          <input 
            className='account-input firstName' 
            name="firstName" 
            type="text" 
            value={accountData.firstName} 
            onChange={handleChange}></input>

          <h4>Last Name</h4>
          <input 
            className='account-input lastName' 
            name="lastName" type="text" 
            placeholder='' 
            value={accountData.lastName} 
            onChange={handleChange}></input>

          <h4>Username</h4>
          <input 
            className='account-input userName' 
            name="userName" 
            type="text" 
            placeholder='' 
            value={accountData.userName} 
            onChange={handleChange}></input>

          <h4>Email</h4>
          <input 
            className='account-input email' 
            name="email" 
            type="email" 
            placeholder='' 
            value={accountData.email} 
            onChange={handleChange}></input>

            <button className="submitBtn" type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
