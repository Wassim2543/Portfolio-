import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl overflow-hidden border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-md top-4 right-4 bg-midnight hover:bg-gray-600"
        >
          <img src="/assets/close.svg" alt="Close" className="w-6 h-6" />
        </button>

        {/* Project image */}
        <img
          src={image}
          alt={title}
          className="object-cover w-full rounded-t-2xl"
        />

        <div className="p-5">
          {/* Title */}
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>

          {/* Description */}
          <p className="mb-3 text-neutral-400">{description}</p>

          {/* Sub description */}
          {subDescription.map((item, index) => (
            <p key={index} className="mb-2 text-sm text-neutral-400">
              • {item}
            </p>
          ))}

          {/* Footer */}
          <div className="flex items-center justify-between mt-6">
            {/* Tags */}
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="transition-transform rounded-lg size-10 hover:scale-110"
                />
              ))}
            </div>

            {/* Project link */}
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-white transition hover:text-blue-400"
              >
                View Project
                <img
                  src="/assets/arrow-up.svg"
                  alt="Open"
                  className="size-4"
                />
              </a>
            ) : (
              <span className="text-sm italic text-neutral-500">
                No public link
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
