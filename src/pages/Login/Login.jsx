
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './Login.module.css';
import SignUp from '../../components/Signup/SignUp';

export default function Login() {
  const { users, currentUser, setCurrentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/home');
    }
  }, [currentUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      alert('Invalid email or password');
      return;
    }
    setCurrentUser(foundUser);
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
    navigate('/home');
  };

  return (
  <div className={styles.container}>

      <div className={styles.logoSection}>
        <svg viewBox="0 0 24 24" className={styles.bigLogo}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      </div>

      <div className={styles.contentSection}>
        <h1 className={styles.mainTitle}>Happening now</h1>
        <h2 className={styles.subTitle}>Join today.</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.inputField}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className={styles.inputField}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={styles.loginBtn} type="submit">
            Log in
          </button>
          <p className={styles.termsText}>
            By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use.</span>
          </p>

          <p className={styles.signupHeading} >Already have an account? </p>
          <button className={styles.signupBtn} onClick={() => {
            setShowModal(!showModal);
          }}>
            Sign in
          </button>

          <button className={styles.signupBtn} onClick={() => alert('We are working on this feature!')}>
            <svg viewBox="0 0 33 33" fill="currentColor">
              <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466">
              </path>
            </svg>
            Get Grok
          </button>
        </form>
        {showModal && <SignUp showModal={showModal} setShowModal={setShowModal} />}
      </div>
    </div>
  )
}