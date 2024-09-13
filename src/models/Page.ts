export default interface Page<T> {
    content:T[],
    pageable:Pageable,
    last:boolean,
    totalPages:number,
    totalElements:number,
    size:number,
    number:number,
    first:boolean,
    numberOfElements:number,
    empty:boolean
}

interface Pageable {
    pageNumber:number,
    pageSize:number,
    offset:number,
    paged:boolean,

}