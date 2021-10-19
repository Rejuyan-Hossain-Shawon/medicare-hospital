import initializeAuthentication from "../Firebase/firebase.init"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

// provider
const googleProvider = new GoogleAuthProvider();

// firebase authentication initialize
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const auth = getAuth();

    // handle google sign in with event handler 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                setError("");
            })
            .catch(error => setError(error.message))


    }


    //handle  logout btn 
    const logOut = () => {
        signOut(auth).then(() => {
            alert('Log Out SuccessFully');
            setUser({});
        }).catch((error) => {
            alert(error.message);
            setError("");
        });

    }


    // firebase user state observer

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);


            } else {

                setUser({});

            }
        });

    }, [])

    // registration with new email 
    const accountRegistration = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user);
                setError("");

            })
            .catch((error) => {
                setError(error.message);
                setUser({});

            });
    }

    //  account login with email and password

    const accountLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch(error => setError(error.message))
    }



    // return function and variables
    return {
        handleGoogleSignIn,
        logOut,
        accountRegistration,
        accountLogin,
        user,
        error,
        setError,
        setUser
    }

}
export default useFirebase;