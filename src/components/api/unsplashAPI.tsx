
import Unsplash, { toJson } from 'unsplash-js';
import env from 'env.json'

export const unsplash1 = new Unsplash({ accessKey: "sDI3L3I2mgA91a4deHN4BevefU63v8_yMhgYmrtHy6k"});

export const unsplash = new Unsplash({ accessKey: env.API_KEY });