TypeScript Functional Programming experiments
=============================================

[![Build Status](https://travis-ci.org/sammyrulez/fnts.svg?branch=master)](https://travis-ci.org/sammyrulez/fnts) [![Coverage Status](https://coveralls.io/repos/github/sammyrulez/fnts/badge.svg?branch=coverage)](https://coveralls.io/github/sammyrulez/fnts?branch=coverage)

A library to ease _functional_ style in TypeScript development

___

## Curry ##

Currying is when you break down a function that takes multiple arguments into a series of functions that take part of the arguments.

```javascript
import { curry } from './curry';

 function add(x: number, y: number): number {
        return x + y;
    }

const curriedAdd = curry(add); //curry takes a function and returns a curried version
const addOne = curriedAdd(1); // with the curried version you can build new functions with fixed parameters
addOne(2) // returns 3, just like you call add(1,2)

```

This implementation works with functions with up to 4 parameters.

*Credits:* Erwin Poeze (donnut) [gist](https://gist.github.com/donnut/fd56232da58d25ceecf1) and  the comment by waldogit
___

## Option Monad ##

Monad is a concept, an abstract interface if you will, that simply defines a way of composing data.

Option supports composition via _flatMap_, and that's pretty much everything that is needed to wear the "monad badge".


```javascript
const maybeOne:Option<number> = some(1) // If you want to wrap a value 

const maybeNot:Option<number> = none() # // If you want to rapresent the absence of a value

function findUser(userId:number ): Option<User> { 
    // a method that will returns a User if one with the given userId exists
....
}

 function authenticate(user:User):Option<User>{
     // authenticate a user if enabled
     ....
}
const maybeUser : Option<User> = findUser("lenny").flatMap(authenticate)
    // Some authenticated user or None

```

## Either Container ##

 Either<L,R> represents a value of one of two possible types (a disjoint union.) An instance of Either is either an instance left class (L) or right class (R).


```javascript

const imRight = Either.right(2);
imRight.map(x =>1+ x) // returns  Either.right(3)

const imLefty = Either.left(0);

imLefty.map(x =>1+ x) // returns  Either.left(0)

//Eitherpolymorph into an Option
const imAlsoRight = Either.right(2);
imAlsoRight.map(x =>1+ x).getAsOption().getOrElse(0) // returns 3


```
