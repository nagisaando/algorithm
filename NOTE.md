# Note from algorithm lesson

## Big O Rules
1. 
2. Ignore constants


### O(log N)
- log N: the time it takes to complete a task grows very slowly as the size of input (N) increases.
- O(log N) means the time grows very slowly as N increases.
- It's much faster than O(N) for large datasets.

## Binary search
1. When data-set is ordered
2. LogN or NLogN (if we are scanning the value)
3. Keep looking at a value, dividing the array in half, again looking at a value, dividing the array in half....repeating till find the value


## Linked List Data Structures
- It used heap allocated object. 
- It creates a container to put the value and can manage them. 
- deleting time, inserting time => O(1) constant time 


## Queue
- specific implementation of a linked list
- common data structure
- first in, first out (FIFO structure)
- singly linked list
- opposite => stack
- A (Head) -> B -> C -> D (Tail)

## Stack
- backwards to a queue
- A <- B <- C <- D (Head)
- Like Stack trace (stack of the functions that have been called)
- example: recursion
- Pushing and removing from the same side (single pointer head)
- Constant time operation (O of 1)


### array or linked list
- linked list, you need to walk through to find something (only linear search)
- if you need to scan a list or hop into a list of random access, array is better
- just push or pop from either head or tail -> list is better
- example: async request queue (linked list), old async complete, remove old one, add new async call

### array list 
- push(), pop(), getting value based on index => constant time O of 1
- shift(), unshift(), enqueue, dequeue => O of N, if we add/remove item from the beginning, each item needs to be shift to next index which is not cost performant

### array buffer
- Ring buffer
    - instead of index 0 as head and the length as tail (which is array list), it can have index based head and index based head
    [<-------- [                      ]------------>]
    0    Null  |                      |     Null    N
               |                      |
               head                   tail
    - pop(), push(), shift(), unshift() => constant time O of 1
    - this.tail % 2 => index of tail, if the index of tail exceeds the length N, it will go to the beginning of the array (like ring), if the array length is 10, and tail is 12 => 12 % 10 => the tail is index 2
    - if tail exceeds the head, we need resizing



## Recursion
- recursion is a function that calls itself until the problem is solved. This usually involves what is referred to as a "base case". A base case is the point in which the problem is solved at.

- it goes down the stack while recursing and goes up the stack after hit the base
```ts
function foo(n: number): number {
    // Base case
    if(n === 1) {
        return 1;
    }
    // we will recurse!
    return n + foo(n - 1);
}
```
 
- recursion can be broken down to three steps
1. pre: 
    - you can do something before recursion: 
    `n + `
2. recursion
3. post: 
    - we can do something after recursion:
    ```ts
    function foo(n: number): number {

        if(n === 1) {
            return 1;
        }
       
        const out = n + foo(n - 1);
        console.log(n) // 1, 2, 3, 4, 5  <------- post

        return out
    }
    ``` 
