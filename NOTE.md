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

- When to use it? 
  - when there is branching factor, for example, maze has 4 possible directions: left, right, bottom, top
  - when you can not do loop 



## Quick Sort

### Divide and Conquer
- being able to split your input in to two chunks, three, four .... , and go over those smaller subsets and solve things faster. 
- it becomes smaller till to something fundamental unit
- once it gets the point, the array is sorted (one element of the array is always sorted) and just undo the splitting and merging back to the one array (Merge sort)

Quick sort works as the concept of divide and conquer
```
[                                     ] 
0                                     N
```
and we decide pivot point (P)
and walk through the elements from the beginning of the array. 

if the element is smaller than or equal to the pivot, the element is placed in the beginning. 
eventually it becomes like the array of left elements that are smaller or equal to P and right elements that are bigger than P, and P is somewhere in the middle
```
 [ --------------- <= P <--------------- ]
```

 then split to two item (P won't be included since it is already sorted)
 ```
 [ ------- (New Pivot)-------- ] P [---------(P)------ ]
```

and repeat the same process till it becomes the single element of array, which means all the elements are sorted. 

We will need recursion since there are branching factor (one array divided to two, get sorted, two arrays becomes four, etc etc) 

### Big O
the most of case => n log of N
the worst case => O of N squared


## Tree

### Terminology
- root - the most parent node. The First. Adam.
- height - The longest path from the root to the most child node
- binary tree - a tree in which has at most 2 children, at least 0 children
- general tree - a tree with 0 or more children
- binary search tree - a tree in which has a specific ordering to the nodes and at most 2 children
- leaves - a node without children
- balanced - A tree is perfectly balanced when any node's left and right children have the same height.
- branching factor - the amount of children a tree has.

### Traversals
there are different ways in which you can visit the nodes of a tree.

#### Depth First Search
These types of traversal are known as "Depth First Search"
=> It is run as "stack"

- pre order: visit node first (we will do something for root node first)
- in order: visit node in the middle (we will do something for root node in the middle)
- post order: visit node in the end (we will do something for root node in the end)


#### Breadth First search
Also there is another one called Breadth First search which is opposite to Depth First Search and uses Queue 

- we don't need to recurse the tree. 
- Queue (first in first out) <-> Stack (first in last out) 
- tree level kind of visiting 
- O of N but If we use javascript array, it will be O of N square, because we have to use shift, unshift which is O of N and not efficient 


The difference of Breadth First Search and Depth First Search is **"Depth First Search preserves the shape of traversal"**.
That means we can also use it to compare the two binary structure equivalence a


### Binary Search Three
- it is not new data structure, it is specifically a ordering to the data within the data structure
- It is a binary tree, but there is one rule: 
    - left of the node needs to be less than or equal to the node
    - right side needs to be greater than the node
```   
    <=              <
<-----------[17]------------>
           /    \
        [15]    [50]
        / \      /
      [4] [16] [25] 
                  \
                  [26-50] <---- no bigger than 50 because this is left three of node 50 so needs to be smaller or equal to 50
          
```

- find: log n - n 
```js
    find(node, value): bool {
        if(!node) {
            return false
        }
        if(node.value === value) {
            return true
        }
        if(node.value < value) {
            return find(node.right, value)
        }
        return find(node.left, value)
    }
```

- insert: insert value where there is no node
```js
function find(node, value) {
    if(node === null) {
        return { value: v }
    } 
    if(node.value < value) {
        node.right = insert(node.right, value)
    } else {
        node.left = insert(node.left, value)
    }
}
```

- delete
  - case 1: delete a node that has no child
            => delete
    ```   
        <=              <
    <-----------[17]------------>
            /    \
            [15]    [50]
            / \      /
          [4] [16] [25] 
                     \
                    [26] <----------
    ```


  - case 2: delete a node that has one child 
            delete a node, and set the child (26) to parent (50)
    ```   
        <=              <
    <-----------[17]------------>
                /    \
            [15]    [50]
            / \      /
          [4] [16] [25] <----------
                      \
                       [26] 
    ```


  - case 3: delete a node that has children

    ```   
        <=              <
    <-----------[17]------------>
               /    \
            [15]    [50] <--------------------
            / \      /  \
          [4] [16] [25] [100]
                     \
                     [37]
    ```

    [option 1] - replace with the largest element of the left tree (smaller side)

    1. delete a node
    2. take a left side of the deleted note (smaller side), and find the largest element.
    3. set to where the deleted node is
    [NOTE]: 
    if we keep going the smaller side of the node, and keep going right, **there will be only one child or no child**. If there is a child, we have to apply "case 2" before along with replacing the place of the largest node of the left tree
    ```   
        <=              <
    <-----------[17]------------>
               /    \
            [15]    [37] <--------------------
            / \      /  \
          [4] [16] [25] [100]
    ```



    [option 2] - replace with the smallest element of the right tree (bigger side)

    1. delete a node
    2. take a right side of the deleted note (bigger side), and find the smallest element.
    3. set to where the deleted node is
    [NOTE]: 
    if we keep going the bigger side of the node, and keep going left, **there will be only one child or no child**. If there is a child, we have to apply "case 2" before along with replacing the place of the smallest node of the right tree
    ```   
        <=              <
    <-----------[17]------------>
               /    \
            [15]    [100] <------------------
            / \      /  
          [4] [16] [25] 
                     \
                     [37]
    ```

    [NOTE]: depends on the height of the tree, it is better to replace with the tree that has more height, which can shrink the height of tree, and will be more organized


- Q: What are some practical use cases for Binary Search Trees?: 
 => A: BSTs excel at searching lists of data (e.g. arrays/maps/sets) where the data is changing frequently (adding and removed). For example, file systems (quickly locate files and directories) or text autocomplete (efficiently store and search through large dictionaries of words). 


 ## Heap
 ### Heap data structure (Priority queue)
 - Binary tree where every child and grand child is smaller (MaxHeap), or larger(MinHeap) than the current node
 - Whenever a node is added, we must adjust the tree
 - Whenever a node is deleted. we must adjust the tree
 - There is no traversing the tree

 - Heap maintains **weak ordering**, means not perfectly ordered
 - Heap is usually full or complete tree, and filled from left
 ```
 Minheap - heap condition: every node below the top must be larger than or technically equal to
                [50] <- minimum item is the root            
               /    \
            [71]    [100] 
            / \      /  \
        [101] [80] [200] [101]
```

 ```
 Maxheap - heap condition: every node below the top must be smaller 
                [50] <--- maximum item is the root        
               /    \
            [25]    [40] 
            / \      / \
        [24] [10] [20] [30]
```
- Add node
Add the node in the end of the tree, and bubbling up to the appropriate place
```
// minHeap
                [50] <- minimum item is the root            
               /    \
            [71]    [100] 
            / \      /  \
        [101] [80] [200] [101]
        / 
      [3] <---- new node, which will be swap the position with 101, then 71, then 50 (heapify up)
```

- Delete node
take the last node of the tree [101] and put it to where the node was deleted [3] and we have heapify it down to put it into a correct spot
```
// minHeap
                [3] <- delete           
               /    \
            [50]    [100] 
            / \      /  \
        [71] [80] [200] [101]
        /  
      [101]
```
=> 
```
// minHeap
                [101]       
               /    \
            [50]    [100] <------ since 50 is smaller, swap the position of 101 and 50
            / \      /  \
        [71] [80] [200] [101]  <------ repeat with 71 and 80
```

```
// minHeap
                [50]       
               /    \
            [71]    [100] 
            / \      /  \
    --->[101] [80][200] [101]  
```

Getting the position of the node, we can think the tree as array
```
[50, 71, 100, 101, 80, 200, 101]
```
To get child of the node: 
2i + 1: to get the left child of the node
2i + 2: to get the right child of the node

Example: 
For node 100 (index is 2)
2*2 + 1 = index 5 => 200 is left child 
2*2 + 2 = index 6 => 101 is right child

To get parent of the node: 
(i - 1) / 2 and get only integer part (Real programming language does not JS so we need to Math.trunc())
Example: 
For node 200 and 201
(5(index of 200) - 1) / 2 = index 2 => 100 is the parent
(6(index of 101) - 1) / 2 = index 2 (we don't consider the part of decimals) => 100 is the parent

Getting the end of node => the length of the tree