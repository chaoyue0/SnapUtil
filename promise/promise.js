const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executor) {
    let self = this;
    self.state = PENDING;
    self.value = null;
    self.resolvedCallbacks = [];
    self.rejectedCallbacks = [];

    function resolve(value) {
        if (self.state === PENDING) {
            self.state = FULFILLED ;
            self.value = value;
            self.resolvedCallbacks.forEach(fn => fn());
        }
    }
    function reject(reason) {
        if (self.state === PENDING) {
            self.state = REJECTED;
            self.value = reason;
            self.rejectedCallbacks.forEach(fn => fn());
        }
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

module.exports = {
    PENDING,
    FULFILLED,
    REJECTED,
    MyPromise
}