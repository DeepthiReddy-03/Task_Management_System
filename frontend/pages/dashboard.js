// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { auth } from '../firebase-config'; // Adjust the import path if necessary
// import { onAuthStateChanged } from 'firebase/auth';

// const Dashboard = () => {
//   const [user, setUser] = useState(null); // Track authenticated user
//   const [loading, setLoading] = useState(true); // Track loading state
//   const router = useRouter();

//   useEffect(() => {
//     // Check user authentication state
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser); // Set the authenticated user
//       } else {
//         router.push('/login'); // Redirect to login if not authenticated
//       }
//       setLoading(false); // Stop loading
//     });

//     return () => unsubscribe(); // Cleanup the listener on component unmount
//   }, [router]);

//   if (loading) {
//     return <p>Loading...</p>; // Show loading indicator
//   }

//   if (!user) {
//     return null; // Avoid rendering the page if user is null
//   }

//   return (
//     <div>
//       <h1>Welcome to the Dashboard</h1>
//       <p>Hello, {user.displayName || 'User'}!</p>
//       <button onClick={() => auth.signOut().then(() => router.push('/login'))}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;
// pages/dashboard.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config"; // Import the firebase auth configuration

export default function Dashboard() {
  const [user, setUser] = useState(null); // State to store user information
  const [loading, setLoading] = useState(true); // State to handle loading state
  const router = useRouter(); // For navigation after login

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the authenticated user
        console.log(currentUser); // Log user details for debugging
      } else {
        router.push("/login"); // Redirect to login if not authenticated
      }
      setLoading(false); // Stop loading when authentication state is checked
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div className="container">
      <h1>Hello, {user.displayName || user.email || "User"}!</h1> {/* Display user info */}
      <p>Welcome to the Dashboard!</p>
    </div>
  );
}
