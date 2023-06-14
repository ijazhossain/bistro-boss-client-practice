import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        logOut,
        googleSignIn,
        logIn
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('on auth state changed', currentUser);
            setUser(currentUser);

            // if (currentUser) {
            //     fetch('http://localhost:5001/jwt', {
            //         method: 'POST',
            //         headers: { 'content-type': 'application/json' },
            //         body: JSON.stringify(currentUser)
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             console.log(data);
            //             localStorage.setItem('bistro-access-token', data.token)
            //         })
            // } else {
            //     localStorage.removeItem('bistro-access-token')
            // }
            if (currentUser) {
                axios.post('http://localhost:5001/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token);
                        localStorage.setItem('bistro-access-token', data.data.token);
                        setLoading(false);
                    })
            } else {

                localStorage.removeItem('bistro-access-token')
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;