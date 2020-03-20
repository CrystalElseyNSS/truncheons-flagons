import { fetchTeams } from './teams/teamDataProvider.js'
import { TeamList } from './teams/TeamList.js'
fetchTeams().then(TeamList)

import { TeamForm } from './teams/TeamForm.js'
TeamForm()