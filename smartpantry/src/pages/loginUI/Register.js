import styles from './login.module.css';
import logo from '../images/book.png'

function Register  () {

  const registerFunction = () => {
    const inputtedUsername = document.getElementById('regUsername').value;
    const inputtedEmail = document.getElementById('regEmail').value;
    const inputtedPassword = document.getElementById('regPassword').value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    

    const raw = JSON.stringify({
      "user_name": inputtedUsername,
      "email": inputtedEmail,
      "password": inputtedPassword
    });

    console.log(raw);
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:8000/api/users/register", requestOptions)
      .then((response) => response.status)
      .then((result) => {
        console.log(result);
        if(result == 201)
        window.location.replace("./")
      })
      .catch((error) => console.error(error));
    }
  
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginBox}>
          <img src={logo} alt="Logo" className={styles.loginImg}/>
          <div className={styles.loginTextContainer}>
            <p className={styles.loginText}>Register</p>
          </div>
          <div>
            <input type='text' className={styles.inputBox} placeholder='Username' id='regUsername'></input> <br></br>
            <input type='text' className={styles.inputBox} placeholder='Email' id='regEmail'></input> <br></br>
            <input type='password' className={styles.inputBox} placeholder='Password' id='regPassword'></input>
          </div>
          <div>
            <button onClick={registerFunction} className={styles.loginButton}>Register</button>
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