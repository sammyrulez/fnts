import { expect } from 'chai';
import 'mocha';
import {Option,None,none,Some,some} from './option'

describe('Options', () => {

    it('should have default values', () => {
     
      const a = some(1)
      expect(a.getOrElse(0)).to.equal(1);
      const b:Option<Number> = none()
      expect(b.getOrElse(1)).to.equal(1);
         
    });

    it('should filter values', () => {
     
        const a = some(1).filter(v => v > 2)

        expect(a.getOrElse(0)).to.equal(0);

        const b = some(1).filter(v => v < 2)

        expect(b.getOrElse(0)).to.equal(1);
           
      });

      it('should do something if defined', () => {
        var b = 0

        const a = some(1)

        a.forEach(v => b=v)

        const c = none()

        a.forEach(v => b=v)

        expect(b).to.equal(1);
           
      });

      it('should apply mappings if defined', () => {

        const a = some(1)

        const  b = a.map(v => v * 2)

        expect(b.getOrElse(0)).to.equal(2);
           
      });


})