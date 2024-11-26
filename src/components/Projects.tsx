import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "HarpersBazaar Singapore",
    description: "Real-time fashion news and updates from harpersbazaar running web 2.0",
    technologies: ["React", "TypeScript", "Node.js", "CUE", "Playwright"],
    imageUrl: "./src/assets/hbsbg.png",
    githubUrl: "https://github.com/sphtech/web2-mag/",
    liveUrl: "https://harpersbazaar.com.sg"
  },
  {
    title: "Home And Decor Singapore",
    description: "is an interactive, style-driven interior design website for new home owners, renovation professionals and furnishing enthusiasts",
    technologies: ["React", "Typescript", "Tailwind CSS", "CUE", "Playwright"],
    imageUrl: "./src/assets/hndsg.png",
    githubUrl: "https://github.com/sphtech/web2-mag/",
    liveUrl: "https://www.homeanddecor.com.sg/"
  },
  {
    title: "Peak Singapore",
    description: "is a business-lifestyle publication rooted in meaningfulness, curating stories that inspire leaders and visionaries to lead impactful lives",
    technologies: ["React", "TypeScript", "Node.js", "CUE" , "Playwright"],
    imageUrl: "./src/assets/peaksg.png",
    githubUrl: "https://github.com/sphtech/web2-mag/"
  }
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <FiGithub className="mr-2" />
                  GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;