export declare type GetChapterPagesResponse = {
    result: string;
    baseUrl: string;
    chapter: Chapter;
};
declare type Chapter = {
    hash: string;
    data: string[];
    dataSaver: string[];
};
export {};
