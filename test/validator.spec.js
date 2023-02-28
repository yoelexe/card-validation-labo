// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify('1')).toBe('1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify('helloworld')).toBe('######orld');
    });
  });

  describe('validator.target', () => {
    it('debería ser una función', () => {
      expect(typeof validator.target).toBe('function');
    });

    it('Debería retornar Visa para "4557880470905062" ', () => {
      expect(validator.target('4557880470905062')).toBe('Visa');
    });

    it('Debería retornar American Express para "345212846871583" ', () => {
      expect(validator.target('345212846871583')).toBe('American Express');
    });

    it('Debería retornar Mastercard para "5191732343975393" ', () => {
      expect(validator.target('5191732343975393')).toBe('Mastercard');
    });
  })
});
