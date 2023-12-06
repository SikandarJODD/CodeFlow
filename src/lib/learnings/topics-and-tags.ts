import { writable } from "svelte/store";

export let alltags = writable([
    {
        name: 'Home',
        link: '/c'
    },
    {
        name: 'Vector C++',
        link: '/c/vector'
    },
    {
        name: 'Set C++',
        link: '/c/set'
    },
    {
        name: 'Stack C++',
        link: '/c/stack'
    },
    {
        name: 'Map C++',
        link: '/c/map'
    },
])
export let allpatterns = writable([
    {
        name: 'Home',
        link: '/pattern'
    },
    {
        name: '0/1 Knapsack',
        link: '/pattern/knapsack'
    },
])
export let topicsTitle = writable([
    {
        name: 'Vector in C++',
        desc: 'Deep Dive into Vector C++ and STL Functions',
        lang: 'C++',
        isupdated: 'Nov 2023',
        tag: 'easy',
        link: 'c/vector'
    },
    {
        name: 'Set in C++',
        desc: 'Deep Dive into Set, Unordered Set, Multi Set',
        lang: 'C++',
        isupdated: 'Nov 2023',
        tag: 'easy',
        link: 'c/set'
    },
    {
        name: 'Stack in C++',
        desc: 'Deep Dive into Vector C++ and STL Functions',
        lang: 'C++',
        isupdated: 'Nov 2023',
        tag: 'medium',
        link: 'c/stack'
    },
    {
        name: 'Map in C++',
        desc: 'Deep Dive into Vector C++ and STL Functions',
        lang: 'C++',
        isupdated: 'Nov 2023',
        tag: 'easy',
        link: 'c/map'
    },

])