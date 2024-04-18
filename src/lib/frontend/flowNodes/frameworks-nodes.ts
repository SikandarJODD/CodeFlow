import type { Node, Edge } from '@xyflow/svelte';
import SvelteLogo from '$lib/images/frameworks/svelte.svg'
import ReactLogo from '$lib/images/frameworks/react.svg'
import VueLogo from '$lib/images/frameworks/vue.svg';
import JSLogo from '$lib/images/frameworks/javascript.svg'
import NextLogo from '$lib/images/frameworks/nextjs_icon_dark.svg'
import NuxtLogo from '$lib/images/frameworks/nuxt.svg'
import { LineChart, Sparkle, Sparkles, SquareCode } from 'lucide-svelte';
export let frameNodes: Node[] = [
    {
        id: '1',
        type: 'framework',
        data: { label: 'Frontend Frameworks' },
        position: { x: 0, y: 0 }
    },
    {
        id: '2',
        type: 'framework',
        data: {
            label: 'Svelte JS',
            icon: SvelteLogo,
            desc: `Svelte is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.`,
            link: 'https://svelte.dev/',
            docs: 'https://svelte.dev/docs/introduction',
            examples: 'https://svelte.dev/examples/hello-world',
            playground: 'https://svelte.dev/repl/hello-world?version=4.2.15',
            starter_code: `npm create svelte@latest myapp
            cd myapp
            npm install
            npm run dev`
        },
        position: { x: -110, y: 140 }
    },
    {
        id: '3',
        type: 'framework',
        data: {
            label: 'React JS', icon: ReactLogo, desc: `React is the most popular front-end JavaScript library for building user interfaces. React can also render on the server using Node and power mobile apps using React Native.`,
            link: 'https://react.dev',
            docs: 'https://react.dev/learn',
            examples: 'https://react.dev/learn/your-first-component',
            starter_code: `npm create vite@latest my-app -- --template react
        cd my-app
        npm install
        npm run dev` },
        position: { x: 34, y: 140 }
    },
    {
        id: '4',
        type: 'framework',
        data: {
            label: 'Vue JS', icon: VueLogo, desc: `Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications. It is mainly focused on front end development.`,
            link: 'https://vuejs.org',
            docs: 'https://vuejs.org/guide/introduction.html',
            examples: 'https://vuejs.org/examples/#hello-world',
            playground: 'https://play.vuejs.org',
            starter_code: `npm create vue@latest myapp
        cd myapp
        npm install
        npm run dev` },
        position: { x: 175, y: 140 }
    },
    {
        id: '10',
        type: 'framework',
        data: { label: 'Full Stack Frameworks' },
        position: { x: 490, y: 0 }
    },
    {
        id: '5',
        type: 'framework',
        data: {
            label: 'Sveltekit',
            icon: SvelteLogo, desc: `SvelteKit is a powerful web development framework built on Svelte and Vite, designed for speed and simplicity. It provides a fast, feature-rich environment for building robust applications with minimal configuration.`,
            link: 'https://kit.svelte.dev',
            docs: 'https://kit.svelte.dev/docs/introduction',
            examples: 'https://learn.svelte.dev/tutorial/introducing-sveltekit',
            starter_code: `npm create svelte@latest myapp
            cd myapp
            npm install
            npm run dev`
        },
        position: { x: 390, y: 140 }
    },
    {
        id: '6',
        type: 'framework',
        data: {
            label: 'Next JS', icon: NextLogo, desc: `Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generationM.`,
            link: 'https://nextjs.org',
            docs: 'https://nextjs.org/docs',
            starter_code: `npx create-next-app@latest myapp
        cd myapp
        npm install
        npm run dev` },
        position: { x: 530, y: 140 }
    },
    {
        id: '7',
        type: 'framework',
        data: {
            label: 'Nuxt JS', icon: NuxtLogo, desc: `Nuxt is a free and open-source framework with an intuitive and extendable way to create type-safe, performant and production-grade full-stack web applications and websites with Vue.js.`,
            link: 'https://nuxt.com',
            docs: 'https://nuxt.com/docs/getting-started/introduction',
            examples: 'https://nuxt.com/docs/examples/hello-world',
            starter_code: `npx nuxi@latest init myapp
        cd myapp
        npm install
        npm run dev -- -o` },
        position: { x: 660, y: 140 }
    },
    // {
    //     id: '8',
    //     type: 'framework',
    //     data: { label: 'Libraries', icon: JSLogo },
    //     position: { x: 50, y: 250 }
    // },
    // {
    //     id: '9',
    //     type: 'framework',
    //     data: { label: 'Animation', src: Sparkles },
    //     position: { x: -150, y: 350 }
    // },
    // {
    //     id: '11',
    //     type: 'framework',
    //     data: { label: 'Utility', src: SquareCode },
    //     position: { x: 60, y: 350 }
    // },
    // {
    //     id: '12',
    //     type: 'framework',
    //     data: { label: 'Charts', src: LineChart },
    //     position: { x: 230, y: 350 }
    // },


];

export let frameEdges: Edge[] = [
    {
        id: '1-2',
        type: 'default',
        source: '1',
        target: '2'
    },
    {
        id: '1-3',
        type: 'default',
        source: '1',
        target: '3'
    },
    {
        id: '1-4',
        type: 'default',
        source: '1',
        target: '4'
    },
    {
        id: '10-5',
        type: 'default',
        source: '10',
        target: '5'
    },
    {
        id: '10-6',
        type: 'default',
        source: '10',
        target: '6'
    },
    {
        id: '10-7',
        type: 'default',
        source: '10',
        target: '7'
    },
    // {
    //     id: '8-9',
    //     type: 'default',
    //     source: '8',
    //     target: '9'
    // },
    // {
    //     id: '8-11',
    //     type: 'default',
    //     source: '8',
    //     target: '11'
    // },
    // {
    //     id: '8-12',
    //     type: 'default',
    //     source: '8',
    //     target: '12'
    // },

];