import { useState } from "react";
import ModeSelector from "./ModeSelector";

const MAX_LENGTH = 2000;

const EmailInput = ({ email, onEmailChange, mode, onModeChange }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    onEmailChange(value);

    if (value.length <= MAX_LENGTH) {
      setError("");
    } else {
      setError(`Exceeded limit: maximum ${MAX_LENGTH} characters allowed.`);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="email-input" className="font-medium text-lg mb-1">
        Enter the text of your email:
      </label>

      <textarea
        id="email-input"
        value={email}
        onChange={handleChange}
        rows={10}
        className="w-full p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your text here..."
      />

      <div className="flex items-center justify-between mt-1">
        <div className="flex flex-wrap gap-[4px]">
          <ModeSelector value={mode} onChange={onModeChange} />
        </div>

        <div className={`text-sm ${email.length > 1800 ? "text-red-500" : "text-gray-500"}`}>
          {email.length} / {MAX_LENGTH}
        </div>
      </div>

      {error && <div className="text-sm text-red-600 mt-1">{error}</div>}
    </div>
  );
};

export default EmailInput;