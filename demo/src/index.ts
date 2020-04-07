import cancellablePromise from "stop-promise";

const aPromise = new Promise((resolve) => setTimeout(resolve, 1000));

const { promise, cancel } = cancellablePromise(aPromise);

promise.then(() => console.log("Success!"));

/*
 * Uncomment to kill the promise.
 */
// cancel();
