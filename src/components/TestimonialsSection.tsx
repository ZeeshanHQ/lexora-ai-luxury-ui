import { Star } from "lucide-react";
import { LuxuryCard } from "@/components/ui/luxury-card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "LexoraAI transformed our document processing workflow. The accuracy and speed of their models is unmatched.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering, LegalFlow",
      content: "The API integration was seamless, and the support team is exceptional. Best AI platform we've used.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Product Manager, InnovateAI",
      content: "Incredible reliability and performance. LexoraAI has become an essential part of our tech stack.",
      rating: 5,
      avatar: "ET"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of enterprises who rely on LexoraAI for their mission-critical AI workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <LuxuryCard 
              key={testimonial.name}
              variant="premium" 
              className={`p-8 hover-lift animate-fade-in delay-${index * 200}`}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-gold-foreground font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </LuxuryCard>
          ))}
        </div>
      </div>
    </section>
  );
};