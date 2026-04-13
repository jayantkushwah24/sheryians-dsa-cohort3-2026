function calculateCircleProperties(r) {
  let circumference = (2 * Math.PI * r).toFixed(2);
  let area = (Math.PI * r * r).toFixed(2);
  return [circumference, area];
}
