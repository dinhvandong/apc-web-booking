import React from 'react'

const ConfirmRegisterCode = () => {

    const [firstName, setFirstName] = useState('');
    
    const handleFirstNameChange = (e)=>{
        setFirstName(e.target.value);
      }
  return (
    <div className='flex flex-col items-center justify-center  w-full md:w-[600px] flex-grow  h-[1000px] overflow-y-auto'>
    <div className='text-xl font-bold mt-[100px] text-center  text-black'>
      <p>
        Let's embark on the journey with
      </p>
    </div>

    <div className='mt-1 text-[14px] text-center font-bold text-black'>
      <h1>Ambassador Cruise account!</h1>
    </div>

    <div className='mt-5 text-[24px] font-bold'>
      <h1>PERSONAL INFORMATION</h1>

    </div>

    <div className='mt-2 ml-4 mr-4'>
      <p>Please provide your personal information as per your passport or ID Card.</p>

    </div>
    <div className='mt-2'>
      <p>*Please use English character only</p>
    </div>
    <form className=" px-5  w-full md:w-[600px]   flex flex-col mt-2 md:ml-5 md:mr-5  rounded">

      <div className="flex mt-2 mb-2">

        <div className='w-[50%] flex flex-col'>
          <label htmlFor="username" className="text-[14px] block mb-2 text-black">First Name*</label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3 py-1 border border-gray-300 rounded"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
       
      </div>
     


      <div className='flex flex-col mt-2'>
        
        <button
          type="submit"
          className="bg-[#B77855] text-white w-full px-3 py-2 border rounded mt-2 hover:bg-[#B77855]"
        >
         Confirm Code
        </button>
      </div>
    </form>
  </div>
    )
}

export default ConfirmRegisterCode