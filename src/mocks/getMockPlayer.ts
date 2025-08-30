import { Player } from '../types';

/**
 * Create a mock Player object for testing.
 *
 * @param overrides - Optional partial values to override defaults.
 * @returns A Player object with defaults + overrides applied.
 *
 * @example
 * ```ts
 * const player = getMockPlayer(); // Default mock player
 *
 * const goalie = getMockPlayer({
 *   id: 2,
 *   positionCode: 'G',
 *   firstName: { default: 'Andrei' },
 *   lastName: { default: 'Vasilevskiy' },
 * });
 * ```
 */
export function getMockPlayer(overrides: Partial<Player> = {}): Player {
  const base: Player = {
    birthCity: { default: 'Toronto' },
    birthCountry: 'CAN',
    birthDate: '1995-07-21',
    birthStateProvince: { default: 'Ontario' },
    headshot: 'https://example.com/headshot.jpg',
    heightInCentimeters: 185,
    heightInInches: 73,
    id: 1,
    lastName: { default: 'Doe' },
    firstName: { default: 'John' },
    positionCode: 'C',
    shootsCatches: 'L',
    sweaterNumber: 97,
    weightInKilograms: 88,
    weightInPounds: 194,
  };

  return { ...base, ...overrides };
}
