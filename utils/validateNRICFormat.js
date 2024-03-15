export function validateNRICFormat(text) {
  // Regular expression to match the format
  const regex = /^[a-zA-Z\d][a-zA-Z\d]{1,}\d{3}[a-zA-Z]$/;

  // Check if the text matches the format
  return regex.test(text);
}
