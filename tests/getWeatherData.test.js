const { getWeatherData } = require('../server/helpers/getWeatherData.js');

test('getWeatherData helper gets data for a valid zipcode', async () => {
    let response = await getWeatherData('94568');
    expect(typeof response).toBe('object');
})

test('getWeatherData helper returns an error for an invalid zipcode', async () => {
    await expect(getWeatherData('1'))
    .rejects
    .toThrow('Request failed with status code 400');
})

test('getWeatherData helper returns the data in the correct shape', async () => {
    let response = await getWeatherData('94568')
    let keys = Object.keys(response);
    expect(keys).toHaveLength(4);
    expect(keys).toContain('city');
    expect(keys).toContain('conditions');
    expect(keys).toContain('high_temp');
    expect(keys).toContain('low_temp');
})