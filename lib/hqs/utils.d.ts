export interface HQChapterPictureItem {
    pictureUrl: string;
}
export interface HQChapterItem {
    id: number;
    number: string;
    pictures: HQChapterPictureItem[];
}
export interface HQItem {
    id: number;
    name: string;
    synopsis: string;
    status: string;
    publisherName: string;
    hqCover: string;
    capitulos: HQChapterItem[];
}
export interface NewHQChapter {
    id: number;
    hqnow_id: number;
    number: number;
    number_key?: string;
    title: string;
    geek: string;
    pages: string[];
    previous_id?: number;
    available: boolean;
    manual: boolean;
}
export interface NewHQ {
    id: number;
    hqnow_id: number;
    title: string;
    description: string;
    type: string;
    finished: boolean;
    cover?: string;
    slug: string;
    geek: string;
    available: boolean;
    tags: string[];
    chapters: NewHQChapter[];
    manual: boolean;
}
export declare function formatHQChapter(chapter: HQChapterItem, hq_id: number): NewHQChapter;
export declare function formatHQ(hq: HQItem): NewHQ;
