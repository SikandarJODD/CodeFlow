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
            desc: `Supabase is an open source Firebase alternative.Supabase is an incredible tool for building secure and high-performance Postgres backends with minimal configuration. It provides developers with a wide array of functionalities similar to Firebase, such as authentication, real-time database, and storage. However, as an open-source alternative, Supabase grants you greater flexibility and control over your data and applications.`,
            link: 'https://supabase.com',
            docs: 'https://supabase.com/docs',
            examples: 'https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit',
        },
        position: { x: 400, y: 0 }
    },
    {
        id: '3',
        type: 'turbo',
        data: {
            label: 'Pocektbase',
            icon: PocketBaseLogo,
            desc: "PocketBase is an open source backend consisting of embedded database (SQLite) with realtime subscriptions, built-in auth management, convenient dashboard UI and simple REST-ish API.",
            short_desc: `Backend as a service`,
            link: 'https://pocketbase.io',
            docs: 'https://pocketbase.io/docs/',
        },
        position: { x: 480, y: 130 }
    },
    {
        id: '4',
        type: 'turbo',
        data: {
            label: 'Turso Tech',
            icon: TursoTechLogo,
            desc: "Turso is a SQLite-compatible database built on libSQL, the Open Contribution fork of SQLite. It enables scaling to hundreds of thousands of databases per organization and supports replication to any location, including your own servers, for microsecond-latency access.",
            short_desc: `Backend as a service`,
            link: 'https://turso.tech',
            docs: 'https://docs.turso.tech/introduction',
            examples: 'https://docs.turso.tech/sdk/ts/quickstart',
        },
        position: { x: 400, y: 250 }
    },
    {
        id: '5',
        type: 'turbo',
        data: {
            label: 'Apprwite',
            icon: AppwriteLogo,
            desc: "Appwrite is an Open-source platform that lets you add Auth, DBs, Functions and Storage to your product and build any application at any scale, own your data, and use your preferred coding languages and tools",
            short_desc: `Backend as a service`,
            link: 'https://appwrite.io',
            docs: 'https://appwrite.io/docs',
            examples: 'https://appwrite.io/docs/tutorials',

        },
        position: { x: 320, y: 370 }
    },
    {
        id: '6',
        type: 'turbo',
        data: {
            label: 'Xata.io',
            icon: XataIoLogo,
            desc: `Xata is a serverless data platform. Built on top of PostgreSQL, Xata provides a full-text and vector search engine, record-level file attachments, table-level aggregations and exposes a single consistent REST API with SDKs. Xata provides support for schema branches and an optional ask endpoint to engage with with OpenAI's ChatGPT API.`,
            short_desc: `Backend as a service`,
            link: 'https://xata.io/',
            docs: 'https://xata.io/docs',
            examples: 'https://xata.io/docs/examples/gallery-app',

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