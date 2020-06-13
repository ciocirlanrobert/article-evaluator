import { handleSubmit } from './formHandler.js';


test("Testing if function", () => {
    expect(typeof handleSubmit).toBe("function");
});

test('Testing if defined', () => {
    expect(handleSubmit).toBeDefined();
});

