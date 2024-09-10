export declare type Chapter = {
    id: string;
    number: number;
    title: string;
    geek: string;
};
export declare type Manga = {
    id: number;
    title: string;
    slug: string;
    geek: string;
    description: string;
    cover: string;
    tags: string[];
    available: boolean;
    alternative_name?: string;
    chapters: Chapter[];
    chapter_code?: string;
};
export declare type Recent = {
    code: string;
    chapters: number[];
    title: string;
    cover?: string;
};
export declare type MangaCoverInfo = {
    id: string;
    cover: string;
    coverPath: string;
};
export declare type MangaInfo = {
    id: string;
    title: string;
    slug: string;
    geek: string;
    description: string;
    cover: string;
    tags: string[];
    available: boolean;
    alternative_name?: string;
    chapters?: Chapter[];
};
