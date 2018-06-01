import { Option, some, none } from "./option";

export class Either<L,R> {

    protected isRight = false;
    protected isLeft= false;
     protected right:R;
     protected left:L;

    protected constructor(rightParam:R,leftParam:L){
        this.isRight = rightParam != null;
        this.isLeft = leftParam != null;
        this.right = rightParam;
        this.left = leftParam;
    }

    static left<L>(leftParam:L):Either<L,any>{
            return new Either(null,leftParam);
    }

    static right<R>(rightParam:R):Either<any,R>{
        return new Either(rightParam,null);
}

    map<X>(f: (value: R) => X): Either<L,X> {
        if(this.isRight){
            return Either.right(f(this.right))
        }
        else
            return Either.left(this.left);
    }

    get():any{
        if(this.isRight)
            return this.right;
        else
            return this.left;    
    }
    getAsOption():Option<R> {
        if(this.isRight)
            return some(this.right);
        else
            return none();
    }
/*
    flatmap<X>(f: (value: R) => Either<L,X>): Either<L,X> {
        if(this.isRight){
            const result = f(this.right);
            if(result.isRight)
                return Either.right(result.right)
            else   
                return Either.left(result.left); 

        }
        else
            return Either.left(this.left);
    }
*/
   

}









