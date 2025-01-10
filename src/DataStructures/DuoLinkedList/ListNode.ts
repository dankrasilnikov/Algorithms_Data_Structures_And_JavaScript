import type {ListNodeType} from "./types";

export class ListNode {
    value: ListNodeType;
    next: ListNode | null;

    constructor(value: ListNodeType) {
        this.value = value;
        this.next = null;
    }

    getValue = (): ListNodeType => {
        return this.value;
    };
}
