declare interface i18nCacheOptions {
    enabled: boolean;
    prefix: string;
    expirationTime: number;
}

export declare interface Cache {
    constructor(services? : any, options? : i18nCacheOptions);
}

declare namespace I18Next {
    export interface Options {
        cache: i18nCacheOptions;
    }
}