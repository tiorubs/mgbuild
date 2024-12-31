import { Logger } from "./core/scraper";
import { Languages } from "../../utils/type";
declare type MangaConfig = {
    full?: boolean;
    last?: boolean;
    language: Languages;
};
export declare class Scraper {
    private bruteScraper;
    private transform;
    constructor(logger?: Logger);
    private chapters;
    manga(manga_id: string, config: MangaConfig): Promise<import("./types/transform").MangaInfo | undefined>;
    chapter(manga_id: string, number: number, language: Languages): Promise<{
        pages: string[];
    } | undefined>;
    chapterById(chapter_id: string): Promise<{
        pages: string[];
    }>;
    recents(language: Languages): Promise<import("../../@types").RecentScrapeList[]>;
}
export {};
