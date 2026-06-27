# 🏒 nhl-api-typescript
[![CI](https://github.com/charliejmoore/nhl-api-typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/charliejmoore/nhl-api-typescript/actions/workflows/ci.yml)

**🚧🛠️⏳ Work in progress 🚧🛠️⏳**

A [TypeScript](https://www.typescriptlang.org/) client for accessing the officially undocumented [NHL](https://www.nhl.com/) API (unofficially, the API has been documented, see: [NHL-API-Reference](https://github.com/Zmalski/NHL-API-Reference) for the example I referenced for this project).

Provides simple, type-safe methods for accessing key player, team, league, and game data.

This API does not (yet) require any sort of API key, so please use this library responsibly (e.g., self-imposed rate limiting perhaps).

## Usage

### Installation

*Not yet hosted, local use only for now.*
```bash
npm install nhl-api-typescript
```

### Setup

```typescript
import { createNHLApiClient } from 'nhl-api-typescript';

const client = createNHLApiClient();
```

You can optionally pass configuration:

```typescript
const client = createNHLApiClient({
  language: 'fr', // ISO 639 language code, defaults to "en"
  baseUrl: 'https://custom-url.example.com', // override the API base URL
});
```

### League

```typescript
// Get all NHL teams
const teams = await client.getAllNHLTeams();

// Get current standings
const standings = await client.getCurrentTeamStandings();
```

### Teams

```typescript
// Get the current roster for a team (using 3-letter team code)
const roster = await client.getCurrentTeamRoster('BOS');

// Get a team's roster for a specific season
const historicRoster = await client.getTeamRosterBySeason('BOS', '20232024');
```

### Players

```typescript
import { GameType } from 'nhl-api-typescript';

// Get player details by player ID
const player = await client.getPlayerDetails(8478402);

// Get a player's game log for a season
const gameLog = await client.getPlayerGameLogBySeason(
  8478402,
  '20232024',
  GameType.REGULAR_SEASON
);

// Get current skater stat leaders
const skaterLeaders = await client.getCurrentSkaterStatLeaders({
  categories: ['goals', 'assists'],
  limit: 10,
});

// Get current goalie stat leaders
const goalieLeaders = await client.getCurrentGoalieStatLeaders({
  categories: ['wins'],
  limit: 5,
});
```

## Known Limitations
- There doesn't seem to be a way to use the NHL api to find a player by name. You have to know the player ID to get a player's info. Possible mitigations for future work include some kind of scraping to create a player name (plus birthday or some other extra identifying info in the case of same first and last name) to player id database that can be queried. This would obviously need to be updated as new players join the NHL.

## 📚 Credits
- [NHL-API-Reference](https://github.com/Zmalski/NHL-API-Reference)
