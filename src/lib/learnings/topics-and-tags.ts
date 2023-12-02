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
    // {
    //     name: 'Stack C++',
    //     link: '/c'
    // },
    // {
    //     name: 'Map C++',
    //     link: '/c'
    // },
    // {
    //     name: 'STL Functions',
    //     link: '/c'
    // },
])
export let topicsTitle = writable([
    {
        name: 'Vector STL',
        desc: 'Deep Dive into Vector C++ and STL Functions',
        lang: 'C++',
        isupdated: 'Nov 2023',
        tag: 'easy',
        link: 'c/vector'
    },
    {
        name: 'Set STL',
        desc: 'Deep Dive into Set, Unordered Set, Multi Set',
        lang: 'C++',
        isupdated: 'Nov 2023',
        tag: 'easy',
        link: 'c/set'
    },
    // {
    //     name: 'Vector STL',
    //     desc: 'Deep Dive into Vector C++ and STL Functions',
    //     lang: 'C++',
    //     isupdated: 'Nov 2023',
    //     tag: 'hard'
    // },
    // {
    //     name: 'Vector STL',
    //     desc: 'Deep Dive into Vector C++ and STL Functions',
    //     lang: 'C++',
    //     isupdated: 'Nov 2023',
    //     tag: 'easy'
    // },
    // {
    //     name: 'Vector STL',
    //     desc: 'Deep Dive into Vector C++ and STL Functions',
    //     lang: 'C++',
    //     isupdated: 'Nov 2023',
    //     tag: 'easy'
    // },
    // {
    //     name: 'Vector STL',
    //     desc: 'Deep Dive into Vector C++ and STL Functions',
    //     lang: 'C++',
    //     isupdated: 'Nov 2023',
    //     tag: 'easy'
    // },
    // {
    //     name: 'Vector STL',
    //     desc: 'Deep Dive into Vector C++ and STL Functions',
    //     lang: 'C++',
    //     isupdated: 'Nov 2023',
    //     tag: 'easy'
    // },
    // {
    //     name: 'Vector STL',
    //     desc: 'Deep Dive into Vector C++ and STL Functions',
    //     lang: 'C++',
    //     isupdated: 'Nov 2023',
    //     tag: 'easy'
    // },
])