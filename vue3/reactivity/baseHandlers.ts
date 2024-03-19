import {isObject} from "../../libs/type/general";
import {readonly, reactive} from "./reactive";
import { track, trigger } from './effect';

const get = createGetter();
const set = createSetter();
const readonlyGet = createGetter(true);

function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        const res = Reflect.get(target, key, receiver);

        if (!isReadonly) {
            track(target, 'get', key);
        }

        if (shallow) {
            return res;
        }

        if (isObject(res)) {
            return isReadonly ? readonly(res) : reactive(res);
        }

        return res;
    }
}

function createSetter() {
    return function set(target, key, value, receiver) {
        const res = Reflect.set(target, key, value, receiver);

        trigger(target, 'set', key);

        return res;
    }
}

export const mutableHandlers = {
    get,
    set,
};

export const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        console.warn(
            `Set operation on key "${String(key)}" failed: target is readonly.`,
            target
        );
        return true;
    }
};