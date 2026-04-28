"use client";

import { useState } from "react";
import Layout from "@/components/layout";

const questions = [
  {
    id: 1,
    question: "How often do you feel overwhelmed by stress?",
    options: [
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "Always", score: 4 },
    ],
  },
  {
    id: 2,
    question: "How well do you sleep at night?",
    options: [
      { text: "Very well", score: 1 },
      { text: "Pretty well", score: 2 },
      { text: "Not so well", score: 3 },
      { text: "Terrible", score: 4 },
    ],
  },
  {
    id: 3,
    question: "How often do you feel anxious or worried?",
    options: [
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Often", score: 3 },
      { text: "All the time", score: 4 },
    ],
  },
  {
    id: 4,
    question: "How would you rate your work-life balance?",
    options: [
      { text: "Excellent", score: 1 },
      { text: "Good", score: 2 },
      { text: "Poor", score: 3 },
      { text: "Very poor", score: 4 },
    ],
  },
  {
    id: 5,
    question: "Do you have time for relaxation or hobbies?",
    options: [
      { text: "Yes, regularly", score: 1 },
      { text: "Sometimes", score: 2 },
      { text: "Rarely", score: 3 },
      { text: "Never", score: 4 },
    ],
  },
];

function getResult(score: number) {
  if (score <= 7) {
    return {
      level: "Low Stress",
      color: "text-green-400",
      description:
        "You're managing stress well. Keep up with your healthy habits.",
      recommendation: "Maintain your current practices and continue prioritizing self-care.",
    };
  } else if (score <= 12) {
    return {
      level: "Moderate Stress",
      color: "text-yellow-400",
      description:
        "You're experiencing some stress that might be affecting your well-being.",
      recommendation:
        "Consider adding daily stress management techniques to your routine.",
    };
  } else if (score <= 16) {
    return {
      level: "High Stress",
      color: "text-orange-400",
      description:
        "Your stress levels are elevated and may be impacting your health.",
      recommendation:
        "Start using stress management techniques daily. Consider professional support.",
    };
  } else {
    return {
      level: "Very High Stress",
      color: "text-red-400",
      description:
        "You're experiencing significant stress that needs attention.",
      recommendation:
        "Prioritize stress management techniques and consider speaking with a professional.",
    };
  }
}

export default function StressTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const totalScore = scores.reduce((sum, s) => sum + s, 0);
  const result = getResult(totalScore);
  const q = questions[currentQuestion];

  return (
    <Layout>
      <div className="min-h-screen bg-[#111111] py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Stress Level Test
          </h1>
          <p className="text-[#A1A1A1] text-center mb-12">
            Answer 5 questions to assess your current stress levels.
          </p>

          {!finished ? (
            <div className="card-container">
              <div className="mb-6">
                <span className="text-sm text-[#666666]">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="h-1 bg-[#333333] rounded-full mt-2">
                  <div
                    className="h-1 bg-[#E1FF00] rounded-full transition-all"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-6">{q.question}</h2>

              <div className="space-y-3">
                {q.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-4 rounded-lg border border-[#333333] hover:border-[#E1FF00] hover:bg-[#252525] transition-colors"
                  >
                    <span className="text-white">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="card-container text-center">
              <div className="text-6xl mb-6">📊</div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Your Stress Level
              </h2>
              <p className={`text-4xl font-bold mb-4 ${result.color}`}>
                {result.level}
              </p>
              <p className="text-[#A1A1A1] mb-8">{result.description}</p>

              <div className="bg-[#1C1C1C] rounded-lg p-6 mb-8 text-left">
                <h3 className="font-bold text-white mb-2">Recommendation</h3>
                <p className="text-[#A1A1A1]">{result.recommendation}</p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://t.me/menhausen_app_bot/app"
                  className="btn-primary w-full"
                >
                  Get Your First Stress Card
                </a>
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setScores([]);
                    setFinished(false);
                  }}
                  className="btn-secondary w-full"
                >
                  Retake Test
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
