const { formatWeatherData } = require('../server/helpers/formatWeatherData.js');
const { wrongShapeRawData1, wrongShapeRawData2, wrongShapeRawData3} = require('./sampleData.js');

test('formatWeatherData helper returns n/a for any data fields that are missing in rawData', () => {

    let wrongDataSets = [wrongShapeRawData1, wrongShapeRawData2, wrongShapeRawData3];
    wrongDataSets.forEach((dataSet, index) => {
        let response = formatWeatherData(dataSet);
        let keys = Object.keys(response);
        expect(keys).toHaveLength(4);
        expect(keys).toHaveLength(4);
        expect(keys).toContain('city');
        expect(keys).toContain('conditions');
        expect(keys).toContain('high_temp');
        expect(keys).toContain('low_temp');
        if (index === 0 && response['conditions']) {
            expect(response['conditions']).toBe("n/a");
        }
        if (index === 1 && response['high_temp']) {
            expect(response['high_temp']).toBe('n/a');
            expect(response['low_temp']).toBe('n/a');
        }
        if (index === 2 && response['city']) {
            expect(response['city']).toBe('n/a');
        }
    })
})

test('formatWeatherData helper returns the formatted data in the correct shape', () => {
    let response = formatWeatherData('94568')
    let keys = Object.keys(response);
    expect(keys).toHaveLength(4);
    expect(keys).toContain('city');
    expect(keys).toContain('conditions');
    expect(keys).toContain('high_temp');
    expect(keys).toContain('low_temp');
})