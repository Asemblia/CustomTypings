declare namespace I18Next {
    interface i18nXHROptions {
        loadPath: string;
        addPath: string;
        allowMultiLoading: boolean;
        crossdomain: boolean;
        ajax: (url: string, options: any, callback: any, data: any) => {};
    }

    interface Options {
        backend: i18nXHROptions;
    }
}

declare module 'i18next-xhr-backend' {
    export interface XHR {
        constructor(services?: any, options?: I18Next.i18nXHROptions);
    }
}