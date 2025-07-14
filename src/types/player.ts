import { Catches, Shoots, HockeyPositionCode, LocalizedString } from './shared';

export interface Player {
  birthCity: LocalizedString;
  birthCountry: string;
  /** A date string of the format "1993-09-14" */
  birthDate: string;
  birthStateProvince: LocalizedString;
  /** Url. */
  headshot: string;
  heightInCentimeters: number;
  heightInInches: number;
  id: number;
  lastName: LocalizedString;
  positionCode: HockeyPositionCode;
  shootsCatches: Shoots | Catches;
  sweaterNumber: number;
  weightInKilograms: number;
  weightInPounds: number;
}
