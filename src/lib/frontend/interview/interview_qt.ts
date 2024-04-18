import { writable } from "svelte/store";



export let interviewTitle = writable([
    // {
    //     name: 'Develop Shopping Cart',
    //     desc: 'Learn about JavaScript Fetch API with Examples',
    //     lang: 'JS',
    //     isupdated: 'March 2024',
    //     tag: 'easy',
    //     link: 'c/vector'
    // },
    {
        name: 'Sign Up Form Validation',
        desc: 'Form Submissions using Svelte JS with Validation using Superforms',
        lang: 'Svelte',
        isupdated: 'March 2024',
        tag: 'easy',
        link: 'c/set'
    },
    {
        name: 'Build a File Uploader',
        desc: 'Understand Flex Box and Grid CSS with Examples',
        lang: 'C++',
        isupdated: 'March 2024',
        tag: 'easy',
        link: 'c/stack'
    },
    {
        name: 'Load Huge Data from API',
        desc: 'Learn about Client Caching in Web Development',
        lang: 'Svelte',
        isupdated: 'March 2024',
        tag: 'easy',
        link: 'c/map'
    },
    // {
    //     name: 'Global State Management',
    //     desc: 'Learn about Client Caching in Web Development',
    //     lang: 'Svelte',
    //     isupdated: 'March 2024',
    //     tag: 'easy',
    //     link: 'c/map'
    // },
])