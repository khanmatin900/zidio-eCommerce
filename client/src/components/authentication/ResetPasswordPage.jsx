import { useState } from "react";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    console.log("Resetting password to:", password);
  };

  return (
    <div classNmae="container">
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <form onSubmit={handleReset}>
           <label className="block mb-1">New Password</label>
          <div className="mb-4">
           
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 border rounded text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
           <label className="block mb-1">Confirm Password</label>
          <div className="mb-4">
           
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 border rounded text-white"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 py-2 rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ResetPasswordPage;
