const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        About Me
      </h2>
      <div className="prose dark:prose-invert">
        <p className="text-gray-700 dark:text-gray-200 mb-4">
        At Singapore Press Holdings (SPH Media), my role transcends mere development; it's about injecting vitality into magazine websites by harnessing React.js and optimizing server-side rendering. The journey since my tenure began has been marked by creating digital experiences that resonate with users, ensuring every interaction is as dynamic as it is intuitive.
      </p>
      <p className="text-gray-700 dark:text-gray-200 mb-4">
My approach is holistic, focusing on both aesthetics and functionality, to elevate the content delivery process. Collaborating closely with multidisciplinary teams, we've transformed digital landscapes, making them not only more engaging but also more efficient, thanks to my expertise in Web 2.0 design and performance optimization.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
          Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Frontend</h4>
            <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Backend</h4>
            <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Tools</h4>
            <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
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