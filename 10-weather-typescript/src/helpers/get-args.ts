export function getArguments(args: string[]): IArgs {
    const res: IArgs = {};
    const [,, ...rest] = args;
    let currentKey: string;

    rest.forEach((value, index, array) => {
        if(!value.match('^-[a-z]') && currentKey) {
            res[currentKey] += value + ' '
            return;
        }
        currentKey = value.substring(1);
        res[currentKey] = ''
    });

    for (const resKey in res) {
        if(!res[resKey]) {
            res[resKey] = true;
        } else {
            res[resKey] = res[resKey].toString().trim()
        }
    }

    return res;
}