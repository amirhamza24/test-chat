const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-[#181C22] p-12">
      <div className="max-w-md text-center mt-10">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 w-72 h-72 gap-3 mb-8">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-2xl bg-blue-400/20 ${
                  i % 2 === 0 ? "animate-pulse" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-200">{title}</h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
