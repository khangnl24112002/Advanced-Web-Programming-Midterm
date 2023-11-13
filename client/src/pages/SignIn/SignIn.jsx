// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import SignInForm from "../../components/SignInForm/SignInForm";
// const SignIn = () => {
//   return <SignInForm />;
// };

// export default SignIn;

import React from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Image from "../../components/Image";

const SignIn = () => {
  const heightWindow = use100vh();
  return (
    <div className={styles.login} style={{ minHeight: heightWindow }}>
      <div className={styles.wrapper}>
        <div className={cn("h2", styles.title)}>Sign in</div>
        <div className={styles.body}>
          <div className={styles.subtitle}>Or continue with email address</div>
          <TextInput
            className={styles.field}
            name="email"
            type="email"
            placeholder="Your email"
            required
            icon="mail"
          />
          <TextInput
            className={styles.field}
            name="password"
            type="password"
            placeholder="Password"
            required
            icon="lock"
          />
          <button className={cn("button", styles.button)}>Sign in</button>
          <div className={styles.note}>
            This site is protected by reCAPTCHA and the Google Privacy Policy.
          </div>
          <div className={styles.info}>
            Don’t have an account?{" "}
            <Link className={styles.link} to="/sign-up">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
