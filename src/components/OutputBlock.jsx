import { useState } from "react";

const OutputBlock = ({ result }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(result);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-md relative">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 text-sm text-blue-600 hover:underline"
            >
                {copied ? "Copied!" : "Copy"}
            </button>
            <pre className="whitespace-pre-wrap break-words text-sm">{result}</pre>
        </div>
    );
};

export default OutputBlock;