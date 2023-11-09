const { getTopLevelDomain } = require('./get-top-level-domain');

test('getTopLevelDomain returns the top level domain', () => {
    const url = 'https://www.google.com';
    const result = getTopLevelDomain(url);
    expect(result).toBe('com');

    const url2 = 'https://www.google.co.uk';
    const result2 = getTopLevelDomain(url2);
    expect(result2).toBe('uk');
});