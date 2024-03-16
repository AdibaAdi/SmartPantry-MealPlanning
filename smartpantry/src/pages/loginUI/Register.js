import styles from './login.module.css';
import logo from '../images/book.png'

const Register = () => {
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginBox}>
          <img src={logo} alt="Logo" className={styles.loginImg}/>
          <div className={styles.loginTextContainer}>
            <p className={styles.loginText}>Register</p>
          </div>
          <div>
            <input className={styles.inputBox} placeholder='Username'></input> <br></br>
            <input className={styles.inputBox} placeholder='Email'></input> <br></br>
            <input className={styles.inputBox} placeholder='Password'></input>
          </div>
          <div>
            <button className={styles.loginButton}>Register</button>
          </div>
          <div>
            <a href="/loginUI" style={{color: 'inherit'}}>
              <p className={styles.returnToLoginButton}>Back to Login</p>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;