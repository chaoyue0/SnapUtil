import {isObject} from "../../libs/type/general";
import {reactive} from "./reactive";
import {createDep} from "./dep";
import {isTracking, trackEffects, triggerEffects} from "./effect";

export class RefImpl {
    private _rawValue;
    private _value;
    public dep;

    constructor(value) {
        this._rawValue = value;
        this._value = convert(value);
        this.dep = createDep();
    }

    get value() {
        trackRefValue(this);
        return this._value;
    }

    set value(newValue) {
        if (hasChanged(this._rawValue, newValue)) {
            this._rawValue = newValue;
            this._value = convert(newValue);
            triggerRefValue(this);
        }
    }
}

export function convert(value) {
    return isObject(value) ? reactive(value) : value;
}

export function hasChanged(value, newValue) {
    return !Object.is(value, newValue);
}

export function trackRefValue(ref) {
    if (isTracking()) {
        trackEffects(ref.dep);
    }
}

export function triggerRefValue(ref) {
    triggerEffects(ref.dep);
}