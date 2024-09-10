import { GetMangaChaptersResponse } from "../types/chapters";
export declare function getRealChapterPerPage(pageProps: GetMangaChaptersResponse): number;
export declare function getPredictedPage(targetChapter: number, realChaptersPerPage: number): number;
