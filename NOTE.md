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


