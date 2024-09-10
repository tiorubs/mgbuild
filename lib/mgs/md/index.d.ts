import { Logger } from "./core/scraper";
declare type MangaConfig = {
    full?: boolean;
    last?: boolean;
};
export declare class Scraper {
    private bruteScraper;
    private transform;
    constructor(logger?: Logger);
    private chapters;
    manga(manga_id: string, config: MangaConfig): Promise<import("./types/transform").MangaInfo | undefined>;
    chapter(manga_id: string, number: number): Promise<{
        pages: string[];
    } | undefined>;
    chapterById(chapter_id: string): Promise<{
        pages: string[];
    }>;
    recents(): Promise<import("../../@types").RecentScrapeList[]>;
}
export {};
