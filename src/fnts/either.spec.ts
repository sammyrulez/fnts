import { expect } from 'chai';
import 'mocha';
import { Either} from './either'

describe('Add function', () => {

    it('should map right values', () => {
     
      const imRight = Either.right(2);
      expect(imRight.map(x =>1+ x).get()).to.equal(3);
     
      const imLefty = Either.left(0);
      expect(imLefty.map(x =>1+ x).get()).to.equal(0);

    });
    it('should polymorph into an Option', () => {
     
        const imRight = Either.right(2);
        expect(imRight.map(x =>1+ x).getAsOption().getOrElse(0)).to.equal(3);
       
        const imLefty = Either.left(0);
        expect(imLefty.map(x =>1+ x).getAsOption().getOrElse(0)).to.equal(0);
       
  
      });
});