import he from "he";

/**
 * Decode the html char code into normal readable format
 * @param str - string in which html char code is present
 * @returns the decoded string
 */
export const decodeHtmlCharCodes = (str: string) => he.decode(str);
