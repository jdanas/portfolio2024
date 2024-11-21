const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        About Me
      </h2>
      <div className="prose dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Hello! I'm a passionate developer with expertise in modern web technologies.
          I love building beautiful, functional, and user-friendly applications.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
          Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-semibold">Frontend</h4>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-semibold">Backend</h4>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-semibold">Tools</h4>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>Docker</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;