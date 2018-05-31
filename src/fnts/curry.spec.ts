import { curry } from './curry';
import { expect } from 'chai';
import 'mocha';



describe('Add function', () => {

  it('should return curried Add function', () => {
   
    function add(x: number, y: number): number {
        return x + y;
    }
    const addc = curry(add);
    const addOne = addc(1);
    expect(addOne(2)).to.equal(add(1,2));
       

  });
  it('should return curried function with multiple parameters', () => {
   
    function add(x: number, y: number, z: number): number {
        return x + y + z;
    }
    const addc = curry(add);
    const regularOut = add(1, 2, 3);
    expect(addc(1)(2, 3)).to.equal(regularOut);
    expect(addc(1)(2)(3)).to.equal(regularOut);
    expect(addc(1,2)(3)).to.equal(regularOut);
  

  });

  it('should support upt to 4 paramters', () => {
   
    function add(x: number, y: number,z:number,k:number): number {
        return x + y+ z;
    }
    const addc = curry(add);
    const addOne = addc(1);
    const addOneAndTwo = addc(1,2);
    const addTillThree = addc(1,2,3);
    const addAndFour = addc(1,2,3,4);
    expect(addOne(2,3,4)).to.equal(add(1,2,3,4));
    expect(addOneAndTwo(3,4)).to.equal(add(1,2,3,4));
    expect(addTillThree(4)).to.equal(add(1,2,3,4));

    
  });

  it('should support upt down to 0 paramters', () => {
   
    function zero(): number {
       return 0;
    }

    function fiver(x: number, y: number,z:number,k:number, n:number): number {
      return x + y+ z;
  }

    const zeroc = curry(zero);
    expect(zero()).to.equal(zeroc(1));

    // const fiverc = curry(fiver); <-- do not compile


    
  });


});