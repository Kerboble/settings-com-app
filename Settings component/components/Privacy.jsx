import React from 'react'

export default function Privacy() {

  const saveInputValues = JSON.parse(localStorage.getItem('inputValues'))

  const [inputValue, setInputValue] = React.useState( saveInputValues ? saveInputValues : 
    {
      showOffline: '',
      doNotDisturb: '',
    }
  )

  function toggle(e){
    const {name, value, type, checked} = e.target;
    setInputValue(prevValues => {
      return {
        ...prevValues,
        [name]: type === "checkbox" ? checked : value
      };
    })
  };

  React.useEffect(() => {
    localStorage.setItem('inputValues', JSON.stringify(inputValue))
  },[inputValue])

  return (
    <div className='setting-div'>
      <h2 className="setting-title privacy">Privacy Settings</h2>
      <hr align="center" className="horizontal-line"></hr>
      <div className="setting-title-options disable-notifications">
        <h4>Appear Offline</h4>
        <span className="settings-description">Enabling this will make you appear offline</span>
        <label className="switch disable-notifications-switch">
          <input 
            type="checkbox" 
            id="showOffline"
            checked={inputValue.showOffline}
            onChange={toggle}
            name="showOffline"
          ></input>
          <span className="slider round"></span>
        </label>
      </div>

      <div className="setting-title-options disable-notifications">
        <h4>Do Not Disturb</h4>
        <span className="settings-description">This will let your contacts know you're online but unavailable at the moment</span>
        <label className="switch disable-notifications-switch">
          <input 
            type="checkbox" 
            id="doNotDisturb"
            checked={inputValue.doNotDisturb}
            onChange={toggle}
            name="doNotDisturb"
          ></input>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  )
}
