import {MyPromise} from "./promise";

MyPromise.prototype.all = function (promises) {
    return new MyPromise((resolve, reject) => {
       let index = 0;
       let result = [];

       if (promises.length === 0) {
           resolve(result);
       } else {
           const processValue = (i, data) => {
                result[i] = data;
                if (++index === promises.length) {
                    resolve(result);
                }
           };

            for(let i = 0; i < promises.length; i++) {
                let p = promises[i];
                if (p && typeof p.then === 'function') {
                    p.then(data => {
                        processValue(i, data);
                    }, err => {
                        reject(err);
                        return;
                    });
                } else {
                    processValue(i, p);
                }
            }
       }
    });
}