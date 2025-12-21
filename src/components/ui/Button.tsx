import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-200',
    {
        variants: {
            variant: {
                primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/5',
                secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
                accent: 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-600/20',
                outline: 'border-2 border-slate-200 bg-transparent hover:border-slate-900 hover:text-slate-900',
                ghost: 'hover:bg-slate-50 text-slate-600 hover:text-slate-900',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                sm: 'h-9 px-4 text-xs',
                md: 'h-11 px-6',
                lg: 'h-14 px-10 text-lg',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading, children, disabled, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </Comp>
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
