export declare type GetBulkInfoResponse = {
    result: string;
    response: string;
    data: Data[];
    limit: number;
    offset: number;
    total: number;
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
    publicationDemographic?: string;
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
};
declare type AltTitle = {
    en?: string;
    "ko-ro"?: string;
    ru?: string;
    ja?: string;
    ko?: string;
    id?: string;
    zh?: string;
    th?: string;
    "zh-hk"?: string;
    el?: string;
    "zh-ro"?: string;
    vi?: string;
    uk?: string;
    tr?: string;
    kk?: string;
    bg?: string;
    sl?: string;
    "ja-ro"?: string;
};
declare type Description = {
    en: string;
    pt?: string;
    "es-la"?: string;
    "pt-br"?: string;
    fr?: string;
    ru?: string;
};
declare type Links = {
    al: string;
    ap: string;
    bw?: string;
    kt?: string;
    mu: string;
    nu?: string;
    amz?: string;
    cdj?: string;
    ebj?: string;
    mal?: string;
    raw?: string;
    engtl?: string;
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
    attributes?: Attributes3;
    related?: string;
};
declare type Attributes3 = {
    description: string;
    volume: string;
    fileName: string;
    locale: string;
    createdAt: string;
    updatedAt: string;
    version: number;
};
export {};
