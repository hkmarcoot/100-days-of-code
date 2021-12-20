import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const APP_ROOT = path.join(__dirname, '..');

describe('Check task1 completion', () => {
    test('dotenv has been installed as devDependency', () => {
        const packageLock = fs.readFileSync(path.join(APP_ROOT, 'package.json')).toString();
        const parsedPackageJson = JSON.parse(packageLock);
        expect(parsedPackageJson.devDependencies.dotenv).toBeDefined();
    });

    test('Check that the .env file has been created', () => {
        const exists = fs.existsSync(path.join(APP_ROOT, '.env'));
        expect(exists).toEqual(true);
    });

    test('.env added to the .gitignore', () => {
        const gitIgnore = fs.readFileSync(path.join(APP_ROOT, '.gitignore')).toString();
        expect(gitIgnore).toMatch('.env');
    });

    test('dotenv preloads config', () => {
        const packageLock = fs.readFileSync(path.join(APP_ROOT, 'package.json')).toString();
        expect(packageLock).toMatch('node -r dotenv/config');
    });
});
