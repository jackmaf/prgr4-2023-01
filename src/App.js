// import logo from "./logo.svg";
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

function TitleLogin(props) {
  return (
    <>
      <label for="tab-1" className="tab">
        {props.principalTitle}
      </label>
      <input id="tab-2" type="radio" name="tab" className="for-pwd" />
      <label for="tab-2" className="tab">
        {props.secondTitle}
      </label>
    </>
  );
}

function InputLogin({ labelName, labelFor = "userjack", type = "text" }) {
  return (
    <div className="group">
      <label for={labelFor} className="label">
        {labelName}
      </label>
      <input id={labelFor} type={type} className="input" />
    </div>
  );
}

function App() {
  return (
    <>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked="checked"
          />
          <TitleLogin
            principalTitle="Sign In Jack"
            secondTitle="Forgot Password Jack"
          />
          <div className="login-form">
            <div className="sign-in-htm">
              <InputLogin labelName="Username or Email"></InputLogin>
              <InputLogin
                labelName="Password"
                labelFor="pass"
                type="password"
              />
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
