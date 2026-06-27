# 🏒 nhl-api-typescript
[![CI](https://github.com/charliejmoore/nhl-api-typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/charliejmoore/nhl-api-typescript/actions/workflows/ci.yml)

**🚧🛠️⏳ Work in progress 🚧🛠️⏳**

A [TypeScript](https://www.typescriptlang.org/) client for accessing the officially undocumented [NHL](https://www.nhl.com/) API (unofficially, the API has been documented, see: [NHL-API-Reference](https://github.com/Zmalski/NHL-API-Reference) for the example I referenced for this project).

Provides simple, type-safe methods for accessing key player, team, league, and game data.

This API does not (yet) require any sort of API key, so please use this library responsibly (e.g., self-imposed rate limiting perhaps).

## Known Limitations
- There doesn't seem to be a way to use the NHL api to find a player by name. You have to know the player ID to get a player's info. Possible mitigations for future work include some kind of scraping to create a player name (plus birthday or some other extra identifying info in the case of same first and last name) to player id database that can be queried. This would obviously need to be updated as new players join the NHL.

## 📚 Credits
- [NHL-API-Reference](https://github.com/Zmalski/NHL-API-Reference)
