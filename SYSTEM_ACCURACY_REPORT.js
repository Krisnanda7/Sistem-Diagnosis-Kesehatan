/**
 * System Accuracy Testing Report
 * Mental Health Diagnosis Expert System
 */

import { forwardChaining } from "./utils/forwardChaining.js";
import { knowledgeBase } from "./data/knowledgeBase.js";
import { questions } from "./data/questions.js";

// Test cases for each diagnosis scenario
const testCases = [
  {
    name: "Depresi Mayor (100% Match)",
    description: "All 4 depression questions answered 'ya'",
    answers: { q1: "ya", q2: "ya", q3: "ya", q4: "ya" },
    expectedDiagnosis: "Depresi Mayor",
    expectedMatch: 100,
  },
  {
    name: "Depresi Ringan-Sedang (100% Match)",
    description: "q1=ya, q2=ya, q3=tidak, q5=ya",
    answers: { q1: "ya", q2: "ya", q3: "tidak", q5: "ya" },
    expectedDiagnosis: "Depresi Ringan hingga Sedang",
    expectedMatch: 100,
  },
  {
    name: "GAD - Gangguan Kecemasan Umum",
    description: "All 4 anxiety questions answered 'ya'",
    answers: { q6: "ya", q7: "ya", q8: "ya", q9: "ya" },
    expectedDiagnosis: "Gangguan Kecemasan Umum (GAD)",
    expectedMatch: 100,
  },
  {
    name: "Gangguan Panik",
    description: "q6=ya, q7=ya, q10=ya, q11=ya",
    answers: { q6: "ya", q7: "ya", q10: "ya", q11: "ya" },
    expectedDiagnosis: "Gangguan Panik",
    expectedMatch: 100,
  },
  {
    name: "PTSD",
    description: "All 4 trauma questions answered 'ya'",
    answers: { q12: "ya", q13: "ya", q14: "ya", q15: "ya" },
    expectedDiagnosis: "Gangguan Stres Pasca Trauma (PTSD)",
    expectedMatch: 100,
  },
  {
    name: "OCD",
    description: "All 4 OCD questions answered 'ya'",
    answers: { q16: "ya", q17: "ya", q18: "ya", q19: "ya" },
    expectedDiagnosis: "Gangguan Obsesif Kompulsif (OCD)",
    expectedMatch: 100,
  },
  {
    name: "Mixed Anxiety & Depression",
    description: "q1=ya, q6=ya, q20=ya",
    answers: { q1: "ya", q6: "ya", q20: "ya" },
    expectedDiagnosis: "Gangguan Campuran Anxietas dan Depresi",
    expectedMatch: 100,
  },
  {
    name: "Healthy/No Issues",
    description: "No symptoms (all 'tidak' for main categories)",
    answers: { q1: "tidak", q6: "tidak", q12: "tidak", q16: "tidak" },
    expectedDiagnosis: "Tidak Ada Indikasi Gangguan Mental Signifikan",
    expectedMatch: 100,
  },
  {
    name: "Gangguan Kecemasan Parah",
    description: "q8=ya, q9=ya, q10=ya, q11=ya",
    answers: { q8: "ya", q9: "ya", q10: "ya", q11: "ya" },
    expectedDiagnosis: "Gangguan Kecemasan Parah",
    expectedMatch: 100,
  },
  {
    name: "Social Anxiety",
    description: "q8=ya, q9=ya, q20=ya",
    answers: { q8: "ya", q9: "ya", q20: "ya" },
    expectedDiagnosis: "Gangguan Kecemasan Sosial",
    expectedMatch: 100,
  },
  {
    name: "Partial Match - 3/4 Depression",
    description: "Only 3 depression questions answered 'ya' (75% match)",
    answers: { q1: "ya", q2: "ya", q3: "ya", q4: "tidak" },
    expectedDiagnosis: "Should match with adjusted certainty",
    expectedMatch: 75,
  },
  {
    name: "Multiple Diagnoses Possible",
    description: "Both depression and anxiety symptoms",
    answers: { q1: "ya", q2: "ya", q6: "ya", q7: "ya" },
    expectedDiagnosis: "May return multiple diagnoses",
    expectedMatch: "variable",
  },
];

