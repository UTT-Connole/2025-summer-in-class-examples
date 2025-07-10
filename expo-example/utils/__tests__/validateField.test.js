
import validateField from "../validateField.js";

describe('validateField tests', () => {
    it('should return undefined by default', () => {
        expect(validateField()).toBeUndefined();
    });
})