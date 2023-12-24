import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

export async function saveKeyValue(key, value) {
    let data = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
};

export async function getKeyValue(key){
    if (!await isExist(filePath)) return null;

    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
};

export async function deleteKey(key){
    if (!await isExist(filePath)) return null;

    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    delete data[key];

    await promises.writeFile(filePath, JSON.stringify(data));
};

async function isExist (path) {
    try {
        await promises.stat(path);
        return true;
    } catch (e) {
        return false;
    }
};