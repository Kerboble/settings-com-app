import React from "react"

export default function General() {

const savedInputValues = JSON.parse(localStorage.getItem('inputValue'))


  const [inputValue, setInputValues] = React.useState( savedInputValues ? savedInputValues : 
      {
        autoSignOn: false,
        dragAndDrop: false,
        hideInactiveMessage: '',
        darkMode: false,
        hideOfflineFriends: false

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
    <div className="setting-div">
      <h2 className="setting-title preferences">Preferences</h2>
      <hr align="center" className="horizontal-line"></hr>
      <div className="setting-title-options auto-sign-on">
        <h4>Sign Me On Automatically</h4>
        <span className="settings-description">Enabling this will make you yo sing-in automatically when the program starts</span>
        <label className="switch">
          <input 
            type="checkbox" 
            id="autoSignOn"
            checked={inputValue.autoSignOn}
            onChange={toggle}
            name="autoSignOn"
          ></input>
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-title-options drag-and-drop">
        <h4>Confirm Drag And Drop Uploads</h4>
        <span className="settings-description">Add a confirmation alert before uploading a file</span>
        <label className="switch">
          <input 
          type="checkbox"
          name="dragAndDrop"
          onChange={toggle}
          id="dragAndDrop"
          checked={inputValue.dragAndDrop}
          ></input>
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-title-options time-option">
        <h4>Hide Inactive Messages</h4>
        <span className="settings-description">Hide messages after selected time</span>
        <select 
          className="time-options"
          name="hideInactiveMessage"
          id="hideInactiveMessage"
          value={inputValue.hideInactiveMessage}
          onChange={toggle}
        >
          <option value="">-- Choose --</option>
          <option value="10"> 10 days</option>
          <option value="20"> 20 days</option>
          <option value="30"> 30 days</option>
        </select>
      </div>

      <h2 className="setting-title appearance">Appearance</h2>
      <hr className="horizontal-line"></hr> 
      <div className="setting-title-options dark-mode">
        <h4>Dark Mode</h4>
        <span className="settings-description">Toggles The Theme Of The App</span>
        <label className="switch">
          <input 
          type="checkbox"
          id="darkMode"
          name="darkMode"
          onChange={toggle}
          checked={inputValue.darkMode}
          ></input>
          <span className="slider round"></span>
        </label>

      <div className="setting-title-options hide-offline-friends">
        <h4>Hide Offline Contacts</h4>
        <span className="settings-description">Do not display contacts in the list who are offline</span>
        <label className="switch">
          <input 
          type="checkbox"
          name="hideOfflineFriends"
          id="hideOfflineFriends"
          onChange={toggle}
          checked={inputValue.hideOfflineFriends}
          ></input>
          <span className="slider round"></span>
        </label>
      </div>
    </div>   
  </div>
  )
}
