const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <img
        src="src\assets\derek.jpg"
        alt="John Derek Anas"
        className="w-48 h-48 rounded-full mb-4"
      />
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
        Hi, I'm John Derek Anas
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Full Stack Developer | Designer | Creator
      </p>
      <div className="space-x-4 mb-8">
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
      <div className="text-left max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Profile</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          With 9 years in Full Stack Development and 6 years of freelancing, I specialize in creating innovative, scalable digital solutions. I’m a detail-oriented, pixel-perfect developer who thrives in fast-paced, deadline-driven environments. Beyond coding, I excel at collaborating with teams to deliver high-quality results while aligning with business goals. My proactive approach ensures efficient workflows, fostering strong communication and achieving shared objectives. I’m passionate about crafting future-focused digital experiences and mentoring teams to exceed expectations.
        </p>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Experience</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          SPH Media, Singapore 2019 - PRESENT<br />
          Software Engineer
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Teckwah Industrial Pte Ltd, Singapore 2017 - 2019<br />
          Campaign Manager / Developer
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Flava Design LLP, Singapore 2014 - 2017<br />
          Full Stack Developer
        </p>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Certifications</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          AWS Cloud Practitioner - SZXJL07DPEBQQ0GQ<br />
          ITIL V4 - GR671591750JA
        </p>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Skills</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          I provide advanced digital solutions across diverse domains. My expertise includes:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300 mb-4">
          <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6 mr-2" />
            React, TypeScript, JavaScript, HTML, CSS
          </li>
          <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6 mr-2" />
            Node.js, Express.js, Next.js
          </li>
          <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6 mr-2" />
            Python, Django, Flask
          </li>
          <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-6 h-6 mr-2" />
            PHP, Laravel, CodeIgniter
          </li>
          <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-6 h-6 mr-2" />
            Angular, Vue.js
          </li>
          <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" className="w-6 h-6 mr-2" />
            WordPress, Drupal, Prestashop
          </li>
          <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6 mr-2" />
            MySQL, PostgreSQL, MongoDB
          </li>
          <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6 mr-2" />
            Git, Docker, Kubernetes
          </li>
          <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="CI/CD" className="w-6 h-6 mr-2" />
            CI/CD, Jenkins, GitHub Actions
          </li>
            <li className="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Cloud" className="w-6 h-6 mr-2" />
            AWS, Azure, Google Cloud
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;