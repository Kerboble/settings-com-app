import React from 'react'

export default function Notifications() {
  const savedInputValues = JSON.parse(localStorage.getItem('inputValue'))


  const [inputValue, setInputValues] = React.useState( savedInputValues ? savedInputValues : 
      {
        showNotifications: false,
        muteSounds: false,
        remindMe: false,
      }
   )

   function toggle(event) {
    const {name, value, type, checked} = event.target
    setInputValues(prevInputValues => {
        return {
            ...prevInputValues,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

  React.useEffect(() => {
    localStorage.setItem('inputValue', JSON.stringify(inputValue));
  }, [inputValue]);

  return (
    <div className='setting-div'>
      <h2 className="setting-title preferences">Notifications Settings</h2>
      <hr align="center" className="horizontal-line"></hr>
      <div className="setting-title-options disable-notifications">
        <h4>Disable Notifications</h4>
        <span className="settings-description">Enabling this will disable notifications</span>
        <label className="switch disable-notifications-switch">
          <input 
            type="checkbox" 
            id="showNotifications"
            checked={inputValue.showNotifications}
            onChange={toggle}
            name="showNotifications"
          ></input>
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-title-options disable-notifications">
        <h4>Mute Notifications Sound</h4>
        <span className="settings-description">Enabling this will only disable notification sounds</span>
        <label className="switch disable-notifications-switch">
          <input 
            type="checkbox" 
            id="muteSounds"
            checked={inputValue.muteSounds}
            onChange={toggle}
            name="muteSounds"
          ></input>
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-title-options time-option remind-me-options">
        <h4>Remind Me</h4>
        <span className="settings-description">Will renotify you about unread messages after a given selected time period</span>
        <select 
          className="time-options"
          name="remindMe"
          id="remindMe"
          value={inputValue.remindMe}
          onChange={toggle}
        >
          <option value="">-- Choose --</option>
          <option value="10"> 10 minutes</option>
          <option value="20"> 20 minutes</option>
          <option value="30"> 30 minutes</option>
        </select>
      </div>

    </div>
  )
}
