const ModeSelector = ({ value, onModeChange }) => {
    const MODES = [
        { label: "improve", value: "improve" },
        { label: "Shorten", value: "shorten" },
        { label: "Expand", value: "expand" },
        { label: "Make formal", value: "formal" },
        { label: "Make informal", value: "informal" },
        { label: "Translate", value: "translate" }
    ];


    return (
        <div className="flex flex-col gap-2">
            <label className="font-medium text-lg">Select mode: </label>
            <div className="flex flex-wrap gap-2">
                {MODES.map((mode) => {
                    const isActive = value === mode.value;

                    return (
                        <button
                            key={mode.value}
                            onClick={() => onModeChange(mode.value)}
                            className={`px-4 py-2 rounded-xl border transition
                                ${isActive
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
                        >
                            {mode.label}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default ModeSelector;