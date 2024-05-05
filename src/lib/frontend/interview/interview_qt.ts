import { writable } from "svelte/store";



export let interviewTitle = writable([
    {
        name: 'Sign Up Form Validation',
        desc: 'Form Submissions using Svelte JS with Validation using Superforms',
        lang: 'Svelte',
        isupdated: 'April 2024',
        tag: 'easy',
        link: '/fullstack/interview/sign-up-form'
    },
    {
        name: 'Build a File Uploader',
        desc: 'Understand Flex Box and Grid CSS with Examples',
        lang: 'C++',
        isupdated: 'April 2024',
        tag: 'easy',
        link: '/fullstack/interview/file-uploader'
    },

])