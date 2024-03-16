import styles from './login.module.css';
import logo from '../images/book.png'

const Login = () => {
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginBox}>
          <img src={logo} alt="Logo" className={styles.loginImg}/>
          <div className={styles.loginTextContainer}>
            <p className={styles.loginText}>Login</p>
          </div>
          <div>
            <input className={styles.inputBox} placeholder='Username'></input> <br></br>
            <input className={styles.inputBox} placeholder='Password'></input>
          </div>
          <div>
            <button className={styles.loginButton}>Login</button>
          </div>
          <div>
            <p className={styles.registerText}>New User?</p>
            <a href="/loginUI/Register" style={{color: 'inherit'}}>
              <p className={styles.registerButton}>Register</p>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;