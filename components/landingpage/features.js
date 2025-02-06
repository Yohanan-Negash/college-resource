import React from 'react';
import {
  Linkedin,
  Calendar,
  Code,
  Users,
  GraduationCap,
  FileText,
} from 'lucide-react';
import BorderBeam from '../ui/borderbeam';

const features = [
  {
    title: 'LinkedIn Made Easy',
    description:
      "We'll guide you step by step to create a standout LinkedIn profile and set meaningful connections.",
    icon: <Linkedin className='w-8 h-8 text-purple-400' />,
  },
  {
    title: 'Pre-Internship Events',
    description:
      'Gain insider access to exclusive first- and second-year programs hosted by Fortune 500 companies.',
    icon: <Calendar className='w-8 h-8 text-purple-400' />,
  },
  {
    title: 'Hackathons & Competitions',
    description:
      'Access curated resources to build, collaborate, and showcase your technical skills, all while growing your professional network.',
    icon: <Code className='w-8 h-8 text-purple-400' />,
  },
  {
    title: 'Recruitment Summits',
    description:
      'Attend gatherings designed to connect you with hiring managers and industry insiders.',
    icon: <Users className='w-8 h-8 text-purple-400' />,
  },
  {
    title: 'Skill-Building Bootcamps',
    description:
      'Level up with free or company-sponsored programs that sharpen your skills and prep you for success.',
    icon: <GraduationCap className='w-8 h-8 text-purple-400' />,
  },
  {
    title: 'Application & Networking Tools',
    description:
      'Get resume templates, LinkedIn optimization tips, and direct insights on building a professional presence.',
    icon: <FileText className='w-8 h-8 text-purple-400' />,
  },
];

const Features = ({ className }) => {

};

export default Features;
