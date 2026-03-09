import { useNavigate } from 'react-router-dom';
import styles from './PageNotFound.module.css';

export default function PageNotFound() {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.text}>
        The page you are looking for does not exist.
      </p>
      <button
        className={styles.homeBtn}
        onClick={() => navigate('/home')}
      >
        Go Home
      </button>
    </div>
  );
}