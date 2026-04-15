import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { TelegramCTA } from "@/components/telegram-cta";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RefreshCcw } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function StressTest() {
  const { t } = useTranslation();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const questions = [
    t('stress_test.question1'),
    t('stress_test.question2'),
    t('stress_test.question3'),
    t('stress_test.question4'),
    t('stress_test.question5'),
    t('stress_test.question6')
  ];

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3; // 0-3 scale
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getResult = () => {
    if (percentage < 30) return { title: t('stress_test.result_low_title'), desc: t('stress_test.result_low_desc'), color: "text-green-500" };
    if (percentage < 60) return { title: t('stress_test.result_moderate_title'), desc: t('stress_test.result_moderate_desc'), color: "text-yellow-500" };
    return { title: t('stress_test.result_high_title'), desc: t('stress_test.result_high_desc'), color: "text-red-500" };
  };

  const reset = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setScores([]);
    setFinished(false);
  };

  return (
    <Layout>
      <SEO 
        title={t('stress_test.seo_title')} 
        description={t('stress_test.seo_description')}
        canonical="/stress-test"
      />
      
      <div className="container mx-auto px-4 sm:px-8 py-20 max-w-2xl">
        {!started ? (
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">{t('stress_test.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('stress_test.subtitle')}
            </p>
            <Button size="lg" onClick={() => setStarted(true)} className="text-lg px-12 h-14 rounded-full shadow-xl shadow-primary/20">
              {t('stress_test.start_test')}
            </Button>
          </div>
        ) : !finished ? (
          <div className="space-y-8 animate-in fade-in duration-500">
             <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
                <span>{t('stress_test.question_progress', { current: currentQuestion + 1, total: questions.length })}</span>
                <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
             </div>
             <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
             
             <Card className="border-0 shadow-none bg-transparent">
               <CardContent className="p-0 py-8">
                 <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center leading-snug">
                   {questions[currentQuestion]}
                 </h2>
                 <div className="grid grid-cols-1 gap-4">
                   {[
                     { label: t('stress_test.never'), score: 0 },
                     { label: t('stress_test.sometimes'), score: 1 },
                     { label: t('stress_test.often'), score: 2 },
                     { label: t('stress_test.always'), score: 3 }
                   ].map((option) => (
                     <Button 
                       key={option.label} 
                       variant="outline" 
                       className="h-16 text-lg justify-start px-6 hover:bg-primary hover:text-white hover:border-primary transition-all"
                       onClick={() => handleAnswer(option.score)}
                     >
                       {option.label}
                     </Button>
                   ))}
                 </div>
               </CardContent>
             </Card>
          </div>
        ) : (
          <div className="text-center space-y-8 animate-in zoom-in-95 duration-500">
            <h2 className="text-2xl font-bold text-muted-foreground">{t('stress_test.result_title')}</h2>
            <div className="py-8">
               <div className={`text-5xl md:text-6xl font-black mb-4 ${getResult().color}`}>
                 {getResult().title}
               </div>
               <p className="text-xl text-foreground max-w-lg mx-auto">{getResult().desc}</p>
            </div>
            
            <div className="bg-muted/50 p-8 rounded-2xl border border-border/50">
              <h3 className="font-bold mb-4">{t('stress_test.recommended_action_title')}</h3>
              <p className="mb-6">{t('stress_test.recommended_action_desc')}</p>
              <TelegramCTA size="lg" className="w-full md:w-auto">{t('stress_test.recommended_action_cta')}</TelegramCTA>
            </div>

            <Button variant="ghost" onClick={reset} className="mt-8">
              <RefreshCcw className="w-4 h-4 mr-2" /> {t('stress_test.retake_test')}
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
