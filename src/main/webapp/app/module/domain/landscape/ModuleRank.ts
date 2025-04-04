export const RANKS = ['RANK_D', 'RANK_C', 'RANK_B', 'RANK_A', 'RANK_S'] as const;
export type ModuleRank = (typeof RANKS)[number];

export const extractRankLetter = (rank: ModuleRank): string => rank.substring(5);
