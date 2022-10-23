import  * as React from 'react';
import './APP.scss'
import cover from "./view/cover";
import {RouterIndexView, RouterOjView} from "./router/RouterView";
import 'antd/dist/antd.min.css'

function App() {
  return (
    <div>
        <RouterIndexView/>
        <RouterOjView/>
    </div>
  );
}

export default App;
