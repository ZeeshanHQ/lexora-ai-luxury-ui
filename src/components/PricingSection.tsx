import { Check, Crown, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { LuxuryCard, LuxuryCardContent, LuxuryCardHeader, LuxuryCardTitle } from "@/components/ui/luxury-card";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$29",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "1,000 API calls/month",
        "Whisper STT access",
        "Basic support",
        "Standard documentation",
        "Community access"
      ],
      variant: "glass" as const,
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      icon: Crown,
      price: "$99",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "10,000 API calls/month",
        "All AI models access",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "99.9% SLA guarantee"
      ],
      variant: "premium" as const,
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      icon: Users,
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited API calls",
        "Custom model training",
        "Dedicated support team",
        "On-premise deployment",
        "White-label solutions",
        "Custom SLA agreements"
      ],
      variant: "gradient" as const,
      buttonVariant: "gold" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Choose Your <span className="text-gradient">Premium</span> Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock the power of AI with plans designed for every scale. 
            From startups to enterprises, we have the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div key={plan.name} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-gold text-gold-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <LuxuryCard 
                  variant={plan.variant}
                  className={`h-full transition-all duration-500 hover-lift ${
                    plan.popular ? 'scale-105 shadow-luxury' : ''
                  } animate-fade-in delay-${index * 200}`}
                >
                  <LuxuryCardHeader className="text-center pb-8">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        plan.variant === 'premium' || plan.variant === 'gradient' 
                          ? 'bg-white/20' 
                          : 'bg-gradient-luxury'
                      }`}>
                        <Icon className={`w-8 h-8 ${
                          plan.variant === 'premium' || plan.variant === 'gradient' 
                            ? 'text-white' 
                            : 'text-white'
                        }`} />
                      </div>
                    </div>
                    
                    <LuxuryCardTitle className="text-2xl mb-2">{plan.name}</LuxuryCardTitle>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    
                    <p className={`text-sm ${
                      plan.variant === 'premium' || plan.variant === 'gradient' 
                        ? 'text-white/80' 
                        : 'text-muted-foreground'
                    }`}>
                      {plan.description}
                    </p>
                  </LuxuryCardHeader>

                  <LuxuryCardContent className="space-y-4">
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.variant === 'premium' || plan.variant === 'gradient' 
                              ? 'text-white' 
                              : 'text-gold'
                          }`} />
                          <span className={`text-sm ${
                            plan.variant === 'premium' || plan.variant === 'gradient' 
                              ? 'text-white/90' 
                              : 'text-foreground'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link to="/signup" className="block">
                      <LuxuryButton 
                        variant={plan.buttonVariant} 
                        className="w-full"
                        size="lg"
                      >
                        {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      </LuxuryButton>
                    </Link>
                  </LuxuryCardContent>
                </LuxuryCard>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};