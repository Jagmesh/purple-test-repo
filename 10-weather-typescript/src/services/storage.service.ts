import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

export async function saveKeyValue(key: string, value: string): Promise<void> {
    let data: IArgs = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file.toString());
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
};

export async function getKeyValue(key: string): Promise<null | string> {
    if (!await isExist(filePath)) return null;

    const file = await promises.readFile(filePath);
    const data = JSON.parse(file.toString());
    return data[key];
};

export async function deleteKey(key: string): Promise<void> {
    if (!await isExist(filePath)) return;

    const file = await promises.readFile(filePath);
    const data = JSON.parse(file.toString());
    delete data[key];

    await promises.writeFile(filePath, JSON.stringify(data));
};

async function isExist (path: string): Promise<boolean> {
    try {
        await promises.stat(path);
        return true;
    } catch (e) {
        return false;
    }
};