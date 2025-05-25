import { useState } from "react";

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    console.log("Verifying OTP:", otp);
  };

  return (
    <div classNmae="container">
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Verify OTP</h2>
        <form onSubmit={handleVerify}>
            <label className="block mb-1">Enter OTP</label>
          <div className="mb-4">
           
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border rounded text-white"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default OTPVerificationPage;
