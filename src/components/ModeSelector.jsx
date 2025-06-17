const ModeSelector = ({ value, onChange }) => {
  const MODES = [
    { label: "Improve", value: "improve" },
    { label: "Shorten", value: "shorten" },
    { label: "Expand", value: "expand" },
    { label: "Make formal", value: "formal" },
    { label: "Make informal", value: "informal" },
    { label: "Translate", value: "translate" }
  ];

  return (
    <>
      {MODES.map((mode) => {
        const isActive = value === mode.value;

        return (
          <button
            key={mode.value}
            onClick={() => onChange(mode.value)}
            className={`px-3 py-1 text-sm rounded-md font-medium transition-all duration-150 backdrop-blur-sm border-2
	            ${isActive
                ? "bg-zinc-800 text-white border-zinc-800 shadow-inner"
                : "bg-gray-200/80 text-gray-700 border-transparent hover:bg-zinc-100 hover:shadow-sm"}`}
          >
            {mode.label}
          </button>
        );
      })}
    </>
  );
};

export default ModeSelector;