const webWorker = new Worker("./worker.js");

webWorker.postMessage(10);

webWorker.onmessage = (event) => {
  console.log("Wow! Web worker has responded to me!", event.data);
  webWorker.terminate();
};

webWorker.onerror = function (error) {
  console.error("Ошибка при загрузке Web Worker:", error);
};

console.log("Test");
