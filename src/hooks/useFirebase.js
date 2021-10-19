import initializeAuthentication from "../Firebase/firebase.init"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

// provider
const googleProvider = new GoogleAuthProvider();

// firebase authentication initialize
initializeAuthentication();
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const auth = getAuth();

    // handle google sign in with event handler 
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);


                setError("");
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));


    }


    //handle  logout btn 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                alert('Log Out SuccessFully');
                setUser({});
            })
            .catch((error) => {
                alert(error.message);
                setError("");
            })
            .finally(() => setIsLoading(false))

    }


    // firebase user state observer

    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);


            } else {

                setUser({});

            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, [])

    // registration with new email 
    const accountRegistration = (email, password) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user);

                setError("");

            })
            .catch((error) => {
                setError(error.message);
                setUser({});

            })
            .finally(() => setIsLoading(false))

    }

    //  account login with email and password

    const accountLogin = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;

                setError("");
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }



    // return function and variables
    return {
        handleGoogleSignIn,
        logOut,
        accountRegistration,
        accountLogin,
        setError,
        setUser,
        user,
        error,
        auth,
        isLoading
    }

}
export default useFirebase;