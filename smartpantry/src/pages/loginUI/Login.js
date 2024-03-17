import styles from './login.module.css';
import logo from '../images/book.png'

 function Login () {
  
   async function loginFunction() {
    console.log('API URL:', process.env.REACT_APP_API_URL);
    const inputtedUsername = document.getElementById('logUsername').value;
    const inputtedPassword = document.getElementById('logPassword').value;
    
    const loginData = {
        username: inputtedUsername,
        password: inputtedPassword
    };
    
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });

    const responseData = await response.json();
    if (response.ok) {
        // Handle success, store token, redirect user, etc.
    } else {
        // Handle errors, display messages, etc.
    }
 }

  
  return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginBox}>
          <img src={logo} alt="Logo" className={styles.loginImg}/>
          <div className={styles.loginTextContainer}>
            <p className={styles.loginText}>Login</p>
          </div>
          <div>
            <input type='text' className={styles.inputBox} placeholder='Username' id='logUsername'></input> <br></br>
            <input type='password' className={styles.inputBox} placeholder='Password' id='logPassword'></input>
          </div>
          <div>
            <button onClick={loginFunction} className={styles.loginButton}>Login</button>
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