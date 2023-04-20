const countDown = require("../src/countDown");

describe("countDown", () => {
    test("должен выводить числа от n до 1", () => {
        const n = 5;
        console.log = jest.fn();
        countDown(n);
        expect(console.log).toHaveBeenCalledTimes(n);
        for (let i = n; i > 0; i--) {
            expect(console.log).toHaveBeenCalledWith(i);
        }
    });

    test("должен выдавать ошибку, когда n не является числом", () => {
        const n = "не число";
        expect(() => countDown(n)).toThrowError("n должно быть числом");
    });

    test("не должен выводить ничего, когда n меньше или равно 0", () => {
        const n = -1;
        console.log = jest.fn();
        countDown(n);
        expect(console.log).not.toHaveBeenCalled();
    });

    test("не должен выводить ничего, когда n не является целым числом", () => {
        const n = 3.5;
        console.log = jest.fn();
        countDown(n);
        expect(console.log).not.toHaveBeenCalled();
    });
});