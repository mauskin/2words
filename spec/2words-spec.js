var checkRow, toWords;

toWords = require('../2words');

checkRow = function(row) {
  var number, results, text;
  results = [];
  for (number in row) {
    text = row[number];
    results.push(expect(toWords(number)).toBe(text));
  }
  return results;
};

describe('initial checks', function() {
  it('should null if given null', function() {
    var iNull;
    iNull = toWords(null);
    return expect(iNull).toBeNull();
  });
  it('should null if given undefined', function() {
    var iUnd;
    iUnd = toWords(void 0);
    return expect(iUnd).toBeNull();
  });
  it('should null if not a number', function() {
    var text;
    text = toWords('hello');
    return expect(text).toBeNull();
  });
  it('should null if too large', function() {
    var hugeNumber;
    hugeNumber = toWords(9999999999999999);
    return expect(hugeNumber).toBeNull();
  });
  return it('should null if too large', function() {
    var notAnumber;
    notAnumber = toWords(0/0);
    return expect(notAnumber).toBeNull();
  });
});

describe('Convertion tests', function() {
  it('text on numbers for 1 to 20', function() {
    return checkRow({
      0: 'ноль',
      1: 'один',
      2: 'два',
      3: 'три',
      4: 'четыре',
      5: 'пять',
      6: 'шесть',
      7: 'семь',
      8: 'восемь',
      9: 'девять',
      10: 'десять',
      11: 'одиннадцать',
      12: 'двенадцать',
      13: 'тринадцать',
      14: 'четырнадцать',
      15: 'пятнадцать',
      16: 'шестнадцать',
      17: 'семнадцать',
      18: 'восемнадцать',
      19: 'девятнадцать',
      20: 'двадцать',
      21: 'двадцать один'
    });
  });
  it('names of hundreds', function() {
    return checkRow({
      100: 'сто',
      200: 'двести',
      300: 'триста',
      400: 'четыреста',
      500: 'пятьсот',
      600: 'шестьсот',
      700: 'семьсот',
      800: 'восемьсот',
      900: 'девятьсот'
    });
  });
  it('numbers from 100 to 999', function() {
    return checkRow({
      111: 'сто одиннадцать',
      205: 'двести пять',
      325: 'триста двадцать пять',
      563: 'пятьсот шестьдесят три',
      999: 'девятьсот девяносто девять'
    });
  });
  it('numbers from 1000 to 999999', function() {
    return checkRow({
      1000: 'одна тысяча',
      2000: 'две тысячи',
      3000: 'три тысячи',
      4000: 'четыре тысячи',
      5000: 'пять тысяч',
      6000: 'шесть тысяч',
      7000: 'семь тысяч',
      8000: 'восемь тысяч',
      9000: 'девять тысяч',
      10000: 'десять тысяч',
      11000: 'одиннадцать тысяч',
      12000: 'двенадцать тысяч',
      13000: 'тринадцать тысяч',
      14000: 'четырнадцать тысяч',
      15000: 'пятнадцать тысяч',
      16000: 'шестнадцать тысяч',
      17000: 'семнадцать тысяч',
      18000: 'восемнадцать тысяч',
      19000: 'девятнадцать тысяч',
      20000: 'двадцать тысяч',
      21000: 'двадцать одна тысяча',
      22000: 'двадцать две тысячи',
      23000: 'двадцать три тысячи',
      24000: 'двадцать четыре тысячи',
      25000: 'двадцать пять тысяч',
      26000: 'двадцать шесть тысяч',
      27000: 'двадцать семь тысяч',
      28000: 'двадцать восемь тысяч',
      29000: 'двадцать девять тысяч',
      30000: 'тридцать тысяч',
      31000: 'тридцать одна тысяча',
      32000: 'тридцать две тысячи',
      33000: 'тридцать три тысячи',
      34000: 'тридцать четыре тысячи',
      35000: 'тридцать пять тысяч',
      36000: 'тридцать шесть тысяч',
      37000: 'тридцать семь тысяч',
      38000: 'тридцать восемь тысяч',
      39000: 'тридцать девять тысяч',
      40000: 'сорок тысяч',
      100000: 'сто тысяч',
      222001: 'двести двадцать две тысячи один',
      410000: 'четыреста десять тысяч'
    });
  });
  return it('any other things', function() {
    return checkRow({
      100001: 'сто тысяч один',
      100002: 'сто тысяч два',
      100003: 'сто тысяч три',
      100004: 'сто тысяч четыре',
      100005: 'сто тысяч пять',
      100006: 'сто тысяч шесть',
      100007: 'сто тысяч семь',
      100008: 'сто тысяч восемь',
      100009: 'сто тысяч девять',
      100010: 'сто тысяч десять',
      100011: 'сто тысяч одиннадцать',
      9007199254740992: 'девять квадриллионов семь триллионов сто девяносто девять миллиардов двести пятьдесят четыре миллиона семьсот сорок тысяч девятьсот девяносто два'
    });
  });
});
