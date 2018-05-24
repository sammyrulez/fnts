import { curry } from './curry';
import { expect } from 'chai';
import 'mocha';



describe('Add function', () => {

  it('should return curried Add function', () => {
   
    function add(x: number, y: number): number {
        return x + y;
    }
    const addc = curry(add);
    expect(addc(1)(2)).to.equal(add(1,2));
       

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

});