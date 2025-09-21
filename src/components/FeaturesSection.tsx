import { Brain, Code, Shield, Zap, Users, Globe } from "lucide-react";
import { LuxuryCard } from "@/components/ui/luxury-card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Access state-of-the-art models including Whisper STT for speech recognition and specialized legal document summarization."
    },
    {
      icon: Code,
      title: "Developer-First API",
      description: "RESTful APIs with comprehensive documentation, SDKs, and webhook support for seamless integration."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant infrastructure with end-to-end encryption and advanced access controls."
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Sub-second response times with global CDN distribution and optimized model inference."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user workspaces with role-based permissions and centralized billing management."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "99.9% uptime SLA with worldwide infrastructure and 24/7 monitoring and support."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Why Choose <span className="text-gradient">LexoraAI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for enterprises who demand the highest standards of performance, 
            security, and reliability in their AI infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <LuxuryCard 
                key={feature.title}
                variant="glass" 
                className={`p-8 text-center hover-lift animate-fade-in delay-${index * 100}`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-luxury flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </LuxuryCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};