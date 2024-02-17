export const copyToClipboard = (text) => {
  try {
    navigator.clipboard.writeText(text);
    console.log(`Copied to clipboard: ${text}`);
  } catch (err) {
    console.error("Error copying to clipboard:", err);
  }
};
