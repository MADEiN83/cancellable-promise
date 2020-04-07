# cancellable-promise

## installation

```bash
$ npm i stop-promise -D
```

## import

```js
import cancellablePromise from "stop-promise";
```

## make your promise cancellable

Import `stop-promise` module.

```js
import cancellablePromise from "stop-promise";
```

Import your service or other class with promise(s).

```js
import MyService from "services/your-service";
```

Make your promise cancellable.

```js
const { promise, cancel } = cancellablePromise(MyService.findItems());
```

Play with your promise as usually:

```js
promise
  .then((response) => console.log("Success!", response))
  .catch((error) => console.error("Failed...", error));
```

Cancel your promise when you want by calling `cancel` callback.

```js
cancel();
```
