import type { GetMangaInfoResponse } from "../types/info";
import type { GetMangaChaptersResponse } from "../types/chapters";
import type { GetRecentChaptersResponse } from "../types/recents";
import type { GetChapterPagesResponse } from "../types/pages";
import { Chapter, MangaInfo, Recent } from "../types/transform";
import { RecentScrapeList } from "../../../@types";
import { Languages } from "../../../utils/type";
export declare class Transform {
    chapterList(response?: GetMangaChaptersResponse, language?: Languages, slug?: string): Chapter[];
    mangaInfo(response?: GetMangaInfoResponse, language?: Languages): MangaInfo;
    chapterPages(response?: GetChapterPagesResponse): {
        pages: string[];
    };
    recentChapters(response?: {
        recent: GetRecentChaptersResponse;
        mangas: Recent[];
    }): RecentScrapeList[];
}
