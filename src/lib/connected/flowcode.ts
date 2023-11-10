import { writable } from 'svelte/store';
import { type Node, type Edge } from '@xyflow/svelte';


import '@xyflow/svelte/dist/style.css';
import {
    BarChartIcon,
    BinaryIcon,
    BracketsIcon,
    CombineIcon,
    Files,
    FilesIcon,
    GitBranchIcon,
    GitCompareIcon,
    GitPullRequestCreate,
    NetworkIcon,
    SearchCode,
    SearchCodeIcon,
    Sparkles
} from 'lucide-svelte';
import { webdata } from '$lib';
import SheetFlow from '$lib/diagrams/sv/SheetFlow.svelte';
import BottomEnd from '$lib/diagrams/sv/BottomEnd.svelte';
import Simple from '$lib/diagrams/sv/Simple.svelte';

const nodeTypes = {
    simple: Simple,
    end: BottomEnd,
    sheet: SheetFlow
};

const fitViewOptions = {
    padding: 80,
    minZoom: 10,
    duration: 900
};
export let nodesMint: Node[] = [
    {
        id: '1',
        type: 'sheet',
        position: { x: 700, y: 50 },
        data: {
            label: 'Array & Hashing',
            icon: Sparkles,
            problems: $webdata[0].problems
        }
    },
    {
        id: '2',
        type: 'sheet',
        position: { x: 650, y: 140 },
        data: {
            label: 'Two Pointers',
            problems: $webdata[1].problems
        }
    },
    {
        id: '3',
        type: 'end',
        position: { x: 800, y: 140 },
        data: {
            label: 'Stack',
            icon: FilesIcon,
            problems: $webdata[2].problems
        }
    },
    {
        id: '4',
        type: 'sheet',
        position: { x: 490, y: 240 },
        data: {
            label: 'Binary Search',
            icon: SearchCodeIcon,
            problems: $webdata[3].problems
        }
    },
    {
        id: '5',
        type: 'end',
        position: { x: 670, y: 240 },
        data: {
            label: 'Sliding Window',
            problems: $webdata[4].problems
        }
    },
    {
        id: '6',
        type: 'sheet',
        position: { x: 830, y: 240 },
        data: {
            label: 'Linked List',
            icon: GitBranchIcon,
            problems: $webdata[5].problems
        }
    },
    {
        id: '7',
        type: 'sheet',
        position: { x: 600, y: 330 },
        data: {
            label: 'Tree',
            icon: NetworkIcon,
            problems: $webdata[6].problems
        }
    },
    {
        id: '8',
        type: 'end',
        position: { x: 500, y: 400 },
        data: {
            label: 'Tries',
            problems: $webdata[7].problems
        }
    },
    {
        id: '9',
        type: 'sheet',
        position: { x: 546, y: 480 },
        data: {
            label: 'Heap/ Priority Queue',
            problems: $webdata[9].problems
        }
    },
    {
        id: '10',
        type: 'sheet',
        position: { x: 800, y: 400 },
        data: {
            label: 'Backtracking',
            icon: CombineIcon,
            problems: $webdata[8].problems
        }
    },
    {
        id: '11',
        type: 'end',
        position: { x: 480, y: 600 },
        data: {
            label: 'Intervals',
            problems: $webdata[12].problems
        }
    },
    {
        id: '12',
        type: 'end',
        position: { x: 600, y: 600 },
        data: {
            label: 'Greedy',
            problems: $webdata[13].problems
        }
    },
    {
        id: '13',
        type: 'end',
        position: { x: 710, y: 600 },
        data: {
            label: 'Advance Graphs',
            problems: $webdata[14].problems
        }
    },
    {
        id: '14',
        type: 'sheet',
        position: { x: 790, y: 500 },
        data: {
            label: 'Graphs',
            icon: BarChartIcon,
            problems: $webdata[10].problems
        }
    },
    {
        id: '15',
        type: 'sheet',
        position: { x: 930, y: 500 },
        data: {
            label: '1 DP',
            icon: GitPullRequestCreate,
            problems: $webdata[11].problems
        }
    },
    {
        id: '16',
        type: 'end',
        position: { x: 910, y: 600 },
        data: {
            label: '2 DP',
            icon: GitCompareIcon,
            problems: $webdata[17].problems
        }
    },
    {
        id: '17',
        type: 'sheet',
        position: { x: 1050, y: 600 },
        data: {
            label: 'Bit Manipulation',
            icon: BinaryIcon,
            problems: $webdata[16].problems
        }
    },
    {
        id: '18',
        type: 'end',
        position: { x: 810, y: 660 },
        data: {
            label: 'Math Geometry',
            problems: $webdata[15].problems
        }
    }
];

export let edges: Edge[] = [
    {
        id: '1-2',
        source: '1',
        target: '2',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '1-3',
        source: '1',
        target: '3',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '2-4',
        source: '2',
        target: '4',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '2-5',
        source: '2',
        target: '5',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '2-6',
        source: '2',
        target: '6',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '4-7',
        source: '4',
        target: '7',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '6-7',
        source: '6',
        target: '7',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '7-8',
        source: '7',
        target: '8',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '7-9',
        source: '7',
        target: '9',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '7-10',
        source: '7',
        target: '10',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '9-11',
        source: '9',
        target: '11',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '9-12',
        source: '9',
        target: '12',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '9-13',
        source: '9',
        target: '13',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '10-14',
        source: '10',
        target: '14',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '10-15',
        source: '10',
        target: '15',
        animated: true,
        style: 'stroke: #FFF50FFF;'
    },
    {
        id: '14-13',
        source: '14',
        target: '13',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '15-16',
        source: '15',
        target: '16',
        animated: true,
        style: 'stroke:#FFF50FFF;'
    },
    {
        id: '15-17',
        source: '15',
        target: '17',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '17-18',
        source: '17',
        target: '18',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '14-18',
        source: '14',
        target: '18',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    },
    {
        id: '14-16',
        source: '14',
        target: '16',
        animated: false,
        style: 'stroke: #1C77FFFF;'
    }
];