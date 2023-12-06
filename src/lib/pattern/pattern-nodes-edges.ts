import { Position, type Node, type Edge } from '@xyflow/svelte';
import PBox from './pBox.svelte';
import TopBox from './topBox.svelte';
import BottomBox from './bottomBox.svelte';

const nodeDefaults = {
    sourcePosition: Position.Top,
    targetPosition: Position.Bottom
};
const nodeTypes = {
    simple: PBox,
    tiptop: TopBox,
    bitbottom: BottomBox
};

export const initialNodes: Node[] = [
    {
        id: '0',
        type: 'bitbottom',
        position: { x: -380, y: 0 },
        data: {
            w1: [1, 3, 4], v: [2, 4, 6], sackWeight: 4
        },
        ...nodeDefaults
    },
    {
        id: '1',
        type: 'bitbottom',
        position: { x: 0, y: 0 },
        data: {
            w1: [], v: [], sackWeight: 4
        },
        ...nodeDefaults
    },
    {
        id: '2',
        type: 'simple',
        position: { x: -200, y: 150 },
        data: {
            w1: [1], v: [2], sackWeight: 3
        },
        ...nodeDefaults
    },
    {
        id: '3',
        type: 'simple',
        position: { x: 200, y: 150 },
        data: {
            w1: [], v: [], sackWeight: 4
        },
        ...nodeDefaults
    },
    {
        id: '4',
        type: 'tiptop',
        position: { x: -340, y: 320 },
        data: {
            w1: [1, 3], v: [2, 4], sackWeight: 0
        },
        ...nodeDefaults
    },
    {
        id: '5',
        type: 'tiptop',
        position: { x: -100, y: 320 },
        data: {
            w1: [1], v: [2], sackWeight: 3
        },
        ...nodeDefaults
    },
    {
        id: '6',
        type: 'tiptop',
        position: { x: 130, y: 320 },
        data: {
            w1: [3], v: [4], sackWeight: 1
        },
        ...nodeDefaults
    },
    {
        id: '7',
        type: 'simple',
        position: { x: 350, y: 320 },
        data: {
            w1: [], v: [], sackWeight: 4
        },
        ...nodeDefaults
    },
    // {
    //     id: '8',
    //     type: 'simple',
    //     position: { x: -660, y: 500 },
    //     data: {
    //         w1: [1, 2, 3], v: [1, 2, 1], sackWeight: 4
    //     },
    //     ...nodeDefaults
    // },
    // {
    //     id: '9',
    //     type: 'simple',
    //     position: { x: -460, y: 500 },
    //     data: {
    //         w1: [1, 2, 3], v: [1, 2, 1], sackWeight: 4
    //     },
    //     ...nodeDefaults
    // },
    // {
    //     id: '10',
    //     type: 'simple',
    //     position: { x: -240, y: 500 },
    //     data: {
    //         w1: [1, 2, 3], v: [1, 2, 1], sackWeight: 4
    //     },
    //     ...nodeDefaults
    // },
    // {
    //     id: '11',
    //     type: 'simple',
    //     position: { x: -40, y: 500 },
    //     data: {
    //         w1: [1, 2, 3], v: [1, 2, 1], sackWeight: 4
    //     },
    //     ...nodeDefaults
    // },
    // {
    //     id: '12',
    //     type: 'simple',
    //     position: { x: 170, y: 500 },
    //     data: {
    //         w1: [1, 2, 3], v: [1, 2, 1], sackWeight: 4
    //     },
    //     ...nodeDefaults
    // },
    // {
    //     id: '13',
    //     type: 'simple',
    //     position: { x: 360, y: 500 },
    //     data: {
    //         w1: [1, 2, 3], v: [1, 2, 1], sackWeight: 4
    //     },
    //     ...nodeDefaults
    // },
    {
        id: '14',
        type: 'tiptop',
        position: { x: 200, y: 500 },
        data: {
            w1: [4], v: [6], sackWeight: 0
        },
        ...nodeDefaults
    },
    {
        id: '15',
        type: 'tiptop',
        position: { x: 460, y: 500 },
        data: {
            w1: [], v: [], sackWeight: 4
        },
        ...nodeDefaults
    },


];

export const initialEdges: Edge[] = [
    {
        id: '1-2',
        source: '1',
        target: '2',
        label: 'pick',
    },
    {
        id: '1-3',
        source: '1',
        target: '3',
        label: 'not pick',
        style: 'stroke-width: 2px; stroke: #00FBFFFF;'
    },
    {
        id: '2-4',
        source: '2',
        target: '4',

    },
    {
        id: '2-5',
        source: '2',
        target: '5'
    },
    {
        id: '3-6',
        source: '3',
        target: '6',
    },
    {
        id: '3-7',
        source: '3',
        target: '7',
        style: 'stroke-width: 2px; stroke: #00FBFFFF;'
    },
    {
        id: '4-8',
        source: '4',
        target: '8'
    },
    {
        id: '4-9',
        source: '4',
        target: '9'
    },
    {
        id: '5-10',
        source: '5',
        target: '10'
    },
    {
        id: '5-11',
        source: '5',
        target: '11'
    },
    {
        id: '6-12',
        source: '6',
        target: '12'
    },
    {
        id: '6-13',
        source: '6',
        target: '13'
    },
    {
        id: '7-14',
        source: '7',
        target: '14',
        style: 'stroke-width: 2px; stroke: #00FBFFFF;'
    },
    {
        id: '7-15',
        source: '7',
        target: '15'
    },
];
/* 
 {
        id: 'e1-2',
        source: '1',
        target: '2'
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3'
    }
*/