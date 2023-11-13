import type { Edge, Node, NodeTypes } from "@xyflow/svelte";
import CenterName from "./centerName.svelte";
import TopName from "./topName.svelte";
import BottomName from "./bottomName.svelte";
import { writable } from "svelte/store";
import { BarChart3, Brackets, Database, DatabaseZap, Layers, LayoutList, LibrarySquare, NetworkIcon, TreesIcon, Waypoints } from "lucide-svelte";
import DataStructure from "./desc/dataStructure.svelte";
import Lineards from "./desc/lineards.svelte";
import Nonlineards from "./desc/nonlineards.svelte";
import Staticds from "./desc/staticds.svelte";
import Dynamicds from "./desc/dynamicds.svelte";
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
        data: {
            label: 'Data Structure',
            icon: DatabaseZap,
            desc: DataStructure
        },
    },
    {
        id: '2',
        type: 'center',
        position: { x: 430, y: 170 },
        data: { label: 'Linear Data Structure', icon: LibrarySquare, desc: Lineards }
    },
    {
        id: '3',
        type: 'center',
        position: { x: 800, y: 170 },
        data: { label: 'Non-Linear Data Structure', icon: NetworkIcon, desc: Nonlineards }
    },
    {
        id: '4',
        type: 'center',
        position: { x: 280, y: 280 },
        data: { label: 'Static Data Structure', desc: Staticds }
    },
    {
        id: '5',
        type: 'center',
        position: { x: 544, y: 280 },
        data: { label: 'Dynamic Data Structure', desc: Dynamicds }
    },
    {
        id: '6',
        type: 'top',
        position: { x: 315, y: 400 },
        data: { label: 'Array', icon: Brackets }
    },
    {
        id: '7',
        type: 'top',
        position: { x: 470, y: 400 },
        data: { label: 'Queue', icon: LayoutList }
    },
    {
        id: '8',
        type: 'top',
        position: { x: 590, y: 400 },
        data: { label: 'Stack', icon: Layers }
    },
    {
        id: '9',
        type: 'top',
        position: { x: 710, y: 400 },
        data: { label: 'Linked List', icon: Waypoints }
    },
    {
        id: '10',
        type: 'top',
        position: { x: 800, y: 280 },
        data: { label: 'Tree' }
    },
    {
        id: '11',
        type: 'top',
        position: { x: 930, y: 280 },
        data: { label: 'Graph', icon: BarChart3 }
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
        type: 'bottom',
        position: { x: 150, y: 30 }, // required
        data: { label: 'Data Structure', desc: DataStructure } // required
    },
    {
        id: '2',
        type: 'center',
        position: { x: 6, y: 150 },
        data: { label: 'Linear Data Structure', desc: Lineards }
    },
    {
        id: '3',
        type: 'center',
        position: { x: 220, y: 150 },
        data: { label: 'Non-Linear Data Structure', desc: Nonlineards }
    },
    {
        id: '4',
        type: 'center',
        position: { x: 6, y: 260 },
        data: { label: 'Static Data Structure', desc: Staticds }
    },
    {
        id: '5',
        type: 'center',
        position: { x: 150, y: 320 },
        data: { label: 'Dynamic Data Structure', desc: Dynamicds }
    },
    {
        id: '6',
        type: 'top',
        position: { x: 10, y: 400 },
        data: { label: 'Array' }
    },
    {
        id: '7',
        type: 'top',
        position: { x: 90, y: 450 },
        data: { label: 'Queue' }
    },
    {
        id: '8',
        type: 'top',
        position: { x: 210, y: 450 },
        data: { label: 'Stack' }
    },
    {
        id: '9',
        type: 'top',
        position: { x: 320, y: 450 },
        data: { label: 'Linked List' }
    },
    {
        id: '10',
        type: 'top',
        position: { x: 250, y: 240 },
        data: { label: 'Tree' }
    },
    {
        id: '11',
        type: 'top',
        position: { x: 330, y: 240 },
        data: { label: 'Graph' }
    }
]