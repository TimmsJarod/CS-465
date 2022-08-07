export interface Trip {
    _id: string // internal MongoDB primary key
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: string,
    image: string,
    description: string
}