describe('test', function() {
  it('returns the given string', function() {
    expect(test('Hello World')).toEqual('Hello World');
  });
});

describe('whoIsNext', function() {
	it('will return the name of a man who will drink the n-th cola', function() {
		expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 1)).toEqual('Sheldon');
	});

	it('will return the name of a man who will drink the n-th cola', function() {
		expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 14)).toEqual('Howard');
	});

	it('will return the name of a man who will drink the n-th cola', function() {
		expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 52)).toEqual('Penny');
	});
});

describe('dirReduc', function() {
	it('removes the doble directions (if north then south you are on the same position)', function() {
		expect(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])).toEqual(['WEST']);
	});

	it('removes the doble directions (if north then south you are on the same position)', function() {
		expect(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])).toEqual(['NORTH', 'WEST', 'SOUTH', 'EAST']);
	});

	it('removes the doble directions (if north then south you are on the same position)', function() {
		expect(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])).toEqual([]);
	});
});

describe('arrayDiff', function() {
	it('removes all elements in first array where given in second array', function() {
		expect(arrayDiff([1, 2], [1])).toEqual([2]);
	});

	it('removes all elements in first array where given in second array', function() {
		expect(arrayDiff([1, 2, 2, 2, 3], [2])).toEqual([1, 3]);
  });
  
  it('removes all elements in first array where given in second array', function() {
		expect(arrayDiff([1,2,2,2,2,2,3,4,5,6,7,8,9,10],[2, 3, 6])).toEqual([1,4,5,7,8,9,10]);
	});
});

describe('areYouPlayingBanjo', function() {
	it('If your name starts with the letter "R" or lower case "r", you are playing banjo!', function() {
		expect(areYouPlayingBanjo('Martin')).toEqual('Martin does not play banjo');
	});

	it('If your name starts with the letter "R" or lower case "r", you are playing banjo!', function() {
		expect(areYouPlayingBanjo('Rikke')).toEqual('Rikke plays banjo');
  });
  
  it('If your name starts with the letter "R" or lower case "r", you are playing banjo!', function() {
		expect(areYouPlayingBanjo('rocky')).toEqual('rocky plays banjo');
	});
});

describe('makeNegative', function() {
	it('makes given number negative', function() {
		expect(makeNegative(12)).toEqual(-12);
	});

	it('makes given number negative', function() {
		expect(makeNegative(-12)).toEqual(-12);
	});
});

describe('toCamelCase', function() {
	it('converts dash/underscore delimited words into camel casing', function() {
		expect(toCamelCase('the-stealth-warrior')).toEqual('The Stealth Warrior');
  });
  
  it('converts dash/underscore delimited words into camel casing', function() {
		expect(toCamelCase('the_best-solution')).toEqual('The Best Solution');
	});
});

describe('palindromeChainLength', function() {
	it('takes a positive number and returns the number of special steps needed to obtain a palindrome (if 87 is not 78 next step is 87 + 78 and then check this number again)', function() {
		expect(palindromeChainLength(87)).toEqual(4);
  });
  
  it('takes a positive number and returns the number of special steps needed to obtain a palindrome (if 87 is not 78 next step is 87 + 78 and then check this number again)', function() {
		expect(palindromeChainLength(12)).toEqual(1);
  });
  
  it('takes a positive number and returns the number of special steps needed to obtain a palindrome (if 87 is not 78 next step is 87 + 78 and then check this number again)', function() {
		expect(palindromeChainLength(349128)).toEqual(2);
	});
});

describe('xo', function() {
	it('returns true if the string has the same amount of x and o', function() {
		expect(xo('xo')).toEqual(true);
	});

	it('returns false if the string has not the same amount of x and o', function() {
		expect(xo('xoo')).toEqual(false);
	});

	it('returns true if the string has the same amount of x and o', function() {
		expect(xo('xor')).toEqual(true);
	});

	it('returns true if the string has the same amount of x and o', function() {
		expect(xo('xXOo')).toEqual(true);
	});
});

describe('doubleChar', function() {
	it('it a string in which each character (case-sensitive) is repeated once', function() {
		expect(doubleChar('String')).toEqual('SSttrriinngg');
	});

	it('it a string in which each character (case-sensitive) is repeated once', function() {
		expect(doubleChar('123456')).toEqual('112233445566');
	});

	it('it a string in which each character (case-sensitive) is repeated once', function() {
		expect(doubleChar('%^&*(')).toEqual('%%^^&&**((');
	});
});

describe('maps', function() {
	it('return the array with each value doubled', function() {
		expect(maps([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
	});

	it('return the array with each value doubled', function() {
		expect(maps([4, 2, 2, 4])).toEqual([8, 4, 4, 8]);
	});
});

describe('validate', function() {
	it('returns if the password is valid(6 chars,lowercase,upcase,number)', function() {
		expect(validate('djI38D55')).toEqual(true);
	});

	it('returns if the password is valid(6 chars,lowercase,upcase,number)', function() {
		expect(validate('a2.d412')).toEqual(false);
	});

	it('returns if the password is valid(6 chars,lowercase,upcase,number)', function() {
		expect(validate('Password123')).toEqual(true);
	});
});
