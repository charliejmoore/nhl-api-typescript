import { Catches, Shoots, HockeyPositionCode, LocalizedString } from './shared';

export interface Player {
  /** Birth city (localized). */
  birthCity: LocalizedString;
  /** Birth country (ISO code, e.g., "CAN"). */
  birthCountry: string;
  /** A date string of the format "1993-09-14" */
  birthDate: string;
  /** Birth state/province (localized). */
  birthStateProvince: LocalizedString;
  /** Url. */
  headshot: string;
  /** The player's height (in centimeters). */
  heightInCentimeters: number;
  /** The player's height (inches). */
  heightInInches: number;
  /** Unique identifier. */
  id: number;
  /** Player's last name (localized). */
  lastName: LocalizedString;
  /** Player's first name (localized). */
  firstName: LocalizedString;
  /** The position this player plays. */
  positionCode: HockeyPositionCode;
  /** Shooting/catching hand ("L" or "R"). */
  shootsCatches: Shoots | Catches;
  /** Player's sweater (jersey) number. */
  sweaterNumber: number;
  /** Weight (in kilograms). */
  weightInKilograms: number;
  /** Weight (in pounds). */
  weightInPounds: number;
}
