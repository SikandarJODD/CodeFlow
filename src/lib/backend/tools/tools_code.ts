import type { Node, Edge } from '@xyflow/svelte';
import SvelteLogo from '$lib/images/frameworks/svelte.svg'
import ReactLogo from '$lib/images/frameworks/react.svg'
import VueLogo from '$lib/images/frameworks/vue.svg';
import JSLogo from '$lib/images/frameworks/javascript.svg'
import NextLogo from '$lib/images/frameworks/nextjs_icon_dark.svg'
import NuxtLogo from '$lib/images/frameworks/nuxt.svg'
import PocketBaseLogo from '$lib/images/backend/pocket-base.svg'
import TursoTechLogo from '$lib/images/backend/turso.svg'
import AppwriteLogo from '$lib/images/backend/appwrite.svg'
import XataIoLogo from '$lib/images/backend/xataio.svg'
import { DatabaseIcon, LineChart, Sparkle, Sparkles, SquareCode } from 'lucide-svelte';
import SupabaseLogo from '$lib/images/backend/supabase.svg'
export let toolsNodes: Node[] = [
    {
        id: '1',
        type: 'turbo',
        data: { label: 'Backend as a Service', src: DatabaseIcon },
        position: { x: -250, y: 140 }
    },
    {
        id: '2',
        type: 'turbo',
        data: {
            label: 'Supabase',
            icon: SupabaseLogo,
            short_desc: `Backend as a service`,
            link: 'https://svelte.dev/',
            docs: 'https://svelte.dev/docs/introduction',
            examples: 'https://svelte.dev/examples/hello-world',
            playground: 'https://svelte.dev/repl/hello-world?version=4.2.15',
            starter_code: `npm create svelte@latest myapp
            cd myapp
            npm install
            npm run dev`
        },
        position: { x: 400, y: 0 }
    },
    {
        id: '3',
        type: 'turbo',
        data: {
            label: 'Pocektbase',
            icon: PocketBaseLogo,
            short_desc: `Backend as a service`,
            link: 'https://svelte.dev/',
            docs: 'https://svelte.dev/docs/introduction',
            examples: 'https://svelte.dev/examples/hello-world',
            playground: 'https://svelte.dev/repl/hello-world?version=4.2.15',
            starter_code: `npm create svelte@latest myapp
            cd myapp
            npm install
            npm run dev`
        },
        position: { x: 480, y: 130 }
    },
    {
        id: '4',
        type: 'turbo',
        data: {
            label: 'Turso Tech',
            icon: TursoTechLogo,
            short_desc: `Backend as a service`,
            link: 'https://svelte.dev/',
            docs: 'https://svelte.dev/docs/introduction',
            examples: 'https://svelte.dev/examples/hello-world',
            playground: 'https://svelte.dev/repl/hello-world?version=4.2.15',
            starter_code: `npm create svelte@latest myapp
            cd myapp
            npm install
            npm run dev`
        },
        position: { x: 400, y: 250 }
    },
    {
        id: '5',
        type: 'turbo',
        data: {
            label: 'Apprwite',
            icon: AppwriteLogo,
            short_desc: `Backend as a service`,
            link: 'https://svelte.dev/',
            docs: 'https://svelte.dev/docs/introduction',
            examples: 'https://svelte.dev/examples/hello-world',
            playground: 'https://svelte.dev/repl/hello-world?version=4.2.15',
            starter_code: `npm create svelte@latest myapp
            cd myapp
            npm install
            npm run dev`
        },
        position: { x: 320, y: 370 }
    },
    {
        id: '6',
        type: 'turbo',
        data: {
            label: 'Xata.io',
            icon: XataIoLogo,
            short_desc: `Backend as a service`,
            link: 'https://svelte.dev/',
            docs: 'https://svelte.dev/docs/introduction',
            examples: 'https://svelte.dev/examples/hello-world',
            playground: 'https://svelte.dev/repl/hello-world?version=4.2.15',
            starter_code: `npm create svelte@latest myapp
            cd myapp
            npm install
            npm run dev`
        },
        position: { x: 320, y: -120 }
    },
];

export let toolsEdges: Edge[] = [
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
        target: '4',
    },
    {
        id: '1-5',
        type: 'default',
        source: '1',
        target: '5',
    },
    {
        id: '1-6',
        type: 'default',
        source: '1',
        target: '6',
    },

];