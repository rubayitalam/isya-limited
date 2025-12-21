export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'web' | 'mobile' | 'software';
    image: string;
    techStack: string[];
    year: string;
    client?: string;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'A modern online store with seamless payment integration, inventory management, and real-time analytics dashboard.',
        category: 'web',
        image: '/images/projects/ecommerce.png',
        techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
        year: '2024',
        client: 'RetailPro Ltd'
    },
    {
        id: '2',
        title: 'Fitness Tracking App',
        description: 'Mobile application for workout tracking, nutrition planning, and progress monitoring with AI-powered recommendations.',
        category: 'mobile',
        image: '/images/projects/fitness.png',
        techStack: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
        year: '2024',
        client: 'FitLife'
    },
    {
        id: '3',
        title: 'CRM Dashboard',
        description: 'Comprehensive customer relationship management system with analytics, automation, and team collaboration features.',
        category: 'software',
        image: 'gradient-blue',
        techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        year: '2023',
        client: 'SalesPro Inc'
    },
    {
        id: '4',
        title: 'Restaurant Booking System',
        description: 'Table reservation platform with real-time availability, menu management, and customer review integration.',
        category: 'web',
        image: 'gradient-orange',
        techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
        year: '2024',
        client: 'Gourmet Dining'
    },
    {
        id: '5',
        title: 'Real Estate Portal',
        description: 'Property listing platform with advanced search filters, virtual tours, and mortgage calculator integration.',
        category: 'web',
        image: 'gradient-green',
        techStack: ['Next.js', 'Mapbox', 'Supabase', 'Tailwind CSS'],
        year: '2023',
        client: 'PropertyHub'
    },
    {
        id: '6',
        title: 'Healthcare Management System',
        description: 'Patient records management, appointment scheduling, and telemedicine platform for modern healthcare providers.',
        category: 'software',
        image: 'gradient-purple',
        techStack: ['React', 'Express', 'MySQL', 'WebRTC'],
        year: '2024',
        client: 'MediCare Solutions'
    },
];
