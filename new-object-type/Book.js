
class Book{
    constructor(
        name,
        type,
        author,
        page,
        hasRead,
    ){
        this.name = name,
        this.type = type,
        this.author = author,
        this.page = page,
        this.hasRead = hasRead
    }

    readTheBook(value){
        this.hasRead = value
    }

    changeTheType(type){
        this.type = type
    }
}

export default Book;