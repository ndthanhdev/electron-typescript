import dev from "./configureStore.dev";
import prod from "./configureStore.prod";

const isDevMode = process.execPath.match(/[\\/]electron/);
let output = null;

if (isDevMode) {
    output = dev;
} else {
    output = prod;
}

export default { ...output };