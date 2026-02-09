import { LeaderboardEntry } from "../../../types/leaderboard";

export default cachedEventHandler(async (event): Promise<LeaderboardEntry[]> => {
    const competitionId = event.context.params?.competitionId;
    if (!competitionId) {
        throw createError({statusCode: 400, statusMessage: 'Competition ID is required'});
    }

    const fetchAll = async () => {
        let results: any[] = [];
        const page = (page = 1) => $fetch<any>(`https://tradersyard.com/api/v3.0/competitions/competition-instances/${competitionId}/leaderboard?page=${page}&per_page=100`);

        let currentPage = 0;
        do {
            const {data, meta} = await page(++currentPage);
            results = [...results, ...data];

            if (meta.current_page >= meta.last_page) {
                break;
            }
        } while(true);

        return results;
    }

    const all = await fetchAll();

    return all.map(res => ({
        id: res.id,
        nickname: res.nickname,
        rank: res.rank,
        total_profit_loss: +res.total_profit_loss,
    }))
}, {
    maxAge: 60,
    getKey: e => e.path
})
