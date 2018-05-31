import { expect } from 'chai';
import 'mocha';
import {Option,None,none,Some,some} from './option'

describe('Options', () => {

  it('should init safely', () => {

    const a = some(null)

    expect(a.getOrElse(0)).to.equal(0);

    const b = some(undefined)

    expect(b.getOrElse(0)).to.equal(0);

  });


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

        const c =none().filter(v => true)

        expect(c.getOrElse(0)).to.equal(0);
           
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


        const c = none()

        const  d = c.map(v => v )

        expect(d.getOrElse(0)).to.equal(0);
           
      });

      it('should compose other options ( wait monads to not compose!)', () => {

        function findUser(p:string):Option<String>{
          if(p != "bad")
            return some("maybeUser")
          else
            return none()
        }

        function usernameLength(user:String):Option<number>{
          return some(user.length)
      }

      const l : Option<number> = findUser("sam").flatMap(usernameLength)

      expect(l.getOrElse(0)).to.equal(9);

      const n : Option<number> = findUser("bad").flatMap(usernameLength)

      expect(n.getOrElse(0)).to.equal(0);



           
      });


})