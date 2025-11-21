import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";

interface StressCardProps {
  id: string;
  title: string;
  questions: string[];
  recommendation: string;
  duration?: string;
}

export function StressCard({ id, title, questions, recommendation, duration = "3-5 min" }: StressCardProps) {
  return (
    <Card className="h-full flex flex-col border-border shadow-sm hover:shadow-lg transition-all duration-300 group bg-card relative overflow-hidden hover:bg-bg-card-hover">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-colors" />
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="font-mono text-xs tracking-wider text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors bg-white/5">
            {id}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground font-sans">
            <Clock className="w-3 h-3 mr-1" />
            {duration}
          </div>
        </div>
        <CardTitle className="text-lg font-heading leading-snug group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-4">
        <div className="space-y-3">
          {questions.map((q, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/5 border border-transparent group-hover:border-primary/10 transition-colors">
              <p className="text-sm font-medium text-foreground/80 font-sans">{q}</p>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="w-full pt-4 border-t border-border/50">
          <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide flex items-center font-heading">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Micro-Action
          </p>
          <p className="text-sm text-muted-foreground font-sans">{recommendation}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
