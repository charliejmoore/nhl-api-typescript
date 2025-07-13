/** Generic map for language-localized strings (e.g., default, fr). */
export interface LocalizedString {
  /** English/default value. */
  default: string;
  /** French value, if present. */
  fr?: string;
}
