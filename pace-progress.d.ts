declare module 'Pace' {
    interface PaceOptions {
        catchupTime: number;
        initialRate: number;
        ghostTime: number;
        maxProgressPerFrame: number;
        easeFactor: number;
        startOnPageLoad: boolean;
        restartOnPushState: boolean;
        restartOnRequestAfter: boolean;
        target: string;
        elements: { checkInterval: number, selectors: string[] },
        eventLag: { minSamples: number, sampleCount: number; lagThreshold: number; }
        ajax: { trackMethods: string[], trackWebSockets: boolean, ignoreURLs: string[] },
        extraSources: PaceSource[];
    }

    interface PaceElement {
        progress: number;
    }

    interface PaceSource {
        progress?: number;
        elements?: PaceElement[]
    }

    var running: false;
    var options: PaceOptions;
    var sources: string[];
    function trigger(action: string): void;
    function start(): number;
    function go(): number;
    function stop(): number;
    function restart(): number;
    function track(): any;
    function ignore(): any;

}