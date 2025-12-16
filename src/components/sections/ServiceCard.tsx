import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    return (
        <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-slate-100 h-full flex flex-col">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 leading-relaxed flex-grow">
                {description}
            </p>
        </div>
    );
}
