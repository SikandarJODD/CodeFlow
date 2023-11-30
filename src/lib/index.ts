import { onMount } from "svelte";
import { writable, derived } from "svelte/store";

// place files you want to import through the `$lib` alias in this folder.
export let webdata = writable(
    [

        {
            title: 'Array and Hashing',
            problems: [

                {
                    id: 1,
                    status: false,
                    problem: 'Contains Duplicate',
                    link: 'https://leetcode.com/problems/contains-duplicate/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,sorting'
                },
                {
                    id: 2,
                    status: false,
                    problem: `Valid Anagram`,
                    link: 'https://leetcode.com/problems/valid-anagram/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,string,sorting'
                },
                {
                    id: 3,
                    status: false,
                    problem: `Two Sum`,
                    link: 'https://leetcode.com/problems/two-sum/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table'
                },
                {
                    id: 4,
                    status: false,
                    problem: 'Group Anagrams',
                    link: 'https://leetcode.com/problems/group-anagrams/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,sorting,string'
                },
                {
                    id: 5,
                    status: false,
                    problem: 'Top K Frequent Elements',
                    link: 'https://leetcode.com/problems/top-k-frequent-elements/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,Heap,Sorting'
                },
                {
                    id: 6,
                    status: false,
                    problem: 'Product of Array Except Self',
                    link: 'https://leetcode.com/problems/product-of-array-except-self/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,prefix sum'
                },
                {
                    id: 7,
                    status: false,
                    problem: 'Valid Sudoku',
                    link: 'https://leetcode.com/problems/valid-sudoku/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,Matrix'
                },
                {
                    id: 8,
                    status: false,
                    problem: 'Longest Consecutive Sequence',
                    link: 'https://leetcode.com/problems/longest-consecutive-sequence/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,Union Find'
                },
                {
                    id: 150,
                    status: false,
                    problem: 'Can Place Flowers ',
                    link: 'https://leetcode.com/problems/can-place-flowers/description/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,greedy'
                },
                {
                    id: 151,
                    status: false,
                    problem: 'Number of laser Beams',
                    link: 'https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/',
                    difficulty: 'Medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,Math,string,matrix'
                },
                {
                    id: 152,
                    status: false,
                    problem: 'Design Browser History',
                    link: 'https://leetcode.com/problems/design-browser-history/',
                    difficulty: 'Medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,Design'
                },
            ]

        },
        {
            title: 'Two Pointers',
            problems: [
                {
                    id: 9,
                    status: false,
                    problem: 'Valid Palindrome',
                    link: 'https://leetcode.com/problems/valid-palindrome/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'two pointers,string'
                },
                {
                    id: 10,
                    status: false,
                    problem: 'Two Sum || Input Array is Sorted',
                    link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,two pointers, binary search'
                },
                {
                    id: 11,
                    status: false,
                    problem: '3Sum',
                    link: 'https://leetcode.com/problems/3sum/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,two pointers,sorting'
                },
                {
                    id: 12,
                    status: false,
                    problem: 'Container with Most water',
                    link: 'https://leetcode.com/problems/container-with-most-water/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,two pointers,greedy'
                },
                {
                    id: 13,
                    status: false,
                    problem: 'Trapping Rain Water',
                    link: 'https://leetcode.com/problems/trapping-rain-water/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,two pointers, dp,stack,monotonic stack'
                },
                {
                    id: 166,
                    status: false,
                    problem: 'rearrange array elements by sign',
                    link: 'https://leetcode.com/problems/rearrange-array-elements-by-sign/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,two pointers'
                },
                {
                    id: 167,
                    status: false,
                    problem: 'find median from data stream',
                    link: 'https://leetcode.com/problems/find-median-from-data-stream/description/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,two pointers,design,heap'
                },
            ]
        },
        {
            title: 'Stack',
            problems: [
                {
                    id: 140,
                    status: false,
                    problem: 'Valid Parantheses',
                    link: 'https://leetcode.com/problems/valid-parentheses/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,stack'
                },
                {
                    id: 14,
                    status: false,
                    problem: 'Min Stack',
                    link: 'https://leetcode.com/problems/min-stack/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'stack,design'
                },
                {
                    id: 15,
                    status: false,
                    problem: 'Generate Parantheses',
                    link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,daynamic programming,backtracking'
                },
                {
                    id: 16,
                    status: false,
                    problem: 'Daily Temperatures',
                    link: 'https://leetcode.com/problems/daily-temperatures/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,stack,monotonic stack'
                },
                {
                    id: 17,
                    status: false,
                    problem: 'Car Fleet',
                    link: 'https://leetcode.com/problems/car-fleet/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,stack,sorting,monotonic stack'
                },
                {
                    id: 18,
                    status: false,
                    problem: 'Largest Rectangle in Histogram',
                    link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,stack,monotonic stack'
                },
                {
                    id: 168,
                    status: false,
                    problem: 'Implement stack using queues',
                    link: 'https://leetcode.com/problems/implement-stack-using-queues/description/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,stack,queue'
                },
                {
                    id: 169,
                    status: false,
                    problem: 'Online stock span',
                    link: 'https://leetcode.com/problems/online-stock-span/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,stack,monotonic stack'
                },

            ]
        },
        {
            title: 'Binary Seach',
            problems: [
                {
                    id: 19,
                    status: false,
                    problem: 'Binary Search',
                    link: 'https://leetcode.com/problems/binary-search/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search'
                },
                {
                    id: 161,
                    status: false,
                    problem: 'Capacity to ship packages within d days',
                    link: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search'
                },
                {
                    id: 162,
                    status: false,
                    problem: 'Search Suggestion System',
                    link: 'https://leetcode.com/problems/search-suggestions-system/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search,string'
                },
                {
                    id: 163,
                    status: false,
                    problem: 'Minimum days to make m bouquets',
                    link: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search'
                },
                {
                    id: 164,
                    status: false,
                    problem: 'magnetic force between two balls',
                    link: 'https://leetcode.com/problems/magnetic-force-between-two-balls/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search,sorting'
                },
                {
                    id: 165,
                    status: false,
                    problem: 'Minimum time to complete trips',
                    link: 'https://leetcode.com/problems/minimum-time-to-complete-trips/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search'
                },
                {
                    id: 20,
                    status: false,
                    problem: 'Search a 2D Matrix',
                    link: 'https://leetcode.com/problems/search-a-2d-matrix/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search,matrix'
                },
                {
                    id: 21,
                    status: false,
                    problem: 'Koko Eating Banans',
                    link: 'https://leetcode.com/problems/koko-eating-bananas/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search'
                },
                {
                    id: 22,
                    status: false,
                    problem: 'Find Minimum in Rotated Sorted Array',
                    link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search'
                },
                {
                    id: 23,
                    status: false,
                    problem: 'Search in Rotated Sorted Array',
                    link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search'
                },
                {
                    id: 24,
                    status: false,
                    problem: 'Time Based Key Value Store',
                    link: 'https://leetcode.com/problems/time-based-key-value-store/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,design,binary search'
                },
                {
                    id: 25,
                    status: false,
                    problem: 'Median of Two Sorted Arrays',
                    link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search, divide and conquer'
                },
            ]
        },
        {
            title: 'Sliding Window',
            problems: [
                {
                    id: 26,
                    status: false,
                    problem: 'Best time to buy and sell stock',
                    link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,Dynamic programming,Dp'
                },
                {
                    id: 27,
                    status: false,
                    problem: 'longest substring without repeating characters',
                    link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'hash table,string,sliding window'
                },
                {
                    id: 28,
                    status: false,
                    problem: 'longest repeating character replacement',
                    link: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'hash table,string,sliding window'
                },
                {
                    id: 29,
                    status: false,
                    problem: 'permutation in string',
                    link: 'https://leetcode.com/problems/permutation-in-string/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'hast table,two pointer,string,sliding window'
                },
                {
                    id: 30,
                    status: false,
                    problem: 'minimum window substring',
                    link: 'https://leetcode.com/problems/minimum-window-substring/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'hast table,string,sliding window'
                },
                {
                    id: 31,
                    status: false,
                    problem: 'sliding window maximum',
                    link: 'https://leetcode.com/problems/sliding-window-maximum/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,queue,sliding widnwo,heap'
                },
            ]
        },
        {
            title: 'Linked List',
            problems: [
                {
                    id: 32,
                    status: false,
                    problem: 'Reverse  Linked List',
                    link: 'https://leetcode.com/problems/reverse-linked-list/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'linked list,recursion'
                },
                {
                    id: 33,
                    status: false,
                    problem: 'Merge Two Sorted List',
                    link: 'https://leetcode.com/problems/merge-two-sorted-lists/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'linked list,recursion'
                },
                {
                    id: 34,
                    status: false,
                    problem: 'Reorder List',
                    link: 'https://leetcode.com/problems/reorder-list/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'linked list,recursion,two pointer, stack'
                },
                {
                    id: 35,
                    status: false,
                    problem: 'Remove Nth Node from end of list',
                    link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'linked list,two pointer'
                },
                {
                    id: 36,
                    status: false,
                    problem: 'copy list with random pointer',
                    link: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'hash table,linked list'
                },
                {
                    id: 37,
                    status: false,
                    problem: 'Add two numbers',
                    link: 'https://leetcode.com/problems/add-two-numbers/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'linked list,recursion,Math'
                },
                {
                    id: 38,
                    status: false,
                    problem: 'linked list cycle',
                    link: 'https://leetcode.com/problems/linked-list-cycle/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'linked list,two pointers, hash table'
                },
                {
                    id: 39,
                    status: false,
                    problem: 'find the duplicate number',
                    link: 'https://leetcode.com/problems/find-the-duplicate-number/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,two pointer, binary search'
                },
                {
                    id: 40,
                    status: false,
                    problem: 'LRU cache',
                    link: 'https://leetcode.com/problems/lru-cache/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'linked list,hash table, doubly-linked list'
                },
                {
                    id: 41,
                    status: false,
                    problem: 'merge k sorted lists',
                    link: 'https://leetcode.com/problems/merge-k-sorted-lists/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'linked list,heap,merge sort,divide and conquer'
                },
                {
                    id: 42,
                    status: false,
                    problem: 'reverse nodes in k group',
                    link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'linked list,recursion'
                },
            ]
        },
        {
            title: 'Tree',
            problems: [
                {
                    id: 43,
                    status: false,
                    problem: 'Invert Binary Tree',
                    link: 'https://leetcode.com/problems/invert-binary-tree/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,breadth-first search,binary tree'
                },
                {
                    id: 44,
                    status: false,
                    problem: 'Maximum Depth of Binary Tree',
                    link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,breadth-first search,binary tree'
                },
                {
                    id: 45,
                    status: false,
                    problem: 'Diameter of Binary Tree',
                    link: 'https://leetcode.com/problems/diameter-of-binary-tree/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,binary tree'
                },
                {
                    id: 46,
                    status: false,
                    problem: 'Balanced Binary Tree',
                    link: 'https://leetcode.com/problems/balanced-binary-tree/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,binary tree'
                },
                {
                    id: 47,
                    status: false,
                    problem: 'Same Tree',
                    link: 'https://leetcode.com/problems/same-tree/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,breadth-first search,binary tree'
                },
                {
                    id: 141,
                    status: false,
                    problem: 'Subtree of another tree',
                    link: 'https://leetcode.com/problems/subtree-of-another-tree/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,string matching,binary tree'
                },
                {
                    id: 142,
                    status: false,
                    problem: 'Lowest Common Ancestor of a Binary Search Tree',
                    link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,BST,binary tree'
                },
                {
                    id: 48,
                    status: false,
                    problem: 'Binary Tree Level Order Traversal',
                    link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,breadth-first search, binary tree'
                },
                {
                    id: 49,
                    status: false,
                    problem: 'Binary Tree Right Side View',
                    link: 'https://leetcode.com/problems/binary-tree-right-side-view/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,breadth-first search,binary tree'
                },
                {
                    id: 50,
                    status: false,
                    problem: 'count good nodes in binary tree',
                    link: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,breadth-first search,binary tree'
                },
                {
                    id: 51,
                    status: false,
                    problem: 'validate binary search tree',
                    link: 'https://leetcode.com/problems/validate-binary-search-tree/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,sorting'
                },
                {
                    id: 52,
                    status: false,
                    problem: 'Kth smallest element in a BST',
                    link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,depth-first seach,breadth-first search,binary tree'
                },
                {
                    id: 53,
                    status: false,
                    problem: 'construct bianry tree from preorder and inorder traversal',
                    link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array, hash table,tree,binary tree,divide and conquer'
                },
                {
                    id: 54,
                    status: false,
                    problem: 'binary tree maxium path sum',
                    link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'Dynamic programming,Dp,Tree,Depth-First Search,Binary Tree'
                },
                {
                    id: 55,
                    status: false,
                    problem: 'serailze and deserialize binary tree',
                    link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'String,Tree,depth-first search,breadth-first search,binary tree'
                },
                {
                    id: 170,
                    status: false,
                    problem: 'Inorder traversal',
                    link: 'https://leetcode.com/problems/binary-tree-inorder-traversal/description/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'Tree,,binary tree'
                },
                {
                    id: 171,
                    status: false,
                    problem: 'zigzag traversal of binary tree',
                    link: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'Tree,breadth-first search,binary tree'
                },
                {
                    id: 172,
                    status: false,
                    problem: 'binary tree maximum path sum',
                    link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/description/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'Dynamic programming,Tree,depth-first search,binary tree'
                },
                {
                    id: 173,
                    status: false,
                    problem: 'symmetric binary tree',
                    link: 'https://leetcode.com/problems/symmetric-tree/description/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'Tree,depth-first search,breadth-first search,binary tree'
                },
                {
                    id: 174,
                    status: false,
                    problem: 'flattern binary tree to linked list',
                    link: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'Linked list,Tree,depth-first search,breadth-first search,binary tree'
                },
                {
                    id: 175,
                    status: false,
                    problem: 'construct binary tree from inorder-and-postorder-traversal',
                    link: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'Tree,depth-first search,breadth-first search,binary tree,divide and conquer'
                },

            ]
        },
        {
            title: 'Tries',
            problems: [
                {
                    id: 56,
                    status: false,
                    problem: 'Implement Trie Prefix Tree',
                    link: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'hash table,string,trie,design'
                },
                {
                    id: 57,
                    status: false,
                    problem: 'Design Add And Search Words Data Structure',
                    link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'depth-first search,string,trie,design'
                },
                {
                    id: 58,
                    status: false,
                    problem: 'Word Search II',
                    link: 'https://leetcode.com/problems/word-search-ii/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,array,backtracking,trie,matrix'
                },
                {
                    id: 176,
                    status: false,
                    problem: 'maximum xor with an element from array',
                    link: 'https://leetcode.com/problems/maximum-xor-with-an-element-from-array/description/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,trie,bit manipulation'
                },

            ]

        },
        {
            title: 'Backtracking',
            problems: [
                {
                    id: 59,
                    status: false,
                    problem: 'Subsets',
                    link: 'https://leetcode.com/problems/subsets/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,backtracking,bit manipluation'
                },
                {
                    id: 153,
                    status: false,
                    problem: 'Sudoku Solver',
                    link: 'https://leetcode.com/problems/sudoku-solver/description/',
                    difficulty: 'Hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'Hash Tabee,array,Hash Table,Matrix'
                },
                {
                    id: 154,
                    status: false,
                    problem: 'Fair distribution of cookies',
                    link: 'https://leetcode.com/problems/fair-distribution-of-cookies/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,backtracking,bit manipluation,Dynamic Programming, bitmask'
                },
                {
                    id: 155,
                    status: false,
                    problem: 'closest dessert cost',
                    link: 'https://leetcode.com/problems/closest-dessert-cost/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,backtracking,dynamic programming'
                },
                {
                    id: 60,
                    status: false,
                    problem: 'Combination Sum',
                    link: 'https://leetcode.com/problems/combination-sum/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,backtracking'
                },
                {
                    id: 61,
                    status: false,
                    problem: 'Permutations',
                    link: 'https://leetcode.com/problems/permutations/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,backtracking'
                },
                {
                    id: 62,
                    status: false,
                    problem: 'subsets ||',
                    link: 'https://leetcode.com/problems/subsets-ii/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,backtracking,bit manipluation'
                },
                {
                    id: 63,
                    status: false,
                    problem: 'combination sum ||',
                    link: 'https://leetcode.com/problems/combination-sum-ii/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,backtracking'
                },
                {
                    id: 64,
                    status: false,
                    problem: 'word search',
                    link: 'https://leetcode.com/problems/word-search/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,backtracking,matrix'
                },
                {
                    id: 65,
                    status: false,
                    problem: 'palindrome partioning',
                    link: 'https://leetcode.com/problems/palindrome-partitioning/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp,backtracking'
                },
                {
                    id: 66,
                    status: false,
                    problem: 'Letter Combination of phone number',
                    link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'hash table,string,backtracking'
                },
                {
                    id: 67,
                    status: false,
                    problem: 'N Queens',
                    link: 'https://leetcode.com/problems/n-queens/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,backtracking'
                },
            ]
        },
        {
            title: 'Heap / Priority Queue',
            problems: [
                {
                    id: 68,
                    status: false,
                    problem: 'Kth Largest Element in a Stream',
                    link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'tree,design,binary search tree,heap'
                },
                {
                    id: 69,
                    status: false,
                    problem: 'Last Stone Weight',
                    link: 'https://leetcode.com/problems/last-stone-weight/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,heap'
                },
                {
                    id: 70,
                    status: false,
                    problem: 'K Closest Points to Origin',
                    link: '',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,math,sorting,heap'
                },
                {
                    id: 71,
                    status: false,
                    problem: 'Kth Largest Element in an Array',
                    link: 'https://leetcode.com/problems/k-closest-points-to-origin/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,sorting,heap,divide and conquer'
                },
                {
                    id: 72,
                    status: false,
                    problem: 'Task Scheduler',
                    link: 'https://leetcode.com/problems/task-scheduler/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,greedy,sorting,heap,countng'
                },
                {
                    id: 73,
                    status: false,
                    problem: 'Design Twitter',
                    link: 'https://leetcode.com/problems/design-twitter/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'hash table,linked list, design, heap'
                },
                {
                    id: 74,
                    status: false,
                    problem: 'Find Median from Data Stream',
                    link: 'https://leetcode.com/problems/find-median-from-data-stream/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'sorting,heap,two pointers,design'
                },
            ]
        },
        {
            title: 'Graphs',
            problems: [
                {
                    id: 75,
                    status: false,
                    problem: 'Number of Islands',
                    link: 'https://leetcode.com/problems/number-of-islands/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,depth-first search,breadth-first search,union find,matrix'
                },
                {
                    id: 156,
                    status: false,
                    problem: 'is Graph bipartite',
                    link: 'https://leetcode.com/problems/is-graph-bipartite/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,depth-first search,breadth-first search,union find'
                },
                {
                    id: 157,
                    status: false,
                    problem: 'All Paths from source to target',
                    link: 'https://leetcode.com/problems/all-paths-from-source-to-target/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'depth-first search,breadth-first search,Backtracking,graph'
                },
                {
                    id: 158,
                    status: false,
                    problem: 'Path with maximum Probability',
                    link: 'https://leetcode.com/problems/path-with-maximum-probability/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,graph,shortest path,breadth-first search'
                },
                {
                    id: 159,
                    status: false,
                    problem: 'Find center of star graph',
                    link: 'https://leetcode.com/problems/find-center-of-star-graph/description/',
                    difficulty: 'Easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'graph'
                },
                {
                    id: 160,
                    status: false,
                    problem: 'Find if path exists in graph',
                    link: 'https://leetcode.com/problems/find-if-path-exists-in-graph/description/',
                    difficulty: 'Easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,graph,shortest path,breadth-first search'
                },
                {
                    id: 186,
                    status: false,
                    problem: 'Number of Islands',
                    link: 'https://leetcode.com/problems/number-of-islands/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,depth-first search,breadth-first search,union find,matrix'
                },
                {
                    id: 187,
                    status: false,
                    problem: 'Number of Islands',
                    link: 'https://leetcode.com/problems/number-of-islands/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,depth-first search,breadth-first search,union find,matrix'
                },
                {
                    id: 76,
                    status: false,
                    problem: 'Clone Graph',
                    link: 'https://leetcode.com/problems/clone-graph/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'depth-first search,breadth-first search, graph,hash table'
                },
                {
                    id: 77,
                    status: false,
                    problem: 'Max Area of Island',
                    link: 'https://leetcode.com/problems/max-area-of-island/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,depth-first search,breadth-first search,union find,matrix'
                },
                {
                    id: 78,
                    status: false,
                    problem: 'Pacific Atlantic Water Flow',
                    link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,depth-first search,breadth-first search,matrix'
                },
                {
                    id: 79,
                    status: false,
                    problem: 'Surrounded Regions',
                    link: 'https://leetcode.com/problems/surrounded-regions/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,depth-first search,breadth-first search,union find,matrix'
                },
                {
                    id: 80,
                    status: false,
                    problem: 'Rotting Oranges',
                    link: 'https://leetcode.com/problems/rotting-oranges/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,matrix,breadth-first search'
                },
                {
                    id: 81,
                    status: false,
                    problem: 'Course Schedule',
                    link: 'https://leetcode.com/problems/course-schedule/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'depth-first search,breadth-first search,grpah, topological sort'
                },
                {
                    id: 82,
                    status: false,
                    problem: 'Course Schedule ||',
                    link: 'https://leetcode.com/problems/course-schedule-ii/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'depth-first search,breadth-first search,graph'
                },
                {
                    id: 83,
                    status: false,
                    problem: 'Redundant Connection',
                    link: 'https://leetcode.com/problems/redundant-connection/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'depth-first search,breadth-first search,graph,union find'
                },
                {
                    id: 84,
                    status: false,
                    problem: 'Word Ladder',
                    link: 'https://leetcode.com/problems/word-ladder/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'hash table,string,bread-first search'
                },

            ]
        },
        {
            title: '1-D Dynamic programming,Dp',
            problems: [
                {
                    id: 85,
                    status: false,
                    problem: 'Climbing Stairs',
                    link: 'https://leetcode.com/problems/climbing-stairs/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,dynamic programming,dp,memoization'
                },
                {
                    id: 86,
                    status: false,
                    problem: 'Min Cost Climbing Stairs',
                    link: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp'
                },
                {
                    id: 87,
                    status: false,
                    problem: 'House Robber',
                    link: 'https://leetcode.com/problems/house-robber/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp'
                },
                {
                    id: 88,
                    status: false,
                    problem: 'House Robber ||',
                    link: 'https://leetcode.com/problems/house-robber-ii/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp'
                },
                {
                    id: 89,
                    status: false,
                    problem: 'Longest Palindromic Substring',
                    link: 'https://leetcode.com/problems/longest-palindromic-substring/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp'
                },
                {
                    id: 90,
                    status: false,
                    problem: 'Palindromic Substring',
                    link: 'https://leetcode.com/problems/palindromic-substrings/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp'
                },
                {
                    id: 91,
                    status: false,
                    problem: 'Decode Ways',
                    link: 'https://leetcode.com/problems/decode-ways/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp'
                },
                {
                    id: 92,
                    status: false,
                    problem: 'Coin Change',
                    link: 'https://leetcode.com/problems/coin-change/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp,breadth-first search'
                },
                {
                    id: 93,
                    status: false,
                    problem: 'Maximum Product Subarray',
                    link: 'https://leetcode.com/problems/maximum-product-subarray/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp'
                },
                {
                    id: 94,
                    status: false,
                    problem: 'Word Break',
                    link: 'https://leetcode.com/problems/word-break/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp,string,hash table,trie,memoization'
                },
                {
                    id: 95,
                    status: false,
                    problem: 'Longest Increasing Subsequence',
                    link: 'https://leetcode.com/problems/longest-increasing-subsequence/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp,binary seach'
                },
                {
                    id: 96,
                    status: false,
                    problem: 'Partition Equal Subset sum',
                    link: 'https://leetcode.com/problems/partition-equal-subset-sum/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp'
                },

            ]
        },
        {
            title: 'Intervals',
            problems: [
                {
                    id: 97,
                    status: false,
                    problem: 'Insert Intervals',
                    link: 'https://leetcode.com/problems/insert-interval/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array'
                },
                {
                    id: 98,
                    status: false,
                    problem: 'Merge Intervals',
                    link: 'https://leetcode.com/problems/merge-intervals/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,sorting'
                },
                {
                    id: 99,
                    status: false,
                    problem: 'Non Overlapping Interval',
                    link: 'https://leetcode.com/problems/non-overlapping-intervals/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,sorting,dynamic programming,dp,greddy'
                },
                {
                    id: 100,
                    status: false,
                    problem: 'Minimum Interval to Include Each Query',
                    link: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search,sorting,heap,line sweep'
                },
            ]
        },
        {
            title: 'Greedy',
            problems: [
                {
                    id: 101,
                    status: false,
                    problem: 'Maximum Subarray',
                    link: 'https://leetcode.com/problems/maximum-subarray/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,divide and conquer,dynamic programming,dp'
                },
                {
                    id: 102,
                    status: false,
                    problem: 'Jump Game',
                    link: 'https://leetcode.com/problems/jump-game/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,greedy,dynamic programming,dp'
                },
                {
                    id: 103,
                    status: false,
                    problem: 'Jump Game ||',
                    link: 'https://leetcode.com/problems/jump-game-ii/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,greedy,dynamic programming,dp'
                },
                {
                    id: 104,
                    status: false,
                    problem: ' Gas Station',
                    link: 'https://leetcode.com/problems/gas-station/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,greedy'
                },
                {
                    id: 105,
                    status: false,
                    problem: ' Hand of Straights',
                    link: 'https://leetcode.com/problems/hand-of-straights/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,sorting,greedy'
                },
                {
                    id: 106,
                    status: false,
                    problem: 'Merge Triples to from target triplet',
                    link: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,greedy'
                },
                {
                    id: 107,
                    status: false,
                    problem: 'parttion labels',
                    link: 'https://leetcode.com/problems/partition-labels/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'hash table,string,greedy'
                },
                {
                    id: 108,
                    status: false,
                    problem: 'valid parenthesis string',
                    link: 'https://leetcode.com/problems/valid-parenthesis-string/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp,stack,greedy'
                },
            ]
        },
        {
            title: 'Advance Graphs',
            problems: [
                {
                    id: 109,
                    status: false,
                    problem: 'Reconstruct itinerary',
                    link: 'https://leetcode.com/problems/reconstruct-itinerary/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'graph,depth-first search,eulerian circuit'
                },
                {
                    id: 110,
                    status: false,
                    problem: 'min cost to connect all points',
                    link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,union find,graph,minimum spanning tree'
                },
                {
                    id: 111,
                    status: false,
                    problem: 'network delay time',
                    link: 'https://leetcode.com/problems/network-delay-time/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'depth-first search,breadth-first seach,graph,heap,shortedt path'
                },
                {
                    id: 112,
                    status: false,
                    problem: 'swim in rising water',
                    link: 'https://leetcode.com/problems/swim-in-rising-water/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,binary search,depth-first search,breadth-first seach,union find,heap,matrix'
                },
                {
                    id: 113,
                    status: false,
                    problem: 'cheapest flights within k stops',
                    link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'dynamic programming,dp,depth-first search, breadth-first search,graph,heap,shortest path'
                },
            ]
        },
        {
            title: 'Math & Geometry',
            problems: [
                {
                    id: 132,
                    status: false,
                    problem: 'Happy Number',
                    link: 'https://leetcode.com/problems/happy-number/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'hash table,math,two pointers'
                },
                {
                    id: 133,
                    status: false,
                    problem: 'Plus One',
                    link: 'https://leetcode.com/problems/plus-one/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,math'
                },
                {
                    id: 134,
                    status: false,
                    problem: 'Rotate Image',
                    link: 'https://leetcode.com/problems/rotate-image/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,math,matrix'
                },
                {
                    id: 135,
                    status: false,
                    problem: 'spiral matrix',
                    link: 'https://leetcode.com/problems/spiral-matrix/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,matrix,simulation'
                },
                {
                    id: 136,
                    status: false,
                    problem: 'set matrix zeros',
                    link: 'https://leetcode.com/problems/set-matrix-zeroes/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,matrix'
                },
                {
                    id: 137,
                    status: false,
                    problem: 'pow (x,n)',
                    link: 'https://leetcode.com/problems/powx-n/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,recursion'
                },
                {
                    id: 138,
                    status: false,
                    problem: 'Multiply strings',
                    link: 'https://leetcode.com/problems/multiply-strings/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,math,simulation'
                },
                {
                    id: 139,
                    status: false,
                    problem: 'detect square',
                    link: 'https://leetcode.com/problems/detect-squares/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,hash table,counting,design'
                },
                {
                    id: 179,
                    status: false,
                    problem: 'count total number of colored cells',
                    link: 'https://leetcode.com/problems/count-total-number-of-colored-cells/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'math'
                },
                {
                    id: 180,
                    status: false,
                    problem: 'distinct prime factors of product of array',
                    link: 'https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,number theory'
                },
            ]
        },
        {
            title: 'Bit Manipulation',
            problems: [
                {
                    id: 114,
                    status: false,
                    problem: 'Single Number',
                    link: 'https://leetcode.com/problems/single-number/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,bit manipluation'
                },
                {
                    id: 115,
                    status: false,
                    problem: 'Number of 1 bits',
                    link: 'https://leetcode.com/problems/number-of-1-bits/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'divide and conquer,bit manipluation'
                },
                {
                    id: 116,
                    status: false,
                    problem: 'counting bits',
                    link: 'https://leetcode.com/problems/counting-bits/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'dynamic programming,dp,bit manipluation'
                },
                {
                    id: 117,
                    status: false,
                    problem: 'reverse bits',
                    link: 'https://leetcode.com/problems/reverse-bits/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'divide and conquer,bit manipluation'
                },
                {
                    id: 118,
                    status: false,
                    problem: 'missing number',
                    link: 'https://leetcode.com/problems/missing-number/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,bit manipluation,hash table,math,binary search,sorting'
                },
                {
                    id: 119,
                    status: false,
                    problem: 'sum of two integers',
                    link: 'https://leetcode.com/problems/sum-of-two-integers/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,bit manipluation'
                },
                {
                    id: 120,
                    status: false,
                    problem: 'reverse integers',
                    link: 'https://leetcode.com/problems/reverse-integer/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true,
                    tags: 'math'
                },
            ]
        },
        {
            title: '2-D Dynamic programming,Dp',
            problems: [
                {
                    id: 121,
                    status: false,
                    problem: 'Unique Paths',
                    link: 'https://leetcode.com/problems/unique-paths/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,array,dynamic programming,dp'
                },
                {
                    id: 122,
                    status: false,
                    problem: 'Longest Common Subsequence',
                    link: 'https://leetcode.com/problems/longest-common-subsequence/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp'
                },
                {
                    id: 123,
                    status: false,
                    problem: 'best time to by and sell stock with cooldown',
                    link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp'
                },
                {
                    id: 124,
                    status: false,
                    problem: 'coin change ||',
                    link: 'https://leetcode.com/problems/coin-change-ii/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp'
                },
                {
                    id: 125,
                    status: false,
                    problem: 'target sum',
                    link: 'https://leetcode.com/problems/target-sum/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp,backtracking'
                },
                {
                    id: 126,
                    status: false,
                    problem: 'interleaving string',
                    link: 'https://leetcode.com/problems/interleaving-string/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp'
                },
                {
                    id: 127,
                    status: false,
                    problem: 'edit distance',
                    link: 'https://leetcode.com/problems/edit-distance/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp'
                },
                {
                    id: 128,
                    status: false,
                    problem: 'longest increasing path in a matrix',
                    link: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'Array,Graph,Dynamic programming,Dp,Depth-First Search,Breadth-First Search,Topological Sort,Memoization,Matrix'
                },
                {
                    id: 129,
                    status: false,
                    problem: 'distinct subsequence',
                    link: 'https://leetcode.com/problems/distinct-subsequences/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp'
                },
                {
                    id: 130,
                    status: false,
                    problem: 'brust balloons',
                    link: 'https://leetcode.com/problems/burst-balloons/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'array,dynamic programming,dp'
                },
                {
                    id: 131,
                    status: false,
                    problem: 'regular expression matching',
                    link: 'https://leetcode.com/problems/regular-expression-matching/',
                    difficulty: 'hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp,recursion'
                },
                {
                    id: 177,
                    status: false,
                    problem: 'count ways to build good strings',
                    link: 'https://leetcode.com/problems/count-ways-to-build-good-strings/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp,recursion'
                },
                {
                    id: 178,
                    status: false,
                    problem: 'word break',
                    link: 'https://leetcode.com/problems/word-break/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'string,dynamic programming,dp,recursion,memoization,hash table,trie'
                },

            ]
        },
        {
            title: 'Game theory',
            problems: [
                {
                    id: 181,
                    status: false,
                    problem: 'sun game',
                    link: 'https://leetcode.com/problems/sum-game/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,game theory,greedy'
                },
                {
                    id: 182,
                    status: false,
                    problem: 'guess number higher or lower II',
                    link: 'https://leetcode.com/problems/guess-number-higher-or-lower-ii/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,game theory,dynamic programming'
                },
                {
                    id: 183,
                    status: false,
                    problem: 'remove colored pieces',
                    link: 'https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,game theory,string'
                },
                {
                    id: 184,
                    status: false,
                    problem: 'chalkboard-xor-game',
                    link: 'https://leetcode.com/problems/chalkboard-xor-game/description/',
                    difficulty: 'Hard',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,game theory,Bit manipulation'
                },
                {
                    id: 185,
                    status: false,
                    problem: 'can i win',
                    link: 'https://leetcode.com/problems/can-i-win/description/',
                    difficulty: 'medium',
                    code: 'C++',
                    isblind: true,
                    tags: 'math,game theory,dynamic programming,bit manipulation'
                },
            ]
        },
    ]
)
export let qdata = derived(webdata, ($webdata) => {
    let ans: any = [];
    $webdata.map((k) =>
        k.problems.map((q) => {
            ans.push(q);
        })
    );
    return ans;
});

