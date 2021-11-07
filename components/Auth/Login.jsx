import Modal from '@components/UI/Modal';
import useAuth from 'context/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginActive, setRegisterActive } from 'redux/authSlice';
import styled from 'styled-components';
import { database } from '../../firebase';

function Login() {
  const { loginActive, registerActive } = useSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { signup, currentUser } = useAuth();
  console.log(currentUser);

  console.log(username);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setLoginActive(false));
    dispatch(setRegisterActive(false));
  };

  const loginUser = () => {
    login(credentials.email, credentials.password).catch((error) => {
      setError(error.message);
    });
  };

  const signupUser = () => {
    signup(email, password)
      .then((user) => {
        updateProfileHandler(user.user);
        closeModal();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const updateProfileHandler = (userData) => {
    const updateUser = userData.updateProfile({
      displayName: username,
    });
    const storeUserDatabase = database.ref('users/' + userData.uid).set({
      name: username,
      email: email,
    });

    Promise.all([updateUser, storeUserDatabase]).catch((error) => {
      setError(error.message);
    });
  };

  const signupHandler = (e) => {
    if (password !== confirmPassword)
      return setError('Passwords do not match!');
    return signupUser();
  };

  return (
    <Modal active={loginActive || registerActive} closeModal={closeModal}>
      <S.Header>
        <h3
          onClick={() => dispatch(setLoginActive(true))}
          style={{ color: loginActive && '#50ba64', cursor: 'pointer' }}
        >
          Login
        </h3>
        <h3> | </h3>
        <h3
          onClick={() => dispatch(setRegisterActive(true))}
          style={{ color: registerActive && '#50ba64', cursor: 'pointer' }}
        >
          Register
        </h3>
      </S.Header>
      <S.Form>
        <p>
          Enter your email and password to {loginActive ? 'login' : 'register'}.
        </p>
        {registerActive && (
          <input
            type='text'
            placeholder='Username'
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        )}
        <input
          type='email'
          placeholder='Enter your email address'
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {registerActive && (
          <input
            type='password'
            placeholder='Confirm Password'
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        )}
        {error && <p className='error'>{error}</p>}
        {loginActive && <button onClick={loginUser}>Login</button>}
        {registerActive && <button onClick={signupHandler}>Register</button>}
      </S.Form>
    </Modal>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Header = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    margin: 0 2rem;
    font-weight: 400;
  }
`;

S.Form = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;

  p {
    margin-top: 3rem;
    font-size: 14px;
    font-weight: 600;

    &.error {
      margin: 0;
      color: red;
    }
  }

  input {
    outline: 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.7rem 1rem;
    margin: 0.7rem 0;
    border-radius: 0.5rem;
  }

  button {
    margin: 1rem 0;
    padding: 0.7rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.green};
    outline: 0;
    border: 0;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
`;

export default Login;
