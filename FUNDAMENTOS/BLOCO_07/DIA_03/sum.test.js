const sum = require('./sum');
describe('Requisito 1', () => {
  it('A função recebe dois números e retorna sua soma', () =>{
    expect(9).toEqual(sum(4, 5));
  });
  it('A função recebe dois números e retorna sua soma', () =>{
    expect(0).toEqual(sum(0, 0));
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () =>{
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});