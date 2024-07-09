import { useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
  
    window.fbAsyncInit = () => {
      window.FB.init({
          appId            : '395255233532264',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v20.0'
      });
  };
  (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  }, []);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
