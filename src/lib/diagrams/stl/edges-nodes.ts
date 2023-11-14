import type { Edge, Node } from "@xyflow/svelte";
import CenterName from "./centerName.svelte";
import TopName from "./topName.svelte";
import BottomName from "./bottomName.svelte";
import { BarChart3, Brackets, DatabaseZap, Layers, LayoutList, LibrarySquare, NetworkIcon, Waypoints } from "lucide-svelte";
import Lineards from "./desc/lineards.svelte";
import Nonlineards from "./desc/nonlineards.svelte";
import Staticds from "./desc/staticds.svelte";
import Dynamicds from "./desc/dynamicds.svelte";
import Mint from "./desc/DataDesc.svelte";
import DsLight from '$lib/images/allsvgs/ds-light.svg'
import LinearSVG from '$lib/images/allsvgs/data-s-light.svg';
import NonLinearSVG from '$lib/images/allsvgs/nonlinear.svg';
import StaticSVG from '$lib/images/allsvgs/static.svg';
import DynamicSVG from '$lib/images/allsvgs/dynamicds.svg';
import ArraySVG from '$lib/images/allsvgs/array.svg'
import QueueSVG from '$lib/images/allsvgs/queueds.svg'
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
            structName: {
                name: 'A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.',
                img: DsLight,
                examples: ['Linear Data Structure', 'Non-Linear Data Structure'],
                smalltitle: 'Types of Data Structure'
            }
        },
    },
    {
        id: '2',
        type: 'center',
        position: { x: 430, y: 170 },
        data: {
            label: 'Linear Data Structure', icon: LibrarySquare, structName: {
                name: 'Data structure in which data elements are arranged sequentially or linearly, where each element is attached to its previous and next adjacent elements, is called a linear data structure.',
                img: LinearSVG,
                examples: ['Array', 'Stack', 'Linked List', 'Queue'],
                smalltitle: 'Examples of Linear Data Structure'
            }
        }
    },
    {
        id: '3',
        type: 'center',
        position: { x: 800, y: 170 },
        data: {
            label: 'Non-Linear Data Structure', icon: NetworkIcon,
            structName: {
                name: `Data structures where data elements are not placed sequentially or linearly are called non- linear data structures.In a non- linear data structure, we can't traverse all the elements in a single run only.`,
                img: NonLinearSVG,
                examples: ['Tree', 'Graphs', 'Set', 'Map'],
                smalltitle: 'Examples of Non-Linear Data Structure'
            }
        }
    },
    {
        id: '4',
        type: 'center',
        position: { x: 280, y: 280 },
        data: {
            label: 'Static Data Structure',
            structName: {
                name: ' In Static data structure the size of the structure is fixed. The content of the data structure can be modified but without changing the memory space allocated to it.',
                img: StaticSVG,
                examples: ['Array'],
                smalltitle: 'Examples of Static Data Structure'
            }
        }
    },
    {
        id: '5',
        type: 'center',
        position: { x: 544, y: 280 },
        data: {
            label: 'Dynamic Data Structure',
            structName: {
                name: 'Dynamic data structures, such as linked lists, stacks, queues are those that have a variable size and structure at runtime. This means they can be modified or resized as needed.',
                img: DynamicSVG,
                examples: ['Vector', 'Queue', 'LinkedList', 'Stack'],
                smalltitle: 'Examples of Dynamic Data Structure'
            }
        }
    },
    {
        id: '6',
        type: 'top',
        position: { x: 315, y: 400 },
        data: {
            label: 'Array', icon: Brackets,
            structName: {
                name: `An array is a collection of items of the same variable type that are stored at contiguous memory locations. It's one of the most popular and simple data structures and is often used to implement other data structures. Each item in an array is indexed starting with 0.`,
                img: ArraySVG,
                examples: ['Find the Largest element in Array', 'Segregate Even and Odd Numbers', 'Print all Distinct Elements of a given Array', `Sort an Array of 0's, 1's, 2's`, 'Merge two sorted array with 0(1) extra space'],
                smalltitle: 'List of Questions'
            }
        }
    },
    {
        id: '7',
        type: 'top',
        position: { x: 470, y: 400 },
        data: {
            label: 'Queue', icon: LayoutList,
            structName: {
                name: 'A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.A Queue is like a line waiting to purchase tickets, where the first person in line is the first person served.',
                img: QueueSVG,
                examples: ['Simple or Linear Queue', 'Circular Queue', 'Double Ended Queue (or Deque)', 'Priority Queue'],
                smalltitle: 'Types of Queues : '
            }
        }
    },
    {
        id: '8',
        type: 'top',
        position: { x: 590, y: 400 },
        data: {
            label: 'Stack', icon: Layers,
            structName: {
                name: '',
                img: DynamicSVG,
                examples: ['Vec'],
                smalltitle: ''
            }
        }
    },
    {
        id: '9',
        type: 'top',
        position: { x: 710, y: 400 },
        data: {
            label: 'Linked List', icon: Waypoints,
            structName: {
                name: '',
                img: DynamicSVG,
                examples: ['Vec'],
                smalltitle: ''
            }
        }
    },
    {
        id: '10',
        type: 'top',
        position: { x: 800, y: 280 },
        data: {
            label: 'Tree',
            structName: {
                name: '',
                img: DynamicSVG,
                examples: ['Vec'],
                smalltitle: ''
            }
        }
    },
    {
        id: '11',
        type: 'top',
        position: { x: 930, y: 280 },
        data: {
            label: 'Graph', icon: BarChart3,
            structName: {
                name: '',
                img: DynamicSVG,
                examples: ['Vec'],
                smalltitle: ''
            }
        }
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
        data: {
            label: 'Data Structure', structName: {
                name: 'A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.',
                img: DsLight,
                examples: ['Linear Data Structur', 'Non-Linear Data Structure'],
                smalltitle: 'Types of Data Structure'
            }
        } // required
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
        data: { label: 'Array', desc: Mint }
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