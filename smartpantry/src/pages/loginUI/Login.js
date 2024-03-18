import styles from './login.module.css';
import logo from '../images/book.png'    

function Login () {
  
  const loginFunction = () => {

    const inputtedUsername = document.getElementById('logUsername').value;
    const inputtedPassword = document.getElementById('logPassword').value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "email": inputtedUsername,
      "password": inputtedPassword
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:8000/api/users/login", requestOptions)
      .then((response) => response.status)
      .then((result) => {
        if(result == 200) {
          window.location.replace("../");
          localStorage.setItem('username', inputtedUsername);
        }
        else
          alert("Incorrect Email or Password");
      })
      .catch((error) => console.error(error));
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