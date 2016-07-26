declare namespace TwbsPagination {
    interface Options {
        totalPages : number,
        startPage? : number,
        visiblePages? : number,
        initiateStartPageClick? : boolean,
        href? : boolean,
        first? : string,
        prev? : string,
        last? : string,
        next? : string,
        loop? : boolean,
        paginationClass? : string,
        onPageClick : (event : Event, page : number) => void
    }
}

interface JQuery {
   twbsPagination : (opts : TwbsPagination.Options) => void; 
}