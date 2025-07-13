export interface Player {
  birthCity: {
    default: string;
  };
  birthCountry: string;
  /** A date string of the format "1993-09-14" */
  birthDate: string;
  birthStateProvince: {
    default: string;
  };
  /** Url. */
  headshot: string;
  heightInCentimeters: number;
  heightInInches: number;
  id: number;
  lastName: {
    default: string;
  };
  positionCode: PositionCode;
  shootsCatches: Shoots | Catches;
  sweaterNumber: number;
  weightInKilograms: number;
  weightInPounds: number;
}

export type PositionCode =
  /** Left wing. */
  | 'L'
  /** Right wing. */
  | 'R'
  /** Center. */
  | 'C'
  /** Defense. */
  | 'D'
  /** Goalie. */
  | 'G';

export type Shoots =
  /** Left. */
  | 'L'
  /** Right. */
  | 'R';

export type Catches =
  /** Left. */
  | 'L'
  /** Right. */
  | 'R';
