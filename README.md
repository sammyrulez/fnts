TypeScript Functional Programming experiments
=============================================

## Curry ##

Currying is when you break down a function that takes multiple arguments into a series of functions that take part of the arguments.

```javascript
import { curry } from './curry';

 function add(x: number, y: number): number {
        return x + y;
    }

const curriedAdd = curry(add); //curry takes a function and returns a curried version
const addOne = curriedAdd(1); // with the curried version you can build new functions with fixed parameters
addOne(2) // return 3, just like you call add(1,2)

```

This implementation works with functions with up to 4 parameters.

*Credits:* Erwin Poeze (donnut) [gist](https://gist.github.com/donnut/fd56232da58d25ceecf1) and  the comment by waldogit
___
