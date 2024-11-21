const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
        Hi, I'm Your Name
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Full Stack Developer | Designer | Creator
      </p>
      <div className="space-x-4">
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-colors"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Home;