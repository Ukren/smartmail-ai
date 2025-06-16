import { useState } from "react";
import EmailInput from "./components/EmailInput";
import ModeSelector from "./components/ModeSelector";
import Controls from "./components/Controls";
import OutputBlock from "./components/OutputBlock";
import Loader from "./components/Loader";
import "./index.css";

const MAX_LENGTH = 2000;

const App = () => {
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = () => {
    if (!email.trim()) {
      setError("Please enter some text.");
      return;
    }

    if (email.length > MAX_LENGTH) {
      setError(`Email is too long. Max allowed: ${MAX_LENGTH} characters.`);
      return;
    }

    if (!mode) {
      setError("Please select a mode.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult("");

    //To be done with AI
    setTimeout(() => {
      setResult(`[Generated (${mode}) version of your email here...]`);
      setLoading(false);
    }, 1000);
  };

  const handleClear = () => {
    setEmail("");
    setMode("");
    setResult("");
    setError(null);
  };

  const handleInsertSample = () => {
    setEmail(
      `Hello,

This is a sample email provided for testing purposes. You can replace this text with your own content, experiment with different AI modes, and observe how the output changes.

Feel free to modify the wording, style, or tone of the message to suit your needs.

Best regards,  
Your Test Assistant`
    );
    setError(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <EmailInput email={email} onEmailChange={setEmail} />
          </div>

          <div className="w-full md:w-[180px] flex flex-col gap-2 md:pt-10">
            <Controls
              email={email}
              mode={mode}
              loading={loading}
              onGenerate={handleGenerate}
              onClear={handleClear}
              onInsertSample={handleInsertSample}
            />
          </div>
        </div>

        <ModeSelector value={mode} onChange={setMode} />

        {loading && <Loader />}
        {result && <OutputBlock result={result} />}
        {error && <div className="text-red-600">{error}</div>}
      </div>
    </div>
  );
};

export default App;