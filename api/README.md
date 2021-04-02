# api
Street Fighter RPG API

## /maneuvers

Maneuvers Options
- ?source=All: all sources
- ?source=Officials: only official sources
- ?source=Fanmade: only fanmade sources
- ?source= Core | Players | Contenders | Perfect | Shotokan: only one source

GET /maneuvers
- gets all maneuvers.

GET /maneuvers/:name
- gets one maneuver by name.

GET /maneuvers/technique/:tech
- gets all maneuvers from one technique.

GET /maneuvers/seach/:text
- searches all maneuvers by name part.