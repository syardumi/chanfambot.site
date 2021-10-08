import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { SetProgressBar, ViewProgressBar, Main } from "./screens";
import './styles/App.css';

function App() {
  const [customInputs, setCustomInputs] = useLocalStorage('customInputs', { showHeader: true, barHeight: '4em', prefix: '$', maxColor: '#000000', currentColor: '#000000', barColor: '#222222', navTitle: '', currentProgress: 0, maxProgress: 100 })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/progress-bar">
            <ViewProgressBar customInputs={customInputs} setCustomInputs={setCustomInputs} />
          </Route>
          <Route exact path="/progress-bar/set">
            <SetProgressBar customInputs={customInputs} setCustomInputs={setCustomInputs} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
