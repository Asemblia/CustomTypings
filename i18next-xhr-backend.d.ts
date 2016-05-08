export declare interface i18nXHROptions {
    loadPath: string;
    addPath: string;
    allowMultiLoading : boolean;
    crossdomain: boolean;
    ajax : (url : string, options : any, callback : any, data : any);
}

export declare interface XHR {
    constructor(services? : any, options? : i18nXHROptions);
}

declare namespace I18Next {
    export interface Options {
        backend: i18nXHROptions;
    }
}