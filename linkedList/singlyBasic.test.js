import { LinkedList,LinkedListItem } from './singlyBasic';

//traversion
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

// insertion
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
        LL.insertItemInMiddle(3, 1);
        const output = LL.traverse();
        expect(output).toBe('');
    });

    test('insert in middle', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemInMiddle(3, 1);
        const output = LL.traverse();
        expect(output).toBe('1 3 2');
    });

    test('insert in middle', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemInMiddle(4, 2);
        const output = LL.traverse();
        expect(output).toBe('1 2 4');
    });

    test('insert in middle > large data', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemAtEnd(3);
        LL.insertItemAtEnd(4);
        LL.insertItemAtEnd(5);
        LL.insertItemInMiddle(3, 3);
        const output = LL.traverse();
        expect(output).toBe('1 2 3 3 4 5');
    });
});

// deletion
describe('delete item from end', () => {
    test('when list is empty', () => {
        const LL = new LinkedList();
        LL.deleteFromEnd();
        const output = LL.traverse();
        expect(output).toBe('');
    });

    test('when list is not empty', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemAtEnd(3);
        LL.deleteFromEnd();
        const output = LL.traverse();
        expect(output).toBe('1 2');
    });
});

describe('delete item from start', () => {
    test('when list is empty', () => {
        const LL = new LinkedList();
        LL.deleteFromStart();
        const output = LL.traverse();
        expect(output).toBe('');
    });

    test('when list is not empty', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemAtEnd(3);
        LL.deleteFromStart();
        const output = LL.traverse();
        expect(output).toBe('2 3');
    });
});

describe('delete item from middle', () => {
    test('when list is empty', () => {
        const LL = new LinkedList();
        LL.deleteFromMiddle(1);
        const output = LL.traverse();
        expect(output).toBe('');
    });

    test('when list is not empty', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemAtEnd(3);
        LL.deleteFromMiddle(1);
        const output = LL.traverse();
        expect(output).toBe('1 3');
    });
});

describe('reverse', () => {
    test('reverse with single element', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.reverse();
        const output = LL.traverse();
        expect(output).toBe('1');
    });

    test('reverse LL', () => {
        const LL = new LinkedList();
        LL.insertItemAtEnd(1);
        LL.insertItemAtEnd(2);
        LL.insertItemAtEnd(3);
        LL.insertItemAtEnd(4);
        LL.insertItemAtEnd(5);
        LL.reverse();
        const output = LL.traverse();
        expect(output).toBe('5 4 3 2 1');
    });

})