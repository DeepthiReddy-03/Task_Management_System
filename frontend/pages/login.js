import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import { auth, GithubAuthProvider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  const githubLogin = async () => {
    setLoading(true); // Show the loading state
    const provider = new GithubAuthProvider();

    try {
      console.log("Initializing GitHub login...");
      const result = await signInWithPopup(auth, provider);
      console.log("Login successful, user:", result.user);

      alert('Logged in successfully');
      router.push('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      console.error('Error during GitHub login:', error.message);
      alert(`Login failed: ${error.message}`);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={githubLogin} disabled={loading}>
        {loading ? 'Loading...' : 'Login with GitHub'}
      </button>
    </div>
  );
};

export default Login;
