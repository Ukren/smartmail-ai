import React from "react";

const Controls = ({ email, mode, loading, onGenerate, onClear, onInsertSample }) => {
    const isDisabled = !email || !mode || loading;

    return (
        <div className="flex flex-col gap-y-2 w-full">
            <button
                onClick={onGenerate}
                disabled={isDisabled}
                className={`w-full px-4 py-2 rounded-xl font-medium transition
                    ${isDisabled
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"}`}
            >
                {loading ? "Generating..." : "Generate"}
            </button>

            <button
                onClick={onClear}
                className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
                Clear
            </button>

            <button
                onClick={onInsertSample}
                className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
                Sample Email
            </button>
        </div>
    );
};

export default Controls;