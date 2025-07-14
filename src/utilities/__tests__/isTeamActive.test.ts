import { describe, it, expect, vi } from 'vitest';
import { isTeamActive } from '../isTeamActive';

vi.mock('../currentTeams', () => ({
  currentTeams: ['BOS', 'TOR', 'DET'],
}));

describe('isTeamActive', () => {
  it('returns true for an active team', () => {
    expect(isTeamActive('BOS')).toBe(true);
  });

  it('returns false for an inactive team', () => {
    expect(isTeamActive('ATL')).toBe(false);
  });
});
