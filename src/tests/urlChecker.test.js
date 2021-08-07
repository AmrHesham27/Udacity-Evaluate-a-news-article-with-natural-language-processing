import {validURL} from '../client/js/urlChecker'

describe('Test, Does the function validURL() exist?' , () => {
    test('this should return true', async () => {
        expect(validURL).toBeDefined();
    });
});
describe('Test, is validURL() a function?' , () => {
    test('this should return true', async () => {
        expect(typeof validURL).toBe('function');
    });
});
describe('Test, Does validURL() work fine with Invalid URL' , () => {
    var url = "htps://www.facebook.com";
    test('It should return false', async () => {
        const response = validURL(url);
        expect(response).toBe(false);
    });
});
describe('Test, Does validURL() work fine with valid URL' , () => {
    var url = "https://www.facebook.com";
    test('It should return true', async () => {
        const response = validURL(url);
        expect(response).toBe(true);
    });
});
describe('Test, Does validURL() work fine with valid URL' , () => {
    var url = "https://www.google.com";
    test('It should return true', async () => {
        const response = validURL(url);
        expect(response).toBe(true);
    });
});
