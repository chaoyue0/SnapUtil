import {createDep} from "./dep";

let activeEffect = void 0;
let shouldTrack = false;
const targetMap = new WeakMap();

export class ReactiveEffect {
    active = true;
    deps = [];

    constructor(public fn, public scheduler?) {
        console.log('create ReactiveEffect')
    }

    run() {
        if (!this.active) {
            return this.fn();
        }

        shouldTrack = true;
        activeEffect = this;

        const res = this.fn();

        shouldTrack = false;
        activeEffect = undefined;

        return res;
    }

    stop() {
        if (this.active) {
            cleanupEffect(this);
        }
        this.active = false;
    }
}

function cleanupEffect(effect) {
    effect.deps.forEach((dep) => {
        dep.delete(effect);
    })
    effect.deps.length = 0;
}

export function isTracking() {
    return shouldTrack && activeEffect !== undefined;
}

export function track(target, type, key) {
    if (!isTracking()) {
        return;
    }

    let depMap = targetMap.get(target);
    if (!depMap) {
        depMap = new Map();
        targetMap.set(target, depMap);
    }

    let dep = depMap.get(key);
    if (!dep) {
        dep = createDep();
        depMap.set(key, dep);
    }

    trackEffects(dep);
}

export function trackEffects(dep) {
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.dep.push(dep);
    }
}

export function trigger(target, type, key) {
    let deps = [];

    const depMap = targetMap.get(target);

    if (!depMap) {
        return;
    }

    const dep = depMap.get(key);
    deps.push(dep);
    const effects = [];
    deps.forEach((dep) => {
        effects.push(...dep);
    })

    triggerEffects(createDep(effects));
}

export function triggerEffects(dep) {
    for(const effect of dep) {
        if (effect.scheduler) {
            effect.scheduler();
        } else {
            effect.run();
        }
    }
}

export function effect(fn, option = {}) {
    const _effect = new ReactiveEffect(fn);

    Object.assign(_effect, option);
    _effect.run();

    const runner = _effect.run().bind(_effect);
    runner.effect = _effect;
    return runner;
}