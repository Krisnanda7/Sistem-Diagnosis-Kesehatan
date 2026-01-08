/**
 * Comprehensive System Accuracy Testing Report
 * Mental Health Diagnosis Expert System - Forward Chaining with Certainty Factor
 */

// Knowledge Base Reference
const rules = [
  {
    id: 1,
    conditions: { q1: "ya", q2: "ya", q3: "ya", q4: "ya" },
    diagnosis: "Depresi Mayor",
    certainty: 0.95,
  },
  {
    id: 2,
    conditions: { q1: "ya", q2: "ya", q3: "tidak", q5: "ya" },
    diagnosis: "Depresi Ringan hingga Sedang",
    certainty: 0.8,
  },
  {
    id: 3,
    conditions: { q6: "ya", q7: "ya", q8: "ya", q9: "ya" },
    diagnosis: "Gangguan Kecemasan Umum (GAD)",
    certainty: 0.9,
  },
  {
    id: 4,
    conditions: { q6: "ya", q7: "ya", q10: "ya", q11: "ya" },
    diagnosis: "Gangguan Panik",
    certainty: 0.88,
  },
  {
    id: 5,
    conditions: { q12: "ya", q13: "ya", q14: "ya", q15: "ya" },
    diagnosis: "Gangguan Stres Pasca Trauma (PTSD)",
    certainty: 0.85,
  },
  {
    id: 6,
    conditions: { q16: "ya", q17: "ya", q18: "ya", q19: "ya" },
    diagnosis: "Gangguan Obsesif Kompulsif (OCD)",
    certainty: 0.87,
  },
  {
    id: 7,
    conditions: { q1: "ya", q6: "ya", q20: "ya" },
    diagnosis: "Gangguan Campuran Anxietas dan Depresi",
    certainty: 0.82,
  },
  {
    id: 8,
    conditions: { q3: "ya", q5: "ya", q4: "ya" },
    diagnosis: "Gangguan Tidur dengan Komponen Depresi",
    certainty: 0.75,
  },
  {
    id: 9,
    conditions: { q8: "ya", q9: "ya", q20: "ya" },
    diagnosis: "Gangguan Kecemasan Sosial",
    certainty: 0.83,
  },
  {
    id: 10,
    conditions: { q10: "ya", q11: "ya", q7: "tidak" },
    diagnosis: "Gangguan Panik Tanpa Agorafobia",
    certainty: 0.8,
  },
  {
    id: 11,
    conditions: { q16: "ya", q17: "ya", q18: "tidak" },
    diagnosis: "Gangguan Obsesif (Tanpa Kompulsi Dominan)",
    certainty: 0.78,
  },
  {
    id: 12,
    conditions: { q1: "tidak", q6: "tidak", q12: "tidak", q16: "tidak" },
    diagnosis: "Tidak Ada Indikasi Gangguan Mental Signifikan",
    certainty: 0.7,
  },
  {
    id: 13,
    conditions: { q12: "ya", q13: "ya", q14: "tidak" },
    diagnosis: "Gangguan Stres Akut",
    certainty: 0.77,
  },
  {
    id: 14,
    conditions: { q2: "ya", q5: "ya", q4: "tidak" },
    diagnosis: "Gangguan Mood Subsindromal",
    certainty: 0.72,
  },
  {
    id: 15,
    conditions: { q7: "ya", q8: "ya", q6: "tidak" },
    diagnosis: "Gangguan Kecemasan Terbatas",
    certainty: 0.74,
  },
  {
    id: 16,
    conditions: { q19: "ya", q18: "ya", q16: "tidak" },
    diagnosis: "Perilaku Kompulsif",
    certainty: 0.76,
  },
  {
    id: 17,
    conditions: { q15: "ya", q14: "ya", q12: "tidak" },
    diagnosis: "Gangguan Adaptasi",
    certainty: 0.79,
  },
  {
    id: 18,
    conditions: { q3: "ya", q4: "ya", q1: "tidak" },
    diagnosis: "Gangguan Tidur Primer",
    certainty: 0.73,
  },
  {
    id: 19,
    conditions: { q20: "ya", q6: "ya", q1: "tidak" },
    diagnosis: "Fobia Spesifik",
    certainty: 0.81,
  },
  {
    id: 20,
    conditions: { q11: "ya", q10: "ya", q9: "ya", q8: "ya" },
    diagnosis: "Gangguan Kecemasan Parah",
    certainty: 0.92,
  },
];

// Forward chaining algorithm
const forwardChaining = (userAnswers) => {
  const matchedRules = [];

  rules.forEach((rule) => {
    const conditions = Object.entries(rule.conditions);
    const totalConditions = conditions.length;
    let matchedConditions = 0;

    conditions.forEach(([questionId, expectedAnswer]) => {
      if (userAnswers[questionId] === expectedAnswer) {
        matchedConditions++;
      }
    });

    const matchPercentage = (matchedConditions / totalConditions) * 100;

    if (matchPercentage >= 75) {
      matchedRules.push({
        ...rule,
        matchPercentage,
        adjustedCertainty: (rule.certainty * matchPercentage) / 100,
      });
    }
  });

  matchedRules.sort((a, b) => b.adjustedCertainty - a.adjustedCertainty);

  return matchedRules.length > 0
    ? matchedRules
    : [
        {
          diagnosis: "Tidak Dapat Ditentukan",
          certainty: 0.5,
          adjustedCertainty: 0.5,
          description:
            "Berdasarkan jawaban yang diberikan, sistem tidak dapat menentukan diagnosis yang spesifik.",
          recommendations: ["Konsultasi dengan psikolog atau psikiater"],
        },
      ];
};

// Extended Test Cases - 20 scenarios
const testCases = [
  {
    id: 1,
    name: "Depresi Mayor (Full Match)",
    answers: { q1: "ya", q2: "ya", q3: "ya", q4: "ya" },
    expected: "Depresi Mayor",
  },
  {
    id: 2,
    name: "Depresi Ringan-Sedang",
    answers: { q1: "ya", q2: "ya", q3: "tidak", q5: "ya" },
    expected: "Depresi Ringan hingga Sedang",
  },
  {
    id: 3,
    name: "GAD - Kecemasan Umum",
    answers: { q6: "ya", q7: "ya", q8: "ya", q9: "ya" },
    expected: "Gangguan Kecemasan Umum (GAD)",
  },
  {
    id: 4,
    name: "Gangguan Panik",
    answers: { q6: "ya", q7: "ya", q10: "ya", q11: "ya" },
    expected: "Gangguan Panik",
  },
  {
    id: 5,
    name: "PTSD",
    answers: { q12: "ya", q13: "ya", q14: "ya", q15: "ya" },
    expected: "Gangguan Stres Pasca Trauma (PTSD)",
  },
  {
    id: 6,
    name: "OCD",
    answers: { q16: "ya", q17: "ya", q18: "ya", q19: "ya" },
    expected: "Gangguan Obsesif Kompulsif (OCD)",
  },
  {
    id: 7,
    name: "Mixed Anxiety-Depression",
    answers: { q1: "ya", q6: "ya", q20: "ya" },
    expected: "Gangguan Campuran Anxietas dan Depresi",
  },
  {
    id: 8,
    name: "Healthy (No Issues)",
    answers: { q1: "tidak", q6: "tidak", q12: "tidak", q16: "tidak" },
    expected: "Tidak Ada Indikasi Gangguan Mental Signifikan",
  },
  {
    id: 9,
    name: "Severe Anxiety",
    answers: { q8: "ya", q9: "ya", q10: "ya", q11: "ya" },
    expected: "Gangguan Kecemasan Parah",
  },
  {
    id: 10,
    name: "Social Anxiety",
    answers: { q8: "ya", q9: "ya", q20: "ya" },
    expected: "Gangguan Kecemasan Sosial",
  },
  {
    id: 11,
    name: "Sleep Disorder",
    answers: { q3: "ya", q5: "ya", q4: "ya" },
    expected: "Gangguan Tidur dengan Komponen Depresi",
  },
  {
    id: 12,
    name: "Panic w/o Agoraphobia",
    answers: { q10: "ya", q11: "ya", q7: "tidak" },
    expected: "Gangguan Panik Tanpa Agorafobia",
  },
  {
    id: 13,
    name: "Acute Stress",
    answers: { q12: "ya", q13: "ya", q14: "tidak" },
    expected: "Gangguan Stres Akut",
  },
  {
    id: 14,
    name: "Subthreshold Mood",
    answers: { q2: "ya", q5: "ya", q4: "tidak" },
    expected: "Gangguan Mood Subsindromal",
  },
  {
    id: 15,
    name: "Limited Anxiety",
    answers: { q7: "ya", q8: "ya", q6: "tidak" },
    expected: "Gangguan Kecemasan Terbatas",
  },
  {
    id: 16,
    name: "Compulsive Behavior",
    answers: { q19: "ya", q18: "ya", q16: "tidak" },
    expected: "Perilaku Kompulsif",
  },
  {
    id: 17,
    name: "Adaptation Disorder",
    answers: { q15: "ya", q14: "ya", q12: "tidak" },
    expected: "Gangguan Adaptasi",
  },
  {
    id: 18,
    name: "Primary Sleep Disorder",
    answers: { q3: "ya", q4: "ya", q1: "tidak" },
    expected: "Gangguan Tidur Primer",
  },
  {
    id: 19,
    name: "Specific Phobia",
    answers: { q20: "ya", q6: "ya", q1: "tidak" },
    expected: "Fobia Spesifik",
  },
  {
    id: 20,
    name: "Obsessive w/o Compulsion",
    answers: { q16: "ya", q17: "ya", q18: "tidak" },
    expected: "Gangguan Obsesif (Tanpa Kompulsi Dominan)",
  },
];

// Run comprehensive tests
console.log("=".repeat(100));
console.log("                    COMPREHENSIVE SYSTEM ACCURACY TEST REPORT");
console.log("                   Mental Health Diagnosis Expert System v1.0");
console.log("=".repeat(100));
console.log();

let passed = 0;
let failed = 0;
const results = [];

// Test all 20 scenarios
console.log(
  "┌─────┬────────────────────────────────────────┬────────────────────────────────────────┬────────┬────────┬────────┐"
);
// eslint-disable-next-line quotes
console.log(
  "│ ID  │ Test Case                              │ Expected Diagnosis                      │ Match% │   CF   │ Status │"
);
console.log(
  "├─────┼────────────────────────────────────────┼────────────────────────────────────────┼────────┼────────┼────────┤"
);

testCases.forEach((test) => {
  const result = forwardChaining(test.answers);
  const primary = result[0];
  const isMatch = primary.diagnosis === test.expected;

  if (isMatch) passed++;
  else failed++;

  results.push({
    ...test,
    actual: primary.diagnosis,
    match: primary.matchPercentage?.toFixed(0) || "N/A",
    cf: (primary.adjustedCertainty * 100).toFixed(1),
    status: isMatch ? "✅ PASS" : "❌ FAIL",
  });

  const testName = test.name.substring(0, 36).padEnd(36);
  const expected = test.expected.substring(0, 36).padEnd(36);
  const match = (primary.matchPercentage?.toFixed(0) || "N/A").padEnd(8);
  const cf = (primary.adjustedCertainty * 100).toFixed(1).padEnd(8);
  const status = (isMatch ? "✅ PASS" : "❌ FAIL").padEnd(8);

  console.log(
    `│ ${String(test.id).padEnd(
      3
    )} │ ${testName} │ ${expected} │ ${match} │ ${cf} │ ${status}│`
  );
});

console.log(
  "└─────┴────────────────────────────────────────┴────────────────────────────────────────┴────────┴────────┴────────┘"
);

// Summary
const accuracy = ((passed / 20) * 100).toFixed(1);
console.log();
console.log("=".repeat(100));
console.log("                                      SUMMARY STATISTICS");
console.log("=".repeat(100));
console.log(
  `│ Total Test Cases:    20                                                                      │`
);
console.log(
  `│ Tests Passed:        ${passed}                                                                                     │`
);
console.log(
  `│ Tests Failed:        ${failed}                                                                                     │`
);
console.log(
  `│ System Accuracy:     ${accuracy}%                                                                                   │`
);
console.log("=".repeat(100));

// Failed tests analysis
if (failed > 0) {
  console.log();
  console.log("FAILED TESTS ANALYSIS:");
  console.log("-".repeat(80));
  results
    .filter((r) => r.status.includes("FAIL"))
    .forEach((r) => {
      console.log(`ID ${r.id}: Expected "${r.expected}" but got "${r.actual}"`);
    });
}

// Rule coverage analysis
console.log();
console.log("RULE COVERAGE ANALYSIS:");
console.log("-".repeat(80));
const coveredRules = results
  .filter((r) => r.status.includes("PASS"))
  .map((r) => r.expected);
const uniqueCovered = [...new Set(coveredRules)];
console.log(`Rules Successfully Triggered: ${uniqueCovered.length} / 20`);
console.log(`Coverage: ${((uniqueCovered.length / 20) * 100).toFixed(1)}%`);

console.log();
console.log("=".repeat(100));
console.log("                                 ALGORITHM PERFORMANCE");
console.log("=".repeat(100));
console.log(`
FORWARD CHAINING ALGORITHM EVALUATION:
─────────────────────────────────────
✓ Strengths:
  • 75% threshold ensures symptom patterns are recognized
  • Certainty factor adjusts confidence based on match quality
  • Results sorted by adjusted certainty for best match priority
  • Fallback mechanism prevents errors on unrecognized patterns

⚠ Limitations Identified:
  • 3-condition rules require 100% match (3/3=75% threshold)
  • No hierarchical priority between overlapping conditions
  • Does not consider symptom duration/exacerbating factors
  • Limited specificity for comorbid conditions

📊 Performance Metrics:
  • Overall Accuracy: ${accuracy}%
  • Perfect Match Rate (100%): ${
    results.filter((r) => r.match === "100").length
  }/20
  • Average Certainty Factor: ${(
    results.reduce((sum, r) => sum + parseFloat(r.cf), 0) / 20
  ).toFixed(1)}%
`);
