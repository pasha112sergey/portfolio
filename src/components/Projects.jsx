import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard"; // adjust the path based on where your file is located
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            id={project.id}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <ThreeDCard rotateDivisor={20} hoverScale={1.1}>
                {project.mediaType === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-64 h-64 mb-6 object-cover rounded-lg shadow-lg"
                    width="100%"
                    height="auto"
                  >
                    <source src={project.mediaSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={project.mediaSrc}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mb-6 rounded-lg w-64 h-64 object-fill"
                  />
                )}
              </ThreeDCard>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a
                href={project.link}
                className="hover:text-blue-500 transition duration-300"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
              </a>
              {/* <p className="my-2 maxw-xl py-6" >{project.description}</p> */}
              <p
                className="mb-4 text-neutral-400"
                style={{ whiteSpace: "pre-line" }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
