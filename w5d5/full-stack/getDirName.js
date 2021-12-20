//From w4d5 recipe api hackathon
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default function getDirName(importObject) {
    const __filename = fileURLToPath(importObject);
    return dirname(__filename);
}
