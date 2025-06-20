const Loader = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
      <p className="text-sm text-gray-600">Generating...</p>
    </div>
  );
}

export default Loader;