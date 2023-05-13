import logo from "./logo.svg";
import "./App.css";

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const user = {
//   firstName: "Harper",
//   lastName: "Perez",
// };

// const element = (
//   <>
//     <h1 widht="100%" tabIndex="12">
//       Hello, {formatName(user)}!
//     </h1>
//     <h2>byes...</h2>
//   </>
// );

// function getGreeting(user) {
//   if (user) {
//     return element;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }
// const objectImage = {
//   url: "https://www.nationalgeographic.com.es/medio/2022/12/12/leon-1_b21b27e1_221212155936_1280x720.jpg",
// };
// const imagenPrincipal = (
//   <img className="imagen-fea" width="100%" src={objectImage.url}></img>
// );

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/*imagenPrincipal*/}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> jack and save to reload.
          </p>
          {/*getGreeting(user)*/}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked="checked"
          />
          <label for="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="for-pwd" />
          <label for="tab-2" className="tab">
            Forgot Password
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="user" className="label">
                  Username or Email
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
            </div>
            <div className="for-pwd-htm">
              <div className="group">
                <label for="user" className="label">
                  Username or Email
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Reset Password"
                />
              </div>
              <div className="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
