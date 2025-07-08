
import { Frown, Flame, CircleDot, Angry } from "lucide-react";

export const PainSection = () => {
  const pains = [
    {
      title: "Anxiety",
      description: "It's hard for me, but I can't talk about it",
      Icon: Frown
    },
    {
      title: "Burnout", 
      description: "I can't cope, but I don't want to look weak",
      Icon: Flame
    },
    {
      title: "Emptiness",
      description: "I have no strength, I don't know what's wrong with me",
      Icon: CircleDot
    },
    {
      title: "Anger",
      description: "I'm angry at everything, and it interferes with my home and work",
      Icon: Angry
    }
  ];

  return (
    <section className="section-padding py-20 md:py-28 bg-gradient-to-b from-card/30 to-transparent">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Are you holding up?{" "}
            <span className="text-gradient">Always?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pains.map((pain, index) => (
            <div key={index} className="card-pain text-center group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <pain.Icon className="w-12 h-12 mx-auto text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{pain.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                "{pain.description}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            This is not weakness. This is a signal.{" "}
            <span className="text-primary">This is a reason to press the button.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
