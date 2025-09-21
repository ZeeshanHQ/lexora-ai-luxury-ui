import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { LuxuryButton } from "@/components/ui/luxury-button";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-luxury opacity-20 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <Sparkles className="w-16 h-16 text-gold mx-auto mb-8" />
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Transform Your 
            <span className="text-gradient"> AI Workflow?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the next generation of enterprises leveraging premium AI technology. 
            Start with a 14-day free trial, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <LuxuryButton variant="hero" size="xl" className="animate-glow">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </LuxuryButton>
            </Link>
            <Link to="/contact">
              <LuxuryButton variant="glass" size="xl">
                Schedule Demo
              </LuxuryButton>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};