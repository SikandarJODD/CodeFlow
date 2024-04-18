import { writable } from "svelte/store";

export let concept_tags = writable([
    {
        name: 'Home',
        link: '/fullstack/concepts'
    },
    {
        name: 'Fetch API',
        link: '/fullstack/concepts/virtualization'
    },
    {
        name: 'Flex vs Grid CSS',
        link: '/fullstack/concepts/virtualization'
    },
    {
        name: 'Form Submission',
        link: '/fullstack/concepts/virtualization'
    },
    {
        name: 'Client Caching',
        link: '/fullstack/concepts/virtualization'
    },
    // {
    //     name: 'Routing and Dynamic Routes',
    //     link: '/fullstack/concepts/virtualization'
    // },
    // {
    //     name: 'Virtualization',
    //     link: '/fullstack/concepts/virtualization'
    // },
    // {
    //     name: 'Paging',
    //     link: '/fullstack/concepts/virtualization'
    // },

])

export let conceptsTitle = writable([
    {
        name: 'Fetch API',
        desc: 'Learn about JavaScript Fetch API with Examples',
        lang: 'JS',
        isupdated: 'March 2024',
        tag: 'easy',
        link: 'c/vector'
    },
    {
        name: 'Form Submission',
        desc: 'Form Submissions using Svelte JS with Validation using Superforms',
        lang: 'Svelte',
        isupdated: 'March 2024',
        tag: 'easy',
        link: 'c/set'
    },
    {
        name: 'Flex vs Grid CSS',
        desc: 'Understand Flex Box and Grid CSS with Examples',
        lang: 'C++',
        isupdated: 'March 2024',
        tag: 'easy',
        link: 'c/stack'
    },
    {
        name: 'Client Caching',
        desc: 'Learn about Client Caching in Web Development',
        lang: 'Svelte',
        isupdated: 'March 2024',
        tag: 'easy',
        link: 'c/map'
    },

])