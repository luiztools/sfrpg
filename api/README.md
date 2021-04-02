# api

Street Fighter RPG API

## Maneuvers API | API Manobras

Maneuvers Options

- ?source=All: all sources
- ?source=Officials: only official sources
- ?source=Fanmade: only fanmade sources
- ?source= Core | Players | Contenders | Perfect | Shotokan: only one source

**GET /maneuvers | /manobras**

gets all maneuvers.

**GET /maneuvers/:name | /manobras/:nome**

gets one maneuver by name.

**GET /maneuvers/technique/:tech | /manobras/tecnicas/:tech**

gets all maneuvers from one technique.

**GET /maneuvers/seach/:text | /manobras/buscar/:text**

searches all maneuvers by name part.
