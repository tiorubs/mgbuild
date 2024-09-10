export declare type RecentScrapeList = {
    cover?: string;
    title: string;
    code: string;
    chapters: number[];
};
export declare type ScrapedManga = {
    id: number;
    title: string;
    slug: string;
    geek: string;
    description: string;
    cover: string;
    tags: string[];
    available: boolean;
    alternative_name?: string;
    chapters: ScrapedHostChapter[];
    chapter_code?: string;
};
export declare type ScrapedHostChapter = {
    id?: string | number;
    number: number;
    title: string;
    geek: string;
};
export declare type MangaScrapeList = {
    code: string;
    title: string;
    cover?: string;
};
