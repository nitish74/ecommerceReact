import React from "react";

const Login = () => {
  return (
    <body>
      <div class="container">
        <section id="content">
          <form action="">
            <h1>Login</h1>
            <div>
              <input
                type="text"
                placeholder="Username"
                required=""
                id="username"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required=""
                id="password"
              />
            </div>
            <div>
              <input type="submit" value="Enter" />
              <a href="#">forget your pass</a>
              <a href="/register">register</a>
            </div>
          </form>
        </section>
      </div>
    </body>
  );
};

export default Login;
