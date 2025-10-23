export const supportedLanguages = ['en', 'uk'] as const;

export type Lang = (typeof supportedLanguages)[number];
