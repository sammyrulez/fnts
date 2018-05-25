

interface Option<T> {

}

class Some<T> implements Option<T> {
    
}


function some<T>(value :T):Option<T> {
    return new Some()
}