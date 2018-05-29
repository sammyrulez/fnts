

export interface Option<T> {
    map<K>(f: (value: T) => K): Option<K>
    forEach<K>(f: (value: T) => K): void
    flatMap<K>(f: (value: T) => Option<K>): Option<K> 
    filter(f: (value: T) => Boolean): Option<T>
    getOrElse(value: T):T
}

export class Some<T> implements Option<T> {
    
    getOrElse(value: T): T {
       return this.value;
    }
    map<K>(f: (value: T) => K): Option<K> {
        return new Some(f(this.value))
}
    forEach<K>(f: (value: T) => K): void {
        f(this.value)
    }

    flatMap<K>(f: (value: T) => Option<K>): Option<K> {
       return f(this.value)
    }

    filter(f: (value: T) => Boolean): Option<T> {
       if(f(this.value))
            return this
       else
            return new None()     
    }
     value:T;
    constructor(message: T) {
        if(message === null || message === undefined)
            throw new Error('Some \'value\' can\'t be null ');
        this.value = message;
    }
}

export class None<T> implements Option<T> {
    map<K>(f: (value: T) => K): Option<K> {
        return new None<K>();
    }
    forEach<K>(f: (value: T) => K): void {
       
    }
    flatMap<K>(f: (value: T) => Option<K>): Option<K> {
        return new None<K>();
    }
    filter(f: (value: T) => Boolean): Option<T> {
        return this;
    }

    getOrElse(value: T): T {
        return value;
     }
}

export function none<T>():Option<T> {
    return new None
}

export function some<T>(value :T):Option<T> {
    return new Some(value)
}


