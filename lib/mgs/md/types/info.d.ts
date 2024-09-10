export declare type GetMangaInfoResponse = {
    result: string;
    response: string;
    data: Data;
};
declare type Data = {
    id: string;
    type: string;
    attributes: Attributes;
    relationships: Relationship[];
};
declare type Attributes = {
    title: Title;
    altTitles: AltTitle[];
    description: Description;
    isLocked: boolean;
    links: Links;
    originalLanguage: string;
    lastVolume: string;
    lastChapter: string;
    publicationDemographic: any;
    status: string;
    year: number;
    contentRating: "erotica" | "safe" | "suggestive";
    tags: Tag[];
    state: string;
    chapterNumbersResetOnNewVolume: boolean;
    createdAt: string;
    updatedAt: string;
    version: number;
    availableTranslatedLanguages: string[];
    latestUploadedChapter: string;
};
declare type Title = {
    en: string;
    "ja-ro"?: string;
};
declare type AltTitle = {
    "ja-ro"?: string;
    en?: string;
    ja?: string;
    pl?: string;
};
declare type Description = {
    en: string;
    "pt-br": string;
};
declare type Links = {
    al: string;
    ap: string;
    bw: string;
    kt: string;
    mu: string;
    amz: string;
    ebj: string;
    mal: string;
    raw: string;
    engtl: string;
};
declare type Tag = {
    id: string;
    type: string;
    attributes: Attributes2;
    relationships: any[];
};
declare type Attributes2 = {
    name: Name;
    description: object;
    group: string;
    version: number;
};
declare type Name = {
    en: string;
};
declare type Relationship = {
    id: string;
    type: string;
    related?: string;
    attributes: {
        volume: string;
        fileName: string;
        locale: string;
        createdAt: string;
        updatedAt: string;
    };
};
export {};
