export enum Status  {
    PENDING = 'pending',
    FULFILLED  = 'fulfilled',
    REJECTED = 'rejected',
}

export function MyPromise(exector) {
    let self = this;
    self.state = Status.PENDING;
    self.value = null;
    self.resolvedCallbacks = [];
    self.rejectedCallbacks = [];

    function resolve(value) {
        if (self.state == Status.PENDING) {
            self.state = Status.FULFILLED ;
            self.value = value;
            self.resolvedCallbacks.forEach(fn => fn());
        }
    }
    function reject(value) {
        if (self.state == Status.PENDING) {
            self.state = Status.REJECTED;
            self.value = value;
            self.rejectedCallbacks.forEach(fn => fn());
        }
    }

    try {
        exector(resolve, reject);
    } catch (e) {
        reject(e);
    }
}