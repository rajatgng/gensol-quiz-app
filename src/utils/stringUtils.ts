/**
 * Decode the html char code into normal readable format
 * @param str - string in which html char code is present
 * @returns the decoded string
 */
export const decodeHtmlCharCodes = (str: string) =>
  str.replace(/(&#(\d+);)/g, (_match, _capture, charCode) =>
    String.fromCharCode(charCode)
  );
