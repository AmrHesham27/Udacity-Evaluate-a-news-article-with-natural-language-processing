import { handleSubmit } from '../client/js/formHandler'

describe('Test, Does function handleSubmit() exist?' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    })
});
describe('Test, is this a function?' , () => {
    test('It should return true', async () => {
        expect(typeof handleSubmit).toBe('function')
    })
});


