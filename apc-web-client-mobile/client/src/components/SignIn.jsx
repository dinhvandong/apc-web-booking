import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bg_signin from '../assets/bg_signin.png'

const SignIn = () => {

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // const { login } = useContext(AuthContext);
  // const [userInfo, setUserInfo] = useState({});
  // const [isLogin, setIsLogin] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("username:", username);
    // console.log("password:", password);
    // const result = await loginRequest(username, password);
    // if(result.success===200){
    //   const token = result.data.message;
    //   const user = result.data
    //   login(token, user);
    //   navigate('/admin');

    // }else {
    //   console.log("resultLogin:", result);
    // }
    navigate('/profile-page');
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    // const checkAuthentication = async () => {
    //   const authenticated = await isAuthenticated();
    //   if (authenticated) {
    //      navigate('/admin');
    //   } else {
    //   }
    // };
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // checkAuthentication();
  }, []);
  return (
    <div className='justify-center w-full h-full items-center  flex  flex-col' style={{
      backgroundImage: `url(${bg_signin})`, backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='text-xl mt-[100px] text-center font-bold text-white'>
        <h1>
          Hello
        </h1>
      </div>

      <div className='mt-5 text-[14px] text-center text-white'>
        <p>Login to your Ambassador Cruise account</p>
      </div>
      <form className=" px-5 h-full w-full md:w-[400px]   flex flex-col mt-5 md:ml-5 md:mr-5  rounded">
        <div className="mb-4 mt-4">
          <label htmlFor="username" className="text-[14px] block mb-2 text-white">Username</label>
          <input
            type="text"
            id="username"
            className="w-full border rounded py-1 px-3"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-white text-[14px]">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border rounded py-1 px-3"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="flex items-center mt-5">

          <label htmlFor="myCheckbox" className="ml-2 underline italic text-[#B77855]">
            Forgot password
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#B77855] text-white py-1 px-4 mt-5 rounded hover:bg-[#B77855]"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <div className='mt-3'>
          <span className="text-white">Do you have an account?</span>
          <span className="text-[#B77855] italic"> Sign up</span>
        </div>
      </form>
    </div>
  )
}

export default SignIn