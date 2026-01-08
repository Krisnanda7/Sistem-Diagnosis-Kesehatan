import { FileText, CheckCircle, AlertCircle, Home } from "lucide-react";

interface ResultScreenProps {
  result: Array<{
    diagnosis: string;
    adjustedCertainty: number;
    description: string;
    recommendations: string[];
  }>;
  onReset: () => void;
}

export default function ResultScreen({ result, onReset }: ResultScreenProps) {
  const primaryResult = result[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-16 h-16" />
            </div>
            <h1 className="text-3xl font-bold text-center">Hasil Diagnosis</h1>
          </div>

          <div className="p-8">
            {/* Primary Diagnosis */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-indigo-900 mb-2">
                {primaryResult.diagnosis}
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm text-indigo-700 mb-1">
                    <span>Tingkat Keyakinan (Certainty Factor)</span>
                    <span className="font-bold">
                      {(primaryResult.adjustedCertainty * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-indigo-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                      style={{
                        width: `${primaryResult.adjustedCertainty * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{primaryResult.description}</p>
            </div>

            {/* Recommendations */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Rekomendasi Tindakan
              </h3>
              <div className="space-y-2">
                {primaryResult.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-blue-50 p-4 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternative Diagnoses */}
            {result.length > 1 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Kemungkinan Diagnosis Lainnya
                </h3>
                <div className="space-y-3">
                  {result.slice(1, 4).map((res, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-800">
                          {res.diagnosis}
                        </h4>
                        <span className="text-sm text-gray-600">
                          {(res.adjustedCertainty * 100).toFixed(1)}%
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{res.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-yellow-800 font-semibold mb-1">
                    Penting untuk Diingat:
                  </p>
                  <p className="text-sm text-yellow-700">
                    Hasil ini merupakan skrining awal. Sangat disarankan untuk
                    berkonsultasi dengan profesional kesehatan mental.
                  </p>
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={onReset}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Halaman Utama
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
