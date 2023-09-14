export const stringToArray = (str: string) => {
    return str.split('');
}

export const charStartIndex = (str: string, char: string) => {
    let index = 0;
    const arr = stringToArray(str);
    for (let item of arr) {
        if (item === char) {
            index++;
        } else {
            return index;
        }
    }
    return index;
}

export const charEndIndex = (str: string, char: string) => {
    let index = str.length - 1;
    const arr = stringToArray(str).reverse();
    for (let item of arr) {
        if (item === char) {
            index--;
        } else {
            return index;
        }
    }
    return index;
}

export const trimPlus = (str: string, char?: string) => {
    if (str && char === undefined) {
        return str.trim();
    }
    const start = charStartIndex(str, char);
    const end = charEndIndex(str, char) + 1;
    return str.slice(start, end);
}

export const trimStartPlus = (str: string, char?: string) => {
    if (str && char === undefined) {
        return str.trimStart();
    }
    const start = charStartIndex(str, char);
    return str.slice(start);
}

export const trimEndPlus = (str: string, char?: string) => {
    if (str && char === undefined) {
        return str.trimEnd();
    }
    const end = charEndIndex(str, char);
    return str.slice(0, end);
}