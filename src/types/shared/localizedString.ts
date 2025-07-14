/** Generic map for language-localized strings (e.g., default, fr). Note: other language codes may be supported as well https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes.*/
export interface LocalizedString {
  /** English/default value. */
  default: string;
  /** French value, if present. */
  fr?: string;
  /** Czech value, if present. */
  cs?: string;
  /** Finnish value, if present. */
  fi?: string;
  /** Slovak value, if present. */
  sk?: string;
  /** Swedish value, if present. */
  sv?: string;
}
