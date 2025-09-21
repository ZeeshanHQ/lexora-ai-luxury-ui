import * as React from "react";
import { cn } from "@/lib/utils";

const LuxuryCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "glass" | "premium" | "gradient";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-card text-card-foreground shadow-soft border border-border",
    glass: "glass-card bg-gradient-glass text-foreground border border-glass-border backdrop-blur-xl",
    premium: "bg-gradient-primary text-primary-foreground shadow-luxury border border-gold/20",
    gradient: "bg-gradient-luxury text-white shadow-luxury border border-gold/30"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl transition-all duration-300 hover:shadow-luxury hover:-translate-y-1",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
LuxuryCard.displayName = "LuxuryCard";

const LuxuryCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
LuxuryCardHeader.displayName = "LuxuryCardHeader";

const LuxuryCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
LuxuryCardTitle.displayName = "LuxuryCardTitle";

const LuxuryCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
LuxuryCardDescription.displayName = "LuxuryCardDescription";

const LuxuryCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
LuxuryCardContent.displayName = "LuxuryCardContent";

const LuxuryCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
LuxuryCardFooter.displayName = "LuxuryCardFooter";

export {
  LuxuryCard,
  LuxuryCardHeader,
  LuxuryCardFooter,
  LuxuryCardTitle,
  LuxuryCardDescription,
  LuxuryCardContent,
};