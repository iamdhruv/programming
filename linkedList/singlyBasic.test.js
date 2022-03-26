import { LinkedList,LinkedListItem } from './singlyBasic';

describe('traverse a linked list', () => {
    test('when list is not empty', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemAtEnd(3);
        LL.insertItemAtEnd(4);
        const output = LL.traverse();
        expect(output).toBe('1 2 3 4');
    });

    test('when list is empty', () => {
        const LL = new LinkedList();
        const output = LL.traverse();
        expect(output).toBe('');
    });
});

describe('insert item at end', () => {
    test('when list is empty', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        const output = LL.traverse();
        expect(output).toBe('1');
    });

    test('when list is not empty', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemAtEnd(3);
        const output = LL.traverse();
        expect(output).toBe('1 2 3');
    });
});

describe('insert item at start', () => {
    test('when list is empty', () => {
        const LL = new LinkedList();
        LL.insertItemAtStart(1);
        const output = LL.traverse();
        expect(output).toBe('1');
    });

    test('when list is not empty', () => {
        const LL = new LinkedList();
        LL.insertItemAtStart(1);
        LL.insertItemAtStart(2);
        LL.insertItemAtStart(3);
        const output = LL.traverse();
        expect(output).toBe('3 2 1');
    });
});

describe('insert item in middle', () => {
    test('when list is empty', () => {
        const LL = new LinkedList();
        LL.insertItemInMiddle(1, 0);
        const output = LL.traverse();
        expect(output).toBe('1');
    });

    test('when list is not empty > insert in start', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemInMiddle(3, 0);
        const output = LL.traverse();
        expect(output).toBe('3 1 2');
    });
});