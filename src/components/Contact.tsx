import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Get In Touch
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
          feel free to reach out!
        </p>
        <div className="flex flex-col space-y-4">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FiMail className="mr-3" />
            your.email@example.com
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FiLinkedin className="mr-3" />
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FiGithub className="mr-3" />
            GitHub
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FiTwitter className="mr-3" />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;