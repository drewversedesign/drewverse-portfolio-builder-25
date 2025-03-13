
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import { ProjectProps } from '../cards/ProjectCard';

interface ProjectOverviewProps {
  project: ProjectProps;
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="md:col-span-2"
    >
      <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          {project.description} This project showcases our expertise in creating
          engaging and functional websites that meet the specific needs of our clients.
          We worked closely with {project.clientName} to develop a solution that would
          enhance their online presence and provide a seamless experience for their users.
        </p>
        
        <p className="text-gray-300 leading-relaxed">
          The design approach focused on creating a visually appealing interface while
          ensuring optimal performance and usability. We implemented modern technologies
          to deliver a responsive and interactive website that works flawlessly across
          all devices.
        </p>
        
        {/* Project Services */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">Services Provided</h3>
          <div className="flex flex-wrap gap-2">
            {project.services?.map((service, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full bg-drew-purple/20 text-drew-purple text-sm flex items-center"
              >
                <CheckSquare size={14} className="mr-1" />
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectOverview;
