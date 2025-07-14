import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getPlayerGameLogBySeason } from '../getPlayerGameLogBySeason';
import * as fetchJsonModule from '../../../http/fetchJson';
import { DEFAULT_BASE_URL_V1 } from '../../../constants';
import type { GameType } from '../../../types/shared';

vi.mock('../../http/fetchJson');

describe('getPlayerGameLogBySeason', () => {
  const mockResponse = { playerId: 8478402, season: 20242025, gameLog: [] };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(fetchJsonModule, 'fetchJson').mockResolvedValue(
      mockResponse as any
    );
  });

  it('calls fetchJson with the correct URL using default baseUrl', async () => {
    const playerId = 8478402;
    const season = 20242025;
    const gameType: GameType = 2;
    await getPlayerGameLogBySeason({ playerId, season, gameType });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${DEFAULT_BASE_URL_V1}/player/${playerId}/game-log/${season}/${gameType}`
    );
  });

  it('calls fetchJson with the correct URL using custom baseUrl', async () => {
    const baseUrl = 'https://custom.api/v1';
    const playerId = 1234;
    const season = 20232024;
    const gameType: GameType = 3;
    await getPlayerGameLogBySeason({ baseUrl, playerId, season, gameType });
    expect(fetchJsonModule.fetchJson).toHaveBeenCalledWith(
      `${baseUrl}/player/${playerId}/game-log/${season}/${gameType}`
    );
  });

  it('returns the mock response', async () => {
    const playerId = 1111;
    const season = 20222023;
    const gameType: GameType = 2;
    const result = await getPlayerGameLogBySeason({
      playerId,
      season,
      gameType,
    });
    expect(result).toBe(mockResponse);
  });
});
