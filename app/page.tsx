"use client";

import { useState } from "react";
import HomeScreen from "@/components/HomeScreen";
import DiagnosisScreen from "@/components/DiagnosisScreen";
import ResultScreen from "@/components/ResultScreen";
import { knowledgeBase } from "@/data/knowledgeBase";
import { questions } from "@/data/questions";
import { forwardChaining } from "@/utils/forwardChaining";

interface DiagnosisResult {
  diagnosis: string;
  adjustedCertainty: number;
  description: string;
  recommendations: string[];
  matchPercentage?: number;
  certainty?: number;
}

type Step = "home" | "diagnosis" | "result";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>("home");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<DiagnosisResult[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const diagnosis = forwardChaining(
        newAnswers,
        knowledgeBase
      ) as DiagnosisResult[];
      setResult(diagnosis);
      setCurrentStep("result");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetSystem = () => {
    setCurrentStep("home");
    setAnswers({});
    setResult(null);
    setCurrentQuestion(0);
  };

  const startDiagnosis = () => {
    setCurrentStep("diagnosis");
  };

  if (currentStep === "home") {
    return <HomeScreen onStart={startDiagnosis} />;
  }

  if (currentStep === "diagnosis") {
    return (
      <DiagnosisScreen
        question={questions[currentQuestion]}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        onPrevious={handlePrevious}
        onHome={resetSystem}
      />
    );
  }

  if (currentStep === "result" && result) {
    return <ResultScreen result={result} onReset={resetSystem} />;
  }
}
