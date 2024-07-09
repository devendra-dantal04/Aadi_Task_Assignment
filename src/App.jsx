import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    userId: "",
    name: "",
    email: "",
    profile_pic: "",
    pages: [],
  });

  // User Login Function
  const onLoginClick = () => {
    window.FB.login(
      function (response) {
        console.log(response);
        if (response.authResponse) {
          FB.api(
            "/me",
            { fields: "id, name, email, picture" },
            function (response) {
              if (response.email && response.name) {
                setUser({
                  userId: response.id,
                  email: response.email,
                  name: response.name,
                  profile_pic: response.data.url,
                });

                setIsLoggedIn(true);
              }
            }
          );
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      {
        config_id: "466404602797388",
      }
    );
  };

  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: "395255233532264",
        xfbml: true,
        version: "v20.0",
      });
    };
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Dashboard user={user} />
      ) : (
        <Login onLoginClick={onLoginClick} />
      )}
    </>
  );
}

export default App;
