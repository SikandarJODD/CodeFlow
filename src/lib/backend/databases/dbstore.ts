import type { Node, Edge } from '@xyflow/svelte';
import MongoDB from '$lib/images/backend/mongodb.svg';
import MySQL from '$lib/images/backend/mysql.svg';
import PostgreSQL from '$lib/images/backend/postgresql.svg';
import Redis from '$lib/images/backend/redis.svg';
import InfluxDB from '$lib/images/backend/influxdb.svg'
import { Database, GitBranch, ScrollTextIcon } from 'lucide-svelte';
import { Timer } from 'radix-icons-svelte';
export let dbNodes: Node[] = [
    {
        id: '1',
        type: 'framework',
        data: { label: 'Databases' },
        position: { x: 0, y: 0 }
    },
    {
        id: '2',
        type: 'framework',
        data: {
            label: 'Relational',
            src: Database,
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
        position: { x: -380, y: 140 }
    },
    {
        id: '12',
        type: 'framework',
        data: {
            label: 'Time Series',
            src: Timer,
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
        position: { x: 400, y: 140 }
    },
    {
        id: '3',
        type: 'framework',
        data: {
            label: 'No SQL',
            src: ScrollTextIcon,
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
        position: { x: -1, y: 140 }
    },
    {
        id: '4',
        type: 'framework',
        data: {
            label: 'Graph Database',
            src: GitBranch,
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
        position: { x: 200, y: 140 }
    },
    {
        id: '5',
        type: 'framework',
        data: {
            label: 'MySQL',
            icon: MySQL,
            desc: `MySQL is an incredibly popular open source relational database management system (RDBMS). MySQL can be used as a stand-alone client or in conjunction with other services to provide database connectivity.`,
            link: 'https://www.mysql.com',
            docs: 'https://www.w3schools.com/mySQl/default.asp',
            examples: 'https://www.mysqltutorial.org',

        },
        position: { x: -450, y: 240 }
    },
    {
        id: '6',
        type: 'framework',
        data: {
            label: 'PostgreSQL',
            icon: PostgreSQL,
            desc: `PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.`,
            link: 'https://www.postgresql.org',
            docs: 'https://www.geeksforgeeks.org/what-is-postgresql-introduction/',
            examples: 'https://www.postgresqltutorial.com',
        },
        position: { x: -320, y: 240 }
    },
    {
        id: '7',
        type: 'framework',
        data: {
            label: 'MongoDB',
            icon: MongoDB,
            desc: `MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.`,
            link: 'https://www.mongodb.com',
            docs: 'https://www.mongodb.com/docs/',
            examples: 'https://learn.mongodb.com/catalog',
            playground: 'https://mongoplayground.nets',
        },
        position: { x: -130, y: 240 }
    },
    {
        id: '8',
        type: 'framework',
        data: {
            label: 'Cassandra',
            src: Database,
            desc: `A wide-column database (sometimes referred to as a column database) is similar to a relational database. Cassandra is an open-source NoSQL distributed database that manages large amounts of data across commodity servers. It is a decentralized, scalable storage system designed to handle vast volumes of data across multiple commodity servers, providing high availability without a single point of failure`,
            link: 'https://cassandra.apache.org/_/index.html',
            docs: 'https://cassandra.apache.org/doc/latest/',
        },
        position: { x: 10, y: 240 }
    },
    {
        id: '9',
        type: 'framework',
        data: {
            label: 'Neo4j',
            src: Database,
            desc: `A Neo4j graph database stores nodes and relationships instead of tables or documents. Data is stored just like you might sketch ideas on a whiteboard. Your data is stored without restricting it to a pre-defined model, allowing a very flexible way of thinking about and using it.Beyond the core graph, Neo4j also provides: ACID transactions, cluster support, and runtime failover.`,
            link: 'https://neo4j.com',
            docs: 'https://neo4j.com/docs/getting-started/get-started-with-neo4j/graph-database/',
            examples: 'https://neo4j.com/developer/',
            playground: 'https://console.neo4j.org',
        },
        position: { x: 280, y: 240 }
    },
    {
        id: '10',
        type: 'framework',
        data: {
            label: 'Redis',
            icon: Redis,
            desc: `Redis is an open source in-memory data store that can be used as a database, cache, or message broker. It's often used for caching web pages and reducing the load on servers. Redis is an in-memory data store used by millions of developers as a cache, vector database, document database, streaming engine, and message broker. Redis has built-in replication and different levels of on-disk persistence. It supports complex data types (e.g., strings, hashes, lists, sets, sorted sets, and JSON), with atomic operations defined on those data types.`,
            link: 'https://redis.io',
            docs: 'https://redis.io/docs/latest/',
            examples: 'https://redis.io/docs/latest/get-started/',
            playground: 'https://redis.io/learn',
        },
        position: { x: 160, y: 240 }
    },
    {
        id: '11',
        type: 'framework',
        data: {
            label: 'InfluxDB',
            icon: InfluxDB,
            desc: `InfluxDB was built from the ground up to be a purpose-built time series database; i.e., it was not repurposed to be time series. Time was built-in from the beginning. InfluxDB is part of a comprehensive platform that supports the collection, storage, monitoring, visualization and alerting of time series data. It's much more than just a time series database.`,
            link: 'https://www.influxdata.com/time-series-database/',
            docs: 'https://docs.influxdata.com/influxdb/v2/get-started/',
            examples: 'https://svelte.dev/examples/hello-world',
            playground: 'https://svelte.dev/repl/hello-world?version=4.2.15',
        },
        position: { x: 413, y: 240 }
    },
];

export let dbEdges: Edge[] = [
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
        id: '1-12',
        type: 'default',
        source: '1',
        target: '12'
    },
    {
        id: '2-5',
        type: 'default',
        source: '2',
        target: '5'
    },
    {
        id: '2-6',
        type: 'default',
        source: '2',
        target: '6'
    },
    {
        id: '3-7',
        type: 'default',
        source: '3',
        target: '7'
    },
    {
        id: '3-8',
        type: 'default',
        source: '3',
        target: '8'
    },
    {
        id: '3-10',
        type: 'default',
        source: '3',
        target: '10'
    },
    {
        id: '4-9',
        type: 'default',
        source: '4',
        target: '9'
    },
    {
        id: '12-11',
        type: 'default',
        source: '12',
        target: '11'
    },
];