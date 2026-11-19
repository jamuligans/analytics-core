export function summarize(xs) {
  const n = xs.length, sum = xs.reduce((a,b)=>a+b,0);
  return { n, sum, mean: n ? sum/n : 0, max: Math.max(...xs), min: Math.min(...xs) };
}
