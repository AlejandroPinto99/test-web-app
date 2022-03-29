/**
 * Format amount as Dollars
 * @param {number} number
 * @example formatDollars(1000); => "$1,000.00"
 * @returns {string} Formatted text as Dollars
 */
export function formatDollars(number: number) {
  const initialNum = Number(number ?? 0);
  const num = Math.abs(initialNum);
  return (
    `${String(initialNum).includes("-") ? "-" : ""}$` +
    num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}

/**
 * Format amount as Percentage
 * @param {number} number
 * @param {number} precision=2
 * @example formatPercentage(0.50); => "50.00%"
 * @example formatPercentage(0.50, 0); => "50%"
 * @returns {string} Formatted text as Percentage
 */
export function formatPercentage(number: number, precision: number = 2) {
  const num = number ?? 0;
  return `${(num * 100).toFixed(precision)}%`;
}

/**
 * Format number as quantity numbers string
 * @param {number} number
 * @example formatNumbers(1000); // "1,000"
 * @returns {string} Formatted text as number
 */
export function formatNumbers(number: number) {
  const num = number ?? 0;
  return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

/**
 * Format string as phone numbers string: +1 xxx xxx xxxx
 * @example
 * formatPhone("5485458947"); // +1 548 545 8947
 * @param {string} phone
 * @returns {string} Formatted text a phone number
 */
export function formatPhone(phone: string) {
  let USNumber = phone.match(/(\d{3})(\d{3})(\d{4})/);
  return USNumber ? `+1 ${USNumber[1]} ${USNumber[2]} ${USNumber[3]}` : phone;
}

export function formatCapitalizeFirstLetter(text?: string) {
  const textToFormat = text ?? "";
  return textToFormat.charAt(0).toUpperCase() + textToFormat.slice(1);
}

export function formatLowerCaseFirstLetter(text: string) {
  const textToFormat = text ?? "";
  return textToFormat.charAt(0).toLowerCase() + textToFormat.slice(1);
}

export function formatEachSeparateLetter(text: string) {
  const textToFormat = text ?? "";
  return textToFormat.match(/\b(\w)/g)?.join("") ?? "";
}

export function formatCentsToDollars(cents: number) {
  return (cents ?? 0) / 100;
}

export function dollarToCent(dollar: number) {
  return dollar * 100;
}

export function centToDollar(cent: number) {
  return cent / 100;
}

export function getLowerCase(value: string) {
  return value.toLowerCase().trim();
}

export function formatSnakeCaseToWords(text: string) {
  if (typeof text !== "string") return "";
  const textToFormat = text ?? "";
  return textToFormat
    .replace(/_/g, " ")
    .split(" ")
    .map(formatCapitalizeFirstLetter)
    .join(" ");
}

export function formatUrl(value: string) {
  const protocol = "https://";
  const url = String(value);
  return url.startsWith(protocol) ? value : `${protocol}${value}`;
}
