import React from 'react';
import { Provider } from "react-redux";
import Listinput from './components/list-input';
import List from "./components/list";
import store from "./store";
import './style/style.css';
function App(props) {
  return (
    <Provider store={store}>
      <div className="posts">
        <div  className="view-container">
          <div className="posts-list">Posts list:</div>
          <Listinput/>
          <List/>
        </div>
      </div>
    </Provider>
  );
}

export default App;