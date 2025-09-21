import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import heroImage from "@/assets/hero-ai.jpg";

export const Hero = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process audio and documents in seconds with our optimized AI models"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance for your sensitive data"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track usage, performance, and insights with beautiful dashboards"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="LexoraAI Hero" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Hero content */}
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
              Premium AI Platform for{" "}
              <span className="text-gradient">Next-Gen Intelligence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
              Access cutting-edge AI models including Whisper STT and Legal Summarizer. 
              Built for enterprises that demand luxury, performance, and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-300">
              <Link to="/signup">
                <LuxuryButton variant="hero" size="xl" className="animate-glow">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </LuxuryButton>
              </Link>
              <Link to="/docs">
                <LuxuryButton variant="glass" size="xl">
                  View Documentation
                </LuxuryButton>
              </Link>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in delay-500">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <LuxuryCard 
                    key={feature.title} 
                    variant="glass" 
                    className={`p-6 text-center hover-lift animate-scale-in delay-${(index + 1) * 100}`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-luxury flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </LuxuryCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};