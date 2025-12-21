'use client';

import Image from 'next/image';
import { Project } from '@/data/projectsData';

interface ProjectCardProps {
    project: Project;
}

const gradientBackgrounds = {
    'gradient-blue': 'bg-gradient-to-br from-blue-400 to-blue-600',
    'gradient-orange': 'bg-gradient-to-br from-orange-400 to-orange-600',
    'gradient-green': 'bg-gradient-to-br from-green-400 to-green-600',
    'gradient-purple': 'bg-gradient-to-br from-purple-400 to-purple-600',
};

export function ProjectCard({ project }: ProjectCardProps) {
    const isGradient = project.image.startsWith('gradient-');
    const gradientClass = isGradient ? gradientBackgrounds[project.image as keyof typeof gradientBackgrounds] : '';

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-slate-100 hover:border-orange-500 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
            {/* Project Image or Gradient */}
            <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                {isGradient ? (
                    <div className={`w-full h-full ${gradientClass} flex flex-col items-center justify-center p-8 relative`}>
                        {/* Mockup UI Elements */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 right-4 h-12 bg-white rounded-lg"></div>
                            <div className="absolute top-20 left-4 right-4 bottom-4 bg-white rounded-lg"></div>
                        </div>

                        {/* Project Title as Watermark */}
                        <div className="text-white text-center z-10">
                            <div className="text-5xl font-black mb-2 drop-shadow-lg">
                                {project.title.split(' ')[0]}
                            </div>
                            <div className="text-xl font-bold opacity-80">
                                {project.category.toUpperCase()}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                            <div className="h-2 flex-1 bg-white opacity-20 rounded-full"></div>
                            <div className="h-2 flex-1 bg-white opacity-20 rounded-full"></div>
                            <div className="h-2 flex-1 bg-white opacity-20 rounded-full"></div>
                        </div>
                    </div>
                ) : (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                )}
            </div>

            {/* Project Info */}
            <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-600 uppercase tracking-wider">
                        {project.category}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Client */}
                {project.client && (
                    <p className="text-sm text-slate-500">
                        <span className="font-bold">Client:</span> {project.client}
                    </p>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
