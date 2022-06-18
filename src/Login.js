import React from 'react';
import './App.css';
import { useGlobalContext } from './context';

const Login = () => {
  const { theme, handleTheme, text } = useGlobalContext();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="border border-2 border-rounded p-4" style={theme}>
          <div>
            <div className="form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleTheme}
                style={{ marginRight: 10 }}
              />
              {text}
            </div>
          </div>
          <h2>
            <span className="bi bi-person"></span>
            User Login
          </h2>

          <dl>
            <dt>UserName</dt>
            <dd>
              <input type="text" className="form-control" />
            </dd>
            <dt>Password</dt>
            <dd>
              <input type="password" className="form-control" />
            </dd>
          </dl>
          <button className="btn btn-light w-100">Send</button>
        </div>
      </div>
    </>
  );
};

export default Login;
