export interface NewHQChapter {
    hqnow_id: number;
    number: number;
    title: string;
    geek: string;
    pages: string[];
}
export declare function getHqChapterById(chapter_id: number): Promise<NewHQChapter>;
