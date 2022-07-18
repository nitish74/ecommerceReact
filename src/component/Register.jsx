import React from "react";

const Register = () => {
  return (
    <body>
      <div class="container">
        <section id="content">
          <form action="">
            <h1>Register</h1>
            <div>
              <input
                type="text"
                placeholder="Name"
                required=""
                id="username"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                required=""
                id="lastname"
              />
            </div>
           
            <div>
              <input type="text" placeholder="Email" required="" id="email" />
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
              <input type="submit" value="Register" />
              <a href="#">forget your password</a>
            </div>
          </form>
        </section>
      </div>
    </body>
  );
};

export default Register;
