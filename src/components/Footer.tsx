const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} John Derek Anas. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
            Built with React + TypeScript + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;