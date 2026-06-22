export function humanizeEnumValue(value: string) {
  return value.replace(/_/g, " ");
}

export function formatCurrency(value: number | string, locale = "en-IN") {
  const numeric = typeof value === "string" ? Number(value) : value;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(numeric);
}
