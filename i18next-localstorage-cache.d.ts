declare namespace I18Next {
    interface i18nCacheOptions {
        enabled: boolean;
        prefix: string;
        expirationTime: number;
    }

    export interface Options {
        cache: i18nCacheOptions;
    }

}

declare module 'i18next-localstorage-cache' {
    export interface Cache {
        constructor(services?: any, options?: I18Next.i18nCacheOptions);
    }
}