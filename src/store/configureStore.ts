import * as dev from "./configureStore.dev";
import * as prod from "./configureStore.prod";

const isDevMode = process.execPath.match(/[\\/]electron/);
let configureStore = null,
    history = null;

if (isDevMode) {
    configureStore = dev.configureStore;
    history = dev.history;
} else {
    configureStore = prod.configureStore;
    history = prod.history;
}

export { configureStore, history };