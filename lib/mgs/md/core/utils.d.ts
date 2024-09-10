export declare const CHAPTERS_PER_PAGE = 96;
export declare function getPage(targetChapterPage: number): number;
export declare type ChapterEndpointConfig = {
    order: "asc" | "desc";
    page: number;
};
export declare const endpoints: {
    info: (manga_id: string) => string;
    chapters: (manga_id: string, config: ChapterEndpointConfig) => string;
    pages: (chapter_id: string) => string;
    recents: () => string;
    bulkInfo: (manga_ids: string[]) => string;
};
export declare const headers: {
    accept: string;
    "accept-language": string;
    origin: string;
    priority: string;
    referer: string;
    "sec-ch-ua": string;
    "sec-ch-ua-mobile": string;
    "sec-ch-ua-platform": string;
    "sec-fetch-dest": string;
    "sec-fetch-mode": string;
    "sec-fetch-site": string;
    "sec-gpc": string;
    "user-agent": string;
};
export declare function request<T>(url: string): Promise<T>;
