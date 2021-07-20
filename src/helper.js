export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function calculateBrand(brand) {
  let increse;

  switch (brand) {
    case 'europeo':
      increse = 0.3;
      break;
    case 'americano':
      increse = 0.15;
      break;
    case 'asiatico':
      increse = 0.05;
      break;
    default:
      break;
  }

  return increse;
}

export function getPlan(plan) {
  return plan === 'basico' ? 0.2 : 0.5;
}

export function toUpperCaseFirtsLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
