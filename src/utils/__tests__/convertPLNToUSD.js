import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN value when input is string', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('pln')).toBeNaN();
    expect(convertPLNToUSD('usd')).toBeNaN();
    expect(convertPLNToUSD('-100')).toBeNaN();
  });

  it('should return NaN value when input is undefined', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('should return "Error" when input is different than number and string', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  });

  it('should return 0.00 value when input is less then 0', () => {
    expect(convertPLNToUSD(-230)).toBe('$0.00');
    expect(convertPLNToUSD(-0)).toBe('$0.00');
    expect(convertPLNToUSD(-12)).toBe('$0.00');
    expect(convertPLNToUSD(-3)).toBe('$0.00');
  });

});