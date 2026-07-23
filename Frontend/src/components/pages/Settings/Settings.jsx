import "./Settings.css";
import { useState } from "react";

function Settings() {

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="settings-page">

      <div className="settings-card">

        <h1>Settings</h1>

        <div className="setting-item">

          <span>Enable Notifications</span>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() =>
              setNotifications(!notifications)
            }
          />

        </div>

        <div className="setting-item">

          <span>Dark Mode</span>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() =>
              setDarkMode(!darkMode)
            }
          />

        </div>

        <div className="setting-item">

          <span>Language</span>

          <select>

            <option>English</option>

            <option>Telugu</option>

            <option>Hindi</option>

          </select>

        </div>

        <button className="save-btn">

          Save Settings

        </button>

      </div>

    </div>
  );
}

export default Settings;