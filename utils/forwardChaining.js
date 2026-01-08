export const forwardChaining = (userAnswers, knowledgeBase) => {
  const matchedRules = [];

  knowledgeBase.rules.forEach((rule) => {
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
