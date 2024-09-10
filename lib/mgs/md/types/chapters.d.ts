export declare type GetMangaChaptersResponse = {
    result: string;
    response: string;
    data: Data[];
    limit: number;
    offset: number;
    total: number;
    last_page: number;
    invalid_page: boolean;
};
declare type Data = {
    id: string;
    type: string;
    attributes: Attributes;
    relationships: Relationship[];
};
declare type Attributes = {
    volume?: string;
    chapter: string;
    title?: string;
    translatedLanguage: string;
    externalUrl?: string;
    publishAt: string;
    readableAt: string;
    createdAt: string;
    updatedAt: string;
    pages: number;
    version: number;
};
declare type Relationship = {
    id: string;
    type: string;
    attributes?: Attributes2;
};
declare type Attributes2 = {
    username?: string;
    roles?: string[];
    version: number;
    name?: string;
    altNames?: any[];
    locked?: boolean;
    website?: string;
    ircServer: any;
    ircChannel: any;
    discord?: string;
    contactEmail?: string;
    description?: string;
    twitter?: string;
    mangaUpdates?: string;
    focusedLanguages?: string[];
    official?: boolean;
    verified?: boolean;
    inactive?: boolean;
    publishDelay: any;
    exLicensed?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export {};