// Run all tests
function runAccuracyTests() {
  console.log("=".repeat(80));
  console.log("MENTAL HEALTH DIAGNOSIS SYSTEM - ACCURACY TEST REPORT");
  console.log("=".repeat(80));
  console.log();

  const results = [];

  testCases.forEach((test, index) => {
    const result = forwardChaining(test.answers, knowledgeBase);
    const primaryResult = result[0];
    const isMatch = primaryResult.diagnosis === test.expectedDiagnosis;

    results.push({
      id: index + 1,
      testName: test.name,
      description: test.description,
      expectedDiagnosis: test.expectedDiagnosis,
      actualDiagnosis: primaryResult.diagnosis,
      matchPercentage: primaryResult.matchPercentage?.toFixed(1) || "N/A",
      adjustedCertainty:
        (primaryResult.adjustedCertainty * 100).toFixed(1) + "%",
      isCorrect: isMatch,
      ruleId: primaryResult.id || "N/A",
    });
  });

  return results;
}

// Generate table output
function generateTable(results) {
  console.log("TEST RESULTS TABLE");
  console.log("-".repeat(80));
  console.log(
    "ID".padEnd(4) +
      "Test Name".padEnd(35) +
      "Expected".padEnd(35) +
      "Actual".padEnd(30) +
      "Match%".padEnd(8) +
      "CF".padEnd(8) +
      "Status"
  );
  console.log("-".repeat(80));

  results.forEach((r) => {
    const status = r.isCorrect ? "✅ PASS" : "❌ FAIL";
    console.log(
      String(r.id).padEnd(4) +
        r.testName.substring(0, 33).padEnd(35) +
        r.expectedDiagnosis.substring(0, 33).padEnd(35) +
        r.actualDiagnosis.substring(0, 28).padEnd(30) +
        (r.matchPercentage + "%").padEnd(8) +
        r.adjustedCertainty.padEnd(8) +
        status
    );
  });

  console.log("-".repeat(80));
}

// Generate summary statistics
function generateSummary(results) {
  const passed = results.filter((r) => r.isCorrect).length;
  const total = results.length;
  const accuracy = ((passed / total) * 100).toFixed(1);

  console.log();
  console.log("=".repeat(80));
  console.log("SUMMARY STATISTICS");
  console.log("=".repeat(80));
  console.log(`Total Tests: ${total}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${total - passed}`);
  console.log(`Accuracy: ${accuracy}%`);
  console.log();

  // Analysis
  console.log("=".repeat(80));
  console.log("ALGORITHM ANALYSIS");
  console.log("=".repeat(80));
  console.log();
  console.log("STRENGTHS:");
  console.log("1. 75% threshold ensures at least partial symptom match");
  console.log("2. Multiple diagnoses can be identified when symptoms overlap");
  console.log(
    "3. Adjusted certainty provides nuanced results based on match quality"
  );
  console.log("4. Fallback for unidentifiable cases prevents errors");
  console.log();
  console.log("LIMITATIONS:");
  console.log(
    "1. Rules with 3 conditions need 100% match (3/3=75%, but 2/3=66.6% < 75%)"
  );
  console.log("2. Some symptom combinations may trigger multiple diagnoses");
  console.log("3. Does not consider symptom duration or severity explicitly");
  console.log("4. No weighting for more specific vs. general symptoms");
  console.log();
  console.log("RECOMMENDATIONS:");
  console.log("1. Consider adding symptom duration questions");
  console.log("2. Implement hierarchical rule priority");
  console.log("3. Add severity scoring for each symptom");
  console.log("4. Consider combining certain rules for better specificity");
}

// Run tests
const results = runAccuracyTests();
generateTable(results);
generateSummary(results);

// Export for use
export { results, runAccuracyTests };
