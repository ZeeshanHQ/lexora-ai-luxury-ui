import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const luxuryButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:shadow-luxury hover:-translate-y-1",
        destructive: "bg-destructive text-destructive-foreground shadow-soft hover:shadow-luxury hover:-translate-y-1",
        outline: "border border-border bg-background shadow-soft hover:bg-accent hover:text-accent-foreground hover:shadow-luxury hover:-translate-y-1",
        secondary: "bg-secondary text-secondary-foreground shadow-soft hover:shadow-luxury hover:-translate-y-1",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium LexoraAI variants
        hero: "bg-gradient-luxury text-white shadow-luxury hover:shadow-gold hover:-translate-y-2 hover:scale-105 font-semibold",
        gold: "bg-gold text-gold-foreground shadow-gold hover:shadow-luxury hover:-translate-y-1 font-semibold",
        glass: "glass-card bg-gradient-glass text-foreground border border-glass-border hover:shadow-luxury hover:-translate-y-1",
        premium: "bg-gradient-primary text-primary-foreground shadow-luxury hover:shadow-gold hover:-translate-y-1 font-semibold border border-gold/20",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof luxuryButtonVariants> {
  asChild?: boolean;
}

const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(luxuryButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
LuxuryButton.displayName = "LuxuryButton";

export { LuxuryButton, luxuryButtonVariants };