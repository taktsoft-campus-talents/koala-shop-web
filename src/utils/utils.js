export function formatPrice(cents) {
  const euros = (cents / 100).toFixed(2);
  return `${euros} €`;
}
