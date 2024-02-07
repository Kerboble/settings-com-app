import React from 'react'
import { Form } from 'react-router-dom'

export default function Account() {


  const storedAccountData = JSON.parse(localStorage.getItem('accountData'))

  const [accountData, setAccountData] = React.useState( storedAccountData ? storedAccountData : 
    {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      newPassword: "",
      confirmPassword: ""
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
    if(accountData.newPassword !== accountData.confirmPassword){
      return alert('please make sure passwords match')
    }
    alert('submitted')
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
            value={accountData.lastName} 
            onChange={handleChange}></input>

          <h4>Username</h4>
          <input 
            className='account-input userName' 
            name="userName" 
            type="text" 
            value={accountData.userName} 
            onChange={handleChange}></input>

          <h4>Change Email</h4>
          <input 
            className='account-input email' 
            name="email" 
            type="email" 
            value={accountData.email} 
            onChange={handleChange}></input>

          <h4>New Password</h4>
          <input 
            className='account-input new-password' 
            name="newPassword" 
            type="password" 
            value={accountData.newPassword} 
            onChange={handleChange}></input>

          <h4>Confirm New Password</h4>
          <input 
            className='account-input confirm-new-password' 
            name="confirmPassword" 
            type="password" 
            value={accountData.confirmPassword} 
            onChange={handleChange}></input>
            <button className="submitBtn" type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
