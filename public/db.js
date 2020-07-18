let db,
      tx,
      store;

const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(e) {
    const db = request.result;
    db.createObjectStore("budget", { keyPath: "_id" });
};

request.onerror = function(e) {
    console.log("There was an error");
};

request.onsuccess = function(e) {
    db = request.result;
    tx = db.transaction("budget", "readwrite");
    store = tx.objectStore("budget");
}