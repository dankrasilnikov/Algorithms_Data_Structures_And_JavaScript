import { ListNode } from "./ListNode";
import type { ListNodeType } from "./types";

export class LinkedList {
    head: ListNode | null;
    size: number;
    idCounter: number;

    constructor() {
        this.head = null;
        this.size = 0;
        this.idCounter = 0;
    }

    addNode() {
        const newNode = new ListNode(this.idCounter++);

        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.size++;
    }

    findNode(value: ListNodeType): number | null {
        if (!this.head) return null;

        let currentNode = this.head;
        let nodePosition = 0;

        // Поиск узла с нужным значением
        while (currentNode && currentNode.value !== value) {
            currentNode = currentNode.next;
            nodePosition++;
        }

        // Если узел не найден
        if (!currentNode) {
            console.log('Node with value not found');
            return null;
        }

        console.log(`Found node with value ${value} at position ${nodePosition}`);
        return nodePosition;
    }

    deleteNode (value: ListNodeType): boolean {
        if (!this.head) return false;

        // Специальный случай: удаление головы
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        // Найти предыдущий узел перед удаляемым узлом
        let previousNode = this.head;
        while (previousNode.next && previousNode.next.value !== value) {
            previousNode = previousNode.next;
        }

        // Если узел не найден
        if (!previousNode.next) {
            console.log('Node with value not found');
            return false;
        }

        // Удаление узла
        previousNode.next = previousNode.next.next;
        this.size--;
        return true;
    }

    getNodeByPosition(position: number): ListNode | null {
        if (position < 0 || position >= this.size) return null;

        let currentNode = this.head;
        for (let i = 0; i < position; i++) {
            if (!currentNode) return null;
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

const linkedList = new LinkedList();

for(let i = 0; i<10; i++) {
    linkedList.addNode();
}

console.log(linkedList);
const isNodeDeleted = linkedList.deleteNode(5);

console.log(linkedList);
console.log(isNodeDeleted);
if(!isNodeDeleted) console.log('not found');
else console.log('deleted successfully')

const prototype = Object.getPrototypeOf(linkedList);
const properties = Object.getOwnPropertyNames(prototype);

console.log(properties);
