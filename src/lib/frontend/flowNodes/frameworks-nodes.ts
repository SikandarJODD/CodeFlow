import type { Node, Edge } from '@xyflow/svelte';
import SvelteLogo from '$lib/images/frameworks/svelte.svg'
import ReactLogo from '$lib/images/frameworks/react.svg'
import VueLogo from '$lib/images/frameworks/vue.svg'

export const frameNodes: Node[] = [
    {
        id: '1',
        type: 'framework',
        data: { label: 'JavaScript Frameworks' },
        position: { x: 0, y: 0 }
    },
    {
        id: '2',
        type: 'framework',
        data: {
            label: 'Svelte JS',
            icon: SvelteLogo
        },
        position: { x: -100, y: 140 }
    },
    {
        id: '3',
        type: 'framework',
        data: { label: 'React JS', icon: ReactLogo },
        position: { x: 40, y: 140 }
    },
    {
        id: '4',
        type: 'framework',
        data: { label: 'Vue JS', icon: VueLogo },
        position: { x: 180, y: 140 }
    }
];

export const frameEdges: Edge[] = [
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
    }
];