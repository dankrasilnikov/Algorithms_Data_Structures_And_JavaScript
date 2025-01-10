import {LinkedList} from "../LinkedList/LinkedList";

const defaultHashTableSize = 32;

class HashTable {
    private buckets;
    private keys = {};

    constructor(hashTableSize = defaultHashTableSize) {
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    }

    hash(key) {
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
            0,
        );

        return hash % this.buckets.length;
    }

    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.findNode({ callback: (nodeValue) => nodeValue.key === key })
    }
}
