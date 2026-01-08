import { CheckCircle, AlertCircle, ArrowLeft, Home } from "lucide-react";

interface DiagnosisScreenProps {
  question: {
    id: string;
    text: string;
    category: string;
  };
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (questionId: string, answer: string) => void;
  onPrevious: () => void;
  onHome: () => void;
}

export default function DiagnosisScreen({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
  onPrevious,
  onHome,
}: DiagnosisScreenProps) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with Progress */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Diagnosis Kesehatan Mental</h2>
              <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                {currentQuestion + 1} / {totalQuestions}
              </span>
            </div>
            <div className="w-full bg-blue-400 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            <div className="mb-6">
              <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {question.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {question.text}
              </h3>
              <p className="text-gray-600 text-sm">
                Jawab sesuai kondisi Anda dalam beberapa minggu terakhir
              </p>
            </div>

            {/* Answer Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => onAnswer(question.id, "ya")}
                className="w-full bg-green-50 hover:bg-green-100 border-2 border-green-200 hover:border-green-400 text-green-800 py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 text-left flex items-center"
              >
                <CheckCircle className="w-6 h-6 mr-3" />
                Ya
              </button>
              <button
                onClick={() => onAnswer(question.id, "tidak")}
                className="w-full bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-400 text-red-800 py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 text-left flex items-center"
              >
                <AlertCircle className="w-6 h-6 mr-3" />
                Tidak
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              {currentQuestion > 0 && (
                <button
                  onClick={onPrevious}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-all flex items-center justify-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Kembali
                </button>
              )}
              <button
                onClick={onHome}
                className="flex-1 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-xl font-semibold transition-all flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
