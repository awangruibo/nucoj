import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {persist, Store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";
import Loading from "./view/loading/Loading";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  // <React.StrictMode>
      //{/*⬆严格模式⬆*/}
      //{/*    ⬇全局操作状态⬇*/}
          <Provider store={Store}>
              {/*⬇数据可持久化 + 懒加载⬇*/}
              <PersistGate loading = {<Loading/>} persistor={persist}>
                  {/*⬇提供路由⬇*/}
                  <BrowserRouter>
                      <App/>
                  </BrowserRouter>
              </PersistGate>
          </Provider>
  // </React.StrictMode>
);
