
import { useEffect, useState } from 'react';
import initAuthentication from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,updateProfile, getIdToken, signOut } from "firebase/auth";

// Initialize Firebase App
initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            //setUser (result.user);
            setAuthError('');
            const newUser = {email, displayName: name}
            setUser(newUser);
            // save user to the Database
            saveUser(email, name, 'POST');
            // Send Name to firebase after Creation
            updateProfile(auth.currentUser, {
              displayName: name
              })
              .then(() => {
              
              })
              .catch((error) => {

              });
            history.replace('/')
        })
        .catch(error => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user)
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
    }
    
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
    
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
    }
  // Observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
             getIdToken(user)
              .then(idToken => {
               setToken(idToken)
              })
            } else {
                setUser({});
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    }, []);

//console.log(token)
    useEffect(() => {
      fetch(`https://aqueous-woodland-69983.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('https://aqueous-woodland-69983.herokuapp.com/users', {
        method: method,
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        googleSignIn,
        logOut
    };
};

export default useFirebase;