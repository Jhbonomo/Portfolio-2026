import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://your-ecommerce-demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    imageUrl: '/projects/taskapp.jpg',
    githubUrl: 'https://github.com/yourusername/task-app',
    liveUrl: 'https://your-taskapp-demo.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with forecasts and maps',
    technologies: ['React', 'API Integration', 'Chart.js'],
    imageUrl: '/projects/weather.jpg',
    githubUrl: 'https://github.com/yourusername/weather-app'
  }
];
