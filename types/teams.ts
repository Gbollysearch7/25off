export interface TeamsJson {
    competitionId: string
    teamSize: number
    teams: Team[]
}

export interface Team {
    name: string
    members: TeamMember[]
}

export interface TeamMember {
    id: string
    nickname: string
}