import cancellablePromise from "../index";

describe("Tests", () => {
  it("should run the promise & wait for result", (done) => {
    const aPromise = new Promise<boolean>((resolve) =>
      setTimeout(resolve, 500)
    );
    const { promise } = cancellablePromise<boolean>(aPromise);
    promise.then(() => done()).catch((err) => done.fail());
  });

  it("should run the promise and not wait for result", (done) => {
    const aPromise = new Promise<boolean>((resolve) =>
      setTimeout(resolve, 500)
    );
    const { promise, cancel } = cancellablePromise<boolean>(aPromise);
    promise.then(() => done()).catch((err) => done.fail());

    setTimeout(() => {
      done();
    }, 600);

    cancel();
  });
});
