export function combineCertaintyFactors(cf1: number, cf2: number): number {
  if (cf1 === -1 || cf2 === -1) return -1;
  return cf1 + cf2 * (1 - cf1);
}

export function getCertaintyFromAnswer(
  answer: string,
  baseCertainty: number = 0.8
): number {
  if (answer === "ya") {
    return baseCertainty;
  } else if (answer === "tidak") {
    return -baseCertainty;
  }
  return 0;
}

export function calculateWeightedCertainty(
  certainties: number[],
  weights: number[]
): number {
  if (certainties.length !== weights.length || certainties.length === 0) {
    return 0;
  }

  let weightedSum = 0;
  let totalWeight = 0;

  for (let i = 0; i < certainties.length; i++) {
    weightedSum += certainties[i] * weights[i];
    totalWeight += weights[i];
  }

  return totalWeight > 0 ? weightedSum / totalWeight : 0;
}

export function normalizeCertaintyFactor(cf: number): number {
  if (cf > 1) return 1;
  if (cf < -1) return -1;
  return cf;
}

export function calculateFinalCertainty(
  matchedRules: Array<{ adjustedCertainty: number; diagnosis?: string }>
): { diagnosis: string; certainty: number } | null {
  if (matchedRules.length === 0) {
    return null;
  }

  const bestMatch = matchedRules.reduce((prev, current) =>
    prev.adjustedCertainty > current.adjustedCertainty ? prev : current
  );

  return {
    diagnosis: bestMatch.diagnosis || "Unknown",
    certainty: normalizeCertaintyFactor(bestMatch.adjustedCertainty),
  };
}
