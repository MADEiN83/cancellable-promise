const cancellablePromise = <T>(
  promise: Promise<T>
): {
  promise: Promise<T>;
  cancel: () => void;
} => {
  let cancelled = false;

  const newPromise = new Promise<T>((resolve, reject) => {
    promise
      .then((response) => {
        if (!cancelled) {
          resolve(response);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          reject(error);
        }
      });
  });

  return {
    promise: newPromise,
    cancel: () => {
      cancelled = true;
    },
  };
};

export default cancellablePromise;
