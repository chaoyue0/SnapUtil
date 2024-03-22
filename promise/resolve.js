const {MyPromise} = require("./promise");

MyPromise.resolve = function (promise) {
    if (promise instanceof Promise) {
        return promise;
    }
    return new MyPromise((resolve, reject) => {
        if (promise && promise.then && typeof promise.then === 'function') {
            setTimeout(() => {
                promise.then(resolve, reject);
            });
        } else {
            resolve(promise);
        }
    });
}