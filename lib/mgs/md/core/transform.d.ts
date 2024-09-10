import type { GetMangaInfoResponse } from "../types/info";
import type { GetMangaChaptersResponse } from "../types/chapters";
import type { GetRecentChaptersResponse } from "../types/recents";
import type { GetChapterPagesResponse } from "../types/pages";
import { Chapter, MangaInfo, Recent } from "../types/transform";
import { RecentScrapeList } from "../../../@types";
export declare class Transform {
    chapterList(response?: GetMangaChaptersResponse, slug?: string): Chapter[];
    mangaInfo(response?: GetMangaInfoResponse): MangaInfo;
    chapterPages(response?: GetChapterPagesResponse): {
        pages: string[];
    };
    recentChapters(response?: {
        recent: GetRecentChaptersResponse;
        mangas: Recent[];
    }): RecentScrapeList[];
}
