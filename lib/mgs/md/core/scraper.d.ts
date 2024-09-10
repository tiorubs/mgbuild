import { ChapterEndpointConfig } from "./utils";
import type { GetMangaInfoResponse } from "../types/info";
import type { GetMangaChaptersResponse } from "../types/chapters";
import type { GetRecentChaptersResponse } from "../types/recents";
import type { GetChapterPagesResponse } from "../types/pages";
export declare type Log = {
    type: "ping" | "error";
    method: string;
    url: string;
    time: string;
};
export declare type ChapterConfig = {
    page?: number;
    order?: "asc" | "desc";
};
export declare type Logger = (log: Log) => any;
export declare class BruteScraper {
    private logger?;
    constructor(logger?: Logger);
    request<T>(url: string): Promise<T>;
    getChapterList(manga_id: string, config: ChapterEndpointConfig): Promise<GetMangaChaptersResponse | undefined>;
    getMangaInfo(manga_id: string): Promise<GetMangaInfoResponse | undefined>;
    getChapterPages(chapter_id: string): Promise<GetChapterPagesResponse | undefined>;
    getRecentChapters(): Promise<{
        recent: GetRecentChaptersResponse;
        mangas: {
            code: string;
            cover: string;
            title: string;
            chapters: never[];
        }[];
    } | undefined>;
}
