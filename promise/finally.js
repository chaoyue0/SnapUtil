const {MyPromise} = require("./promise");

MyPromise.finally = function (callback) {
    return this.then(value => {
        return MyPromise.resolve(callback()).then(() => {
            return value;
        });
    },err => {
        return MyPromise.resolve(callback()).then(() => {
            throw err;
        });
    });
}