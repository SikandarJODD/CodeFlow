import type { Edge, Node, NodeTypes } from "@xyflow/svelte";
import CenterName from "./centerName.svelte";
import TopName from "./topName.svelte";
import BottomName from "./bottomName.svelte";
import { writable } from "svelte/store";
export let nodeTypes = {
    center: CenterName,
    top: TopName,
    bottom: BottomName
};
export let initialnode = [
    {
        id: '1', // required and needs to be a string,
        type: 'bottom',
        position: { x: 650, y: 50 }, // required
        data: { label: 'Data Structure' }, // required
    },
    {
        id: '2',
        type: 'center',
        position: { x: 430, y: 170 },
        data: { label: 'Linear Data Structure' }
    },
    {
        id: '3',
        type: 'center',
        position: { x: 870, y: 170 },
        data: { label: 'Non-Linear Data Structure' }
    },
    {
        id: '4',
        type: 'center',
        position: { x: 280, y: 280 },
        data: { label: 'Static Data Structure' }
    },
    {
        id: '5',
        type: 'center',
        position: { x: 544, y: 280 },
        data: { label: 'Dynamic Data Structure' }
    },
    {
        id: '6',
        type: 'top',
        position: { x: 315, y: 400 },
        data: { label: 'Array' }
    },
    {
        id: '7',
        type: 'top',
        position: { x: 470, y: 400 },
        data: { label: 'Queue' }
    },
    {
        id: '8',
        type: 'top',
        position: { x: 590, y: 400 },
        data: { label: 'Stack' }
    },
    {
        id: '9',
        type: 'top',
        position: { x: 710, y: 400 },
        data: { label: 'Linked List' }
    },
    {
        id: '10',
        type: 'top',
        position: { x: 850, y: 280 },
        data: { label: 'Tree' }
    },
    {
        id: '11',
        type: 'top',
        position: { x: 1000, y: 280 },
        data: { label: 'Graph' }
    }
];
export let initialEdges: Edge[] = [
    { id: '1-2', source: '1', target: '2', },
    { id: '1-3', source: '1', target: '3' },
    {
        id: '2-4',
        source: '2',
        target: '4'
    },
    {
        id: '2-5',
        source: '2',
        target: '5'
    },
    {
        id: '4-6',
        source: '4',
        target: '6'
    },
    {
        id: '5-7',
        source: '5',
        target: '7'
    },
    {
        id: '5-8',
        source: '5',
        target: '8'
    },
    {
        id: '5-9',
        source: '5',
        target: '9'
    },
    {
        id: '3-10',
        source: '3',
        target: '10'
    },
    {
        id: '3-11',
        source: '3',
        target: '11'
    }
]
export let mobile: Node[] = [
    {
        id: '1', // required and needs to be a string,
        type: 'center',
        position: { x: 150, y: 30 }, // required
        data: { label: 'Data Structure' } // required
    },
    {
        id: '2',
        type: 'center',
        position: { x: 6, y: 150 },
        data: { label: 'Linear Data Structure' }
    },
    {
        id: '3',
        type: 'center',
        position: { x: 190, y: 150 },
        data: { label: 'Non-Linear Data Structure' }
    },
    {
        id: '4',
        type: 'center',
        position: { x: 6, y: 240 },
        data: { label: 'Static Data Structure' }
    },
    {
        id: '5',
        type: 'center',
        position: { x: 100, y: 320 },
        data: { label: 'Dynamic Data Structure' }
    },
    {
        id: '6',
        type: 'center',
        position: { x: 10, y: 400 },
        data: { label: 'Array' }
    },
    {
        id: '7',
        type: 'center',
        position: { x: 65, y: 450 },
        data: { label: 'Queue' }
    },
    {
        id: '8',
        type: 'center',
        position: { x: 150, y: 450 },
        data: { label: 'Stack' }
    },
    {
        id: '9',
        type: 'center',
        position: { x: 230, y: 450 },
        data: { label: 'Linked List' }
    },
    {
        id: '10',
        type: 'center',
        position: { x: 210, y: 240 },
        data: { label: 'Tree' }
    },
    {
        id: '11',
        type: 'center',
        position: { x: 300, y: 240 },
        data: { label: 'Graph' }
    }
]