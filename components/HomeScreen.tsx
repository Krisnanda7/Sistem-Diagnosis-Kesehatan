import { Brain, ArrowRight, AlertCircle } from "lucide-react";

interface HomeScreenProps {
  onStart: () => void;
}

export default function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-16 h-16" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-2">
              Sistem Diagnosis Kesehatan Mental
            </h1>
            <p className="text-center text-blue-100">
              Expert System dengan Forward Chaining
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Info Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Tentang Sistem Ini
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                Sistem ini menggunakan metode Forward Chaining dengan 20 rules
                untuk membantu mendeteksi kemungkinan gangguan kesehatan mental.
              </p>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800 font-semibold mb-1">
                      Disclaimer Penting:
                    </p>
                    <p className="text-sm text-yellow-700">
                      Sistem ini BUKAN pengganti diagnosis profesional, dimana
                      sistem ini adalah sistem yang dapat membantu
                      mengidentifikasi potensi gangguan kesehatan mental
                      berdasarkan jawaban Anda. Untuk diagnosis yang akurat dan
                      penanganan yang tepat, silakan langsung konsultasikan
                      dengan psikolog atau psikiater.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Metode</h3>
                  <p className="text-sm text-blue-700">Forward Chaining</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 mb-2">Rules</h3>
                  <p className="text-sm text-indigo-700">20 aturan diagnosis</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">
                    Pertanyaan
                  </h3>
                  <p className="text-sm text-purple-700">
                    20 pertanyaan terstruktur
                  </p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-900 mb-2">
                    Certainty Factor
                  </h3>
                  <p className="text-sm text-pink-700">
                    Tingkat keyakinan hasil
                  </p>
                </div>
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={onStart}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Mulai Diagnosis
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
