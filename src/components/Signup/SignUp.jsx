import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './SignUp.module.css';

// export default function SignUp({ setShowModal }) {
//   const { users, setUsers, setCurrentUser } = useContext(AuthContext);

//   const ref = useRef(null);

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [colour, setColor] = useState('#787a7a');

//   useEffect(()=>{
//     if(name && email && password){
//       setColor('#000000');
//       ref.current.style.cursor = 'pointer';
//     } else {
//       setColor('#787a7a');
//       ref.current.style.cursor = 'not-allowed';
//     }
//   },[name, email, password])

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailExists = users.find((u) => u.email === email);
//     if (emailExists) {
//       alert('Email already registered!');
//       return;
//     }

//     const newUserId = users.length > 0 ? Math.max(...users.map((u) => u.userId)) + 1 : 1;
//     const newUser = { userId: newUserId, name, email, password };
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//     setCurrentUser(newUser);
//     localStorage.setItem('currentUser', JSON.stringify(newUser));
//     alert('Account created successfully!');
//     setShowModal(false);
//     navigate('/home');
//   };

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <button className={styles.closeBtn} onClick={() => {
//           setShowModal(false);
//         }}>✕</button>
//         <div className={styles.topLogo}>
//           <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
//         </div>
//         <h2 className={styles.title}>Create your account</h2>
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <input
//             className={styles.inputBox}
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             className={styles.inputBox}
//             placeholder="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             className={styles.inputBox}
//             placeholder="Password"
//             type="password"
//             value={password}
//             minLength={8}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <div>
//             <p className={styles.dobTitle}>Date of birth</p>
//             <p className={styles.dobSubtitle}>
//               This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
//             </p>
//             <div className={styles.dobSelectors}>
//               <select className={styles.selectField}>
//                 <option disabled selected>Month</option>
//                 <option>January</option>
//                 <option>February</option>
//                 <option>March</option>
//                 <option>April</option>
//                 <option>May</option>
//                 <option>June</option>
//                 <option>July</option>
//                 <option>August</option>
//                 <option>September</option>
//                 <option>October</option>
//                 <option>November</option>
//                 <option>December</option>
//               </select>
//               <select className={styles.selectField}>
//                 <option
//                   disabled selected
//                 >Day</option>
//                 {[...Array(31)].map((value, i) => (
//                   <option key={i} value={i + 1}>{i + 1}</option>
//                 ))}
//               </select>
//               <select className={styles.selectField}>
//                 <option disabled selected>Year</option>
//                 {[...Array(100)].map((value, i) => (
//                   <option key={i} value={2026 - i}>{2026 - i}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <button type="submit" className={styles.nextBtn} style={{backgroundColor: colour}} ref={ref}>Next</button>
//         </form>
//       </div>
//     </div>
//   );
// }



export default function SignUp({ setShowModal }) {

  const { users, setUsers, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [colour, setColor] = useState('#787a7a');
  const ref = useRef(null);

  const isValid =
    name.trim() &&
    email.trim() &&
    password.trim().length >= 8;


  useEffect(() => {
    if (isValid) {
      setColor('#000000');
      ref.current.style.cursor = 'pointer';
    } else {
      setColor('#787a7a');
      ref.current.style.cursor = 'not-allowed';
    }
  }, [isValid])


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      alert("Email or password is not perfect!");
      return;
    }

    const emailExists = users.find(u => u.email === email.trim());

    if (emailExists) {
      alert("Email already registered!");
      return;
    }

    const newUserId =
      users.length > 0
        ? Math.max(...users.map(u => u.userId)) + 1
        : 1;

    const newUser = {
      userId: newUserId,
      name: name.trim(),
      email: email.trim(),
      password: password.trim()
    };

    alert("Account created...");

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setShowModal(false);
    navigate("/home");
  };


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={() => {
          setShowModal(false);
        }}>✕</button>
        <div className={styles.topLogo}>
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
        </div>
        <h2 className={styles.title}>Create your account</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.inputBox}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={styles.inputBox}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.inputBox}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <p className={styles.dobTitle}>Date of birth</p>
            <p className={styles.dobSubtitle}>
              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </p>
            <div className={styles.dobSelectors}>
              <select className={styles.selectField}>
                <option disabled selected>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select className={styles.selectField}>
                <option
                  disabled selected
                >Day</option>
                {[...Array(31)].map((value, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select className={styles.selectField}>
                <option disabled selected>Year</option>
                {[...Array(100)].map((value, i) => (
                  <option key={i} value={2026 - i}>{2026 - i}</option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className={styles.nextBtn} style={{ backgroundColor: colour }} ref={ref}>Next</button>
        </form>
      </div>
    </div>
  );
}