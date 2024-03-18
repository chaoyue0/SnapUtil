/**
 * Determine whether a value belongs to a certain reference type
 *
 * @param  instance An any type variable
 * @param  target An function type variable
 * @return  Boolean Return a boolean value
 * @example
 *
 * myInstanceof([], Array) // => true
 */

const myInstanceof = (instance: any, target: Function) => {
    const targetProto = target.prototype;
    let instanceProto = instance.__proto__;
    while(instanceProto) {
        if (instanceProto == targetProto) {
            return true;
        }
        instanceProto = instanceProto.__proto__;
    }
    return false;
}

export default myInstanceof;