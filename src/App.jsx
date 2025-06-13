import { useState } from "react";
import EmailInput from "./components/EmailInput";
import ModeSelector from "./components/ModeSelector";
import Controls from "./components/Controls";
import OutputBlock from "./components/OutputBlock";
import Loader from "./components/Loader";
import "./index.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-4">
        <EmailInput value={email} onChange={setEmail} />
        <ModeSelector value={mode} onChange={setMode} />
        <Controls {...{ email, mode, setResult, setError, setLoading }} />
        {loading ? <Loader /> : null}
        {result ? <OutputBlock result={result} /> : null}
        {error ? <div className="text-red-600">{error}</div> : null}
      </div>
    </div>
  );
}

export default App;