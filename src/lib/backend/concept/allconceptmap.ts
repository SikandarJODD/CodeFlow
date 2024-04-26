/* 
 Relational Databases - Doable
    1. MySQL
    2. PostgreSQL
    3. SQLite

NoSQL Databases -  Doable
    1. MongoDB
    2. CouchDB
    3. Cassandra

API :           -  Doable
    1. REST API
    2. GraphQL API
    3. SOAP API

Caching :       -  Doable
    1. Server Side :
        - Redis
        - Memcached

    2. Client Side :
        - Local Storage
        - Cookies
    
Scaling Database :   -  Doable
    1. Database Indexing
    2. Data Replication
    3. Database Sharding

ORM :
    1. Drizzle ORM
    2. Prisma ORM

*/
import type { Node, Edge } from '@xyflow/svelte';
import MongoDB from '$lib/images/backend/mongodb.svg';
import MySQL from '$lib/images/backend/mysql.svg';
import PostgreSQL from '$lib/images/backend/postgresql.svg';
import Redis from '$lib/images/backend/redis.svg';
import InfluxDB from '$lib/images/backend/influxdb.svg'
import DrizzlORMIcon from '$lib/images/backend/drizzle.svg'
import PrismaIcon from '$lib/images/backend/prisma_light.svg';
import SQliteIcon from '$lib/images/backend/sqlite.svg'

import { Blinds, BookCopy, Database, GitBranch, Laptop, MonitorDot, RouterIcon, ScrollTextIcon, Server, Split } from 'lucide-svelte';
import { Timer } from 'radix-icons-svelte';
export let conceptNodes: Node[] = [
    {
        id: '1',
        type: 'framework',
        data: { label: 'Relational Databases' },
        position: { x: -210, y: 0 }
    },
    {
        id: '2',
        type: 'framework',
        data: {
            label: 'MySQL',
            icon: MySQL,
            desc: `MySQL is an incredibly popular open source relational database management system (RDBMS). MySQL can be used as a stand-alone client or in conjunction with other services to provide database connectivity. The M in LAMP stack stands for MySQL; that alone should provide an idea of its prevalence.`,
            link: 'https://www.mysql.com',
            docs: 'https://www.w3schools.com/mySQl/default.asp',
            examples: 'https://www.w3schools.com/mySQl/mysql_sql.asp',
            playground: 'https://www.w3schools.com/mySQl/trymysql.asp?filename=trysql_select_all',
        },
        position: { x: -190, y: 140 }
    },
    {
        id: '3',
        type: 'framework',
        data: {
            label: 'PostgreSQL',
            icon: PostgreSQL,
            desc: `PostgreSQL is an advanced, enterprise-class open-source relational database that supports both SQL (relational) and JSON (non-relational) querying. It is a highly stable database management system backed by more than 20 years of community development.`,
            link: 'https://www.postgresql.org',
            docs: 'https://www.postgresqltutorial.com',
            examples: 'https://www.geeksforgeeks.org/what-is-postgresql-introduction/',
        },
        position: { x: -60, y: 140 }
    },
    {
        id: '4',
        type: 'framework',
        data: {
            label: 'SQLite',
            icon: SQliteIcon,
            desc: `SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world. SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day.`,
            link: 'https://www.sqlite.org',
            docs: 'https://www.javatpoint.com/sqlite-tutorial',
        },
        position: { x: -320, y: 140 }
    },
    {
        id: '6',
        type: 'framework',
        data: { label: 'NoSQL Databases' },
        position: { x: 300, y: 0 }
    },
    {
        id: '7',
        type: 'framework',
        data: {
            label: 'MongoDB',
            icon: MongoDB,
            desc: `MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).`,
            link: 'https://www.mongodb.com',
            docs: 'https://www.mongodb.com/docs/',
            examples: 'https://svelte.dev/examples/hello-world',
            playground: 'https://mongoplayground.net',
            starter_code: `npm create svelte@latest myapp
            cd myapp
            npm install
            npm run dev`
        },
        position: { x: 180, y: 140 }
    },
    {
        id: '8',
        type: 'framework',
        data: {
            label: 'InfluxDB',
            icon: InfluxDB,
            desc: `InfluxDB was built from the ground up to be a purpose-built time series database; i.e., it was not repurposed to be time series. Time was built-in from the beginning. InfluxDB is part of a comprehensive platform that supports the collection, storage, monitoring, visualization and alerting of time series data. It's much more than just a time series database.`,
            link: 'https://www.influxdata.com',
            docs: 'https://www.influxdata.com/_resources/',

        },
        position: { x: 320, y: 140 }
    },
    {
        id: '9',
        type: 'framework',
        data: {
            label: 'Cassandra',
            src: Database,
            desc: `Apache Cassandra is an open source NoSQL distributed database trusted by thousands of companies for scalability and high availability without compromising performance. Linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data.`,
            link: 'https://cassandra.apache.org/_/index.html',
            docs: 'https://cassandra.apache.org/doc/latest/',
        },
        position: { x: 450, y: 140 }
    },
    {
        id: '10',
        type: 'framework',
        data: { label: 'API' },
        position: { x: 50, y: 320 }
    },
    {
        id: '11',
        type: 'framework',
        data: {
            label: 'REST API',
            src: GitBranch,
            desc: `REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.`,
            link: 'https://www.codecademy.com/article/what-is-rest',
            docs: 'https://dev.to/cassiocappellari/fundamentals-of-rest-api-2nag',
        },
        position: { x: -100, y: 410 }
    },
    {
        id: '12',
        type: 'framework',
        data: {
            label: 'GraphQL API',
            src: GitBranch,
            desc: `GraphQL is a query language and runtime system for APIs (application programming interfaces). It is designed to provide a flexible and efficient way for clients to request data from servers, and it is often used as an alternative to REST (representational state transfer) APIs.
            One of the main features of GraphQL is its ability to specify exactly the data that is needed, rather than receiving a fixed set of data from an endpoint. This allows clients to request only the data that they need, and it reduces the amount of data that needs to be transferred over the network.`,
            link: 'https://graphql.org',
            docs: 'https://graphql.org/learn/',
        },
        position: { x: 40, y: 410 }
    },
    {
        id: '13',
        type: 'framework',
        data: {
            label: 'JSON API',
            src: GitBranch,
            desc: `JSON or JavaScript Object Notation is an encoding scheme that is designed to eliminate the need for an ad-hoc code for each application to communicate with servers that communicate in a defined way. JSON API module exposes an implementation for data stores and data structures, such as entity types, bundles, and fields.`,
            link: 'https://jsonapi.org',
            docs: 'https://jsonapi.org/implementations/',
            examples: 'https://jsonplaceholder.typicode.com',

        },
        position: { x: 200, y: 410 }
    },
    {
        id: '14',
        type: 'framework',
        data: { label: 'Caching' },
        position: { x: 540, y: 450 }
    },
    {
        id: '15',
        type: 'framework',
        data: {
            label: 'Server Side',
            src: Server,
            desc: `Server-side caching temporarily stores web files and data on the origin server to reuse later.

            When the user first requests for the webpage, the website goes under the normal process of retrieving data from the server and generates or constructs the webpage of the website. After the request has happened and the response has been sent back, the server copies the webpage and stores it as a cache.
            
            Next time the user revisits the website, it loads the already saved or cached copy of the webpage, thus making it faster.`,
            link: 'https://www.starwindsoftware.com/resource-library/server-side-caching/',
            docs: 'https://www.starwindsoftware.com/resource-library/server-side-caching/',
            examples: 'https://www.naukri.com/code360/library/server-side-caching-and-client-side-caching',
        },
        position: { x: 330, y: 530 }
    },
    {
        id: '16',
        type: 'framework',
        data: {
            label: 'Redis',
            icon: Redis,
            desc: `Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine. Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams. Redis has built-in replication, Lua scripting, LRU eviction, transactions, and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.`,
            link: 'https://redis.io',
            docs: 'https://redis.io/docs/latest/',
            examples: 'https://redis.io/learn',
        },
        position: { x: 300, y: 620 }
    },
    {
        id: '17',
        type: 'framework',
        data: {
            label: 'Memcached',
            src: Database,
            desc: `Memcached (pronounced variously mem-cash-dee or mem-cashed) is a general-purpose distributed memory-caching system. It is often used to speed up dynamic database-driven websites by caching data and objects in RAM to reduce the number of times an external data source (such as a database or API) must be read. Memcached is free and open-source software, licensed under the Revised BSD license. Memcached runs on Unix-like operating systems (Linux and macOS) and on Microsoft Windows. It depends on the libevent library.`,
            link: 'https://github.com/memcached/memcached#readme',
            docs: 'https://www.tutorialspoint.com/memcached/index.htm',
        },
        position: { x: 410, y: 620 }
    },
    {
        id: '18',
        type: 'framework',
        data: {
            label: 'Client Side',
            src: Laptop,
            desc: `Client-side caching is the storage of network data to a local cache for future re-use. After an application fetches network data, it stores that resource in a local cache. Once a resource has been cached, the browser uses the cache on future requests for that resource to boost performance.`,
            link: 'https://www.youtube.com/watch?v=HiBDZgTNpXY',
            docs: 'https://css-tricks.com/caching-data-in-sveltekit/',
        },
        position: { x: 680, y: 530 }
    },
    {
        id: '19',
        type: 'framework',
        data: {
            label: 'Local Storage',
            src: RouterIcon,
            desc: `Local storage is a type of web storage that allows web applications to store data within a user's browser. Web storage, which includes local storage, session storage, and cookies, is a way for web pages to store named key/value pairs locally within a client's web browser.`,
            link: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
            docs: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
        },
        position: { x: 600, y: 620 }
    },
    {
        id: '20',
        type: 'framework',
        data: {
            label: 'Cookies',
            src: MonitorDot,
            desc: `Cookies are small pieces of data that websites store on your computer when you visit them. Cookies are used to remember your preferences, keep you logged in, or store shopping cart contents. They can also be used to track you across different websites.`,
            link: 'www.cloudflare.com/learning/privacy/what-are-cookies',
            docs: 'https://lucia-auth.com/upgrade-v3/',
        },
        position: { x: 780, y: 620 }
    },
    {
        id: '21',
        type: 'framework',
        data: { label: 'Scaling Database' },
        position: { x: -650, y: 350 }
    },
    {
        id: '22',
        type: 'framework',
        data: {
            label: 'Database Indexing',
            src: Blinds,
            desc: `Database indexing is a data structure technique that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure. Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed. An index is a data structure that you build and assign on top of an existing table that basically looks through your table and tries to analyze and summarize so that it can create shortcuts.`,
            link: 'https://www.freecodecamp.org/news/database-indexing-at-a-glance-bb50809d48bd/',
            docs: 'https://www.geeksforgeeks.org/indexing-in-databases-set-1/',
            examples: 'https://www.youtube.com/watch?v=-qNSXK7s7_w',
        },
        position: { x: -850, y: 420 }
    },
    {
        id: '23',
        type: 'framework',
        data: {
            label: 'Data Replication',
            src: BookCopy,
            desc: `Database replication is the frequent electronic copying of data from a database in one computer or server to a database in another so that all users share the same level of information. The result is a distributed database in which users can access data relevant to their tasks without interfering with the work of others. Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance (standby instance). Organizations replicate data to support high availability, backup, and/or disaster recovery.`,
            link: 'https://redis.io/blog/what-is-data-replication/',
            docs: 'https://medium.com/@pulkitent/system-design-database-replication-part-1-3dcf4a300db1',
        },
        position: { x: -650, y: 420 }
    },
    {
        id: '24',
        type: 'framework',
        data: {
            label: 'Database Sharding',
            src: Split,
            desc: `Database sharding is a type of database partitioning that separates very large databases into smaller, faster, more easily managed parts called data shards. The word shard means a small part of a whole. The idea behind sharding is to split data into many small databases so that the data can be distributed across many different servers.`,
            link: 'https://www.geeksforgeeks.org/database-sharding-a-system-design-concept/',
            docs: 'https://stackoverflow.blog/2022/03/14/how-sharding-a-database-can-make-it-faster/',
            examples: 'https://kousiknath.medium.com/all-things-sharding-techniques-and-real-life-examples-in-nosql-data-storage-systems-3e8beb98830a'
        },
        position: { x: -460, y: 420 }
    },
    {
        id: '25',
        type: 'framework',
        data: {
            label: 'ORM',

            desc: `Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase “an ORM”.`,
            link: 'https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one/1279678#1279678'
        },
        position: { x: -430, y: 520 }
    },
    {
        id: '26',
        type: 'framework',
        data: {
            label: 'Drizzle ORM',
            icon: DrizzlORMIcon,
            desc: `Drizzle ORM is a headless TypeScript ORM designed with a focus on developer experience and performance. It stands out by offering both relational and SQL-like query APIs, giving developers the flexibility to access their relational data in the way that best suits their needs. Drizzle is lightweight, performant, typesafe, and designed to be serverless-ready. It supports defining and managing database schemas in TypeScript, accessing data through SQL-like or relational queries, and includes tools to enhance developer productivity. Drizzle aims to provide a seamless experience without enforcing a particular project structure, allowing developers to build their applications their own way.`,
            link: 'https://orm.drizzle.team',
            docs: 'https://orm.drizzle.team/docs/overview',
            examples: 'https://orm.drizzle.team/learn/tutorials',
            playground: 'https://orm.drizzle.team/drizzle-studio/overview'
        },
        position: { x: -550, y: 600 }
    },
    {
        id: '27',
        type: 'framework',
        data: {
            label: 'Prisma ORM',
            icon: PrismaIcon,
            desc: `Prisma is an open-source database toolkit. It replaces traditional ORMs and makes database access easy with an auto-generated query builder for TypeScript & Node.js. It supports MySQL, PostgreSQL, SQLite, and SQL Server.`,
            link: 'https://www.prisma.io',
            docs: 'https://www.prisma.io/docs/',
            examples: 'https://github.com/prisma/prisma-examples',
            playground: 'https://playground.prisma.io'
        },
        position: { x: -400, y: 600 }
    },

];

export let conceptEdges: Edge[] = [
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
        id: '6-7',
        type: 'default',
        source: '6',
        target: '7'
    },
    {
        id: '6-8',
        type: 'default',
        source: '6',
        target: '8'
    },
    {
        id: '6-9',
        type: 'default',
        source: '6',
        target: '9'
    },
    {
        id: '10-11',
        type: 'default',
        source: '10',
        target: '11'
    },
    {
        id: '10-12',
        type: 'default',
        source: '10',
        target: '12'
    },
    {
        id: '10-13',
        type: 'default',
        source: '10',
        target: '13'
    },
    {
        id: '14-15',
        type: 'default',
        source: '14',
        target: '15'
    },
    {
        id: '14-18',
        type: 'default',
        source: '14',
        target: '18'
    },
    {
        id: '15-16',
        type: 'default',
        source: '15',
        target: '16'
    },
    {
        id: '15-17',
        type: 'default',
        source: '15',
        target: '17'
    },
    {
        id: '18-19',
        type: 'default',
        source: '18',
        target: '19'
    },
    {
        id: '18-20',
        type: 'default',
        source: '18',
        target: '20'
    },
    {
        id: '21-22',
        type: 'default',
        source: '21',
        target: '22'
    },
    {
        id: '21-23',
        type: 'default',
        source: '21',
        target: '23'
    },
    {
        id: '21-24',
        type: 'default',
        source: '21',
        target: '24'
    },
    {
        id: '25-26',
        type: 'default',
        source: '25',
        target: '26'
    },
    {
        id: '25-27',
        type: 'default',
        source: '25',
        target: '27'
    },


];