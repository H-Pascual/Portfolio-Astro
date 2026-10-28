import type { Language, Project } from "../entities"
import { DifficultyTypes } from "../types"
import { sortProjects } from "./sortProjects"

import CadenaCoverImage from '../assets/projects/cadena-alimentaria/cadena_cover.png'
import CadenaImage1 from '../assets/projects/cadena-alimentaria/cadena_1.png'
import CadenaImage2 from '../assets/projects/cadena-alimentaria/cadena_2.png'
import CadenaImage3 from '../assets/projects/cadena-alimentaria/cadena_3.png'

import AgoraCoverImage from '../assets/projects/agora/agora_cover.png'
import AgoraImage1 from '../assets/projects/agora/agora_1.png'
import AgoraImage2 from '../assets/projects/agora/agora_2.png'
import AgoraImage3 from '../assets/projects/agora/agora_3.png'

import ReportingCoverImage from '../assets/projects/reporting/reporting_cover.png'
import ReportingImage1 from '../assets/projects/reporting/reporting_1.png'

import DevDashboardCoverImage from '../assets/projects/dev-dashboard/dev_cover.png'
import DevDashboardImage1 from '../assets/projects/dev-dashboard/dev_1.png'

import ListaCompraImage1 from '../assets/projects/lista-compra/lista_compra_1.png'
import ListaCompraImage2 from '../assets/projects/lista-compra/lista_compra_2.png'
import ListaCompraImage3 from '../assets/projects/lista-compra/lista_compra_3.png'

import PythonLogo from '../assets/languages/python.png'
import SqlLogo from '../assets/languages/sql.webp'
import DockerLogo from '../assets/languages/docker-logo.png'

import AulaventuraCoverImage from '../assets/projects/aulaventura/aulaventura_cover.png'
import AulaventuraImage2 from '../assets/projects/aulaventura/aulaventura_2.png'
import AulaventuraImage3 from '../assets/projects/aulaventura/aulaventura_3.png'
import AulaventuraImage4 from '../assets/projects/aulaventura/aulaventura_4.png'
import AulaventuraImage5 from '../assets/projects/aulaventura/aulaventura_5.png'

import RentaNorteCoverImage from '../assets/projects/renta-norte/renta_norte_1.png'
import RentaNorteDetailsImage from '../assets/projects/renta-norte/renta_norte_2.png'
import RentaNortePostsImage from '../assets/projects/renta-norte/renta_norte_3.png'
import RentaNortePostExampleImage from '../assets/projects/renta-norte/renta_norte_4.png'

import CodeSanoCoverImage from '../assets/projects/code-sano/code_sano_1.png'
import CodeSanoCalculatorImage from '../assets/projects/code-sano/code_sano_2.png'
import CodeSanoReviewsImage from '../assets/projects/code-sano/code_sano_3.png'
import CodeSanoDetailsImage from '../assets/projects/code-sano/code_sano_4.png'

import BrokeyCoverImage from '../assets/projects/brokey/brokey-home.png'
import BrokeyActionsImage from '../assets/projects/brokey/brokey-actions.png'
import BrokeyCryptoDetailsImage from '../assets/projects/brokey/brokey-crypto-details.png'
import BrokeyCryptoImage from '../assets/projects/brokey/brokey-crypto.png'
import BrokeyGoodsImage from '../assets/projects/brokey/brokey-goods.png'
import BrokeyGoodsDetailsImage from '../assets/projects/brokey/brokey-goods-details.png'
import BrokeyLoginImage from '../assets/projects/brokey/brokey-login.png'
import BrokeyPortfolioImage from '../assets/projects/brokey/brokey-portfolio.png'
import BrokeyStockImage from '../assets/projects/brokey/brokey-stocks.png'
import BrokeyStockDetailsImage from '../assets/projects/brokey/brokey-stock-details.png'

import CervezasMarinCoverImage from '../assets/projects/cervezas-marin/cervezas-marin-home.png'
import CervezasMarinCartImage from '../assets/projects/cervezas-marin/cervezas-marin-carrito.png'
import CervezasMarinListImage from '../assets/projects/cervezas-marin/cervezas-marin-lista.png'
import CervezasMarinSoldImage from '../assets/projects/cervezas-marin/cervezas-marin-vendidas.png'

import BrawlStarsCoverImage from '../assets/projects/brawl-starts/brawl-starts-details.png'
import BrawlStarsHomeImage from '../assets/projects/brawl-starts/brawl-starts-home.png'

import QuienEsQuienCoverImage from '../assets/projects/quien-es-quien/quien-es-quien-jugador2.png'
import QuienEsQuienAkinatorImage from '../assets/projects/quien-es-quien/quien-es-quien-akinator.png'
import QuienEsQuienHomeImage from '../assets/projects/quien-es-quien/quien-es-quien-home.png'
import QuienEsQuienResultados from '../assets/projects/quien-es-quien/quien-es-quien-resultado.png'
import QuienEsQuienJugadorImage from '../assets/projects/quien-es-quien/quien-es-quien-jugador1.png'

import AstroLogo from '../assets/languages/astro.png'
import ReactLogo from '../assets/languages/react.png'
import CSharpLogo from '../assets/languages/csharp.svg'
import AngularLogo from '../assets/languages/angular.png'
import TypeScriptLogo from '../assets/languages/typescript.png'
import NodeJSLogo from '../assets/languages/node.png'
import MariaDBLogo from '../assets/languages/mariadb.svg'
import ViteLogo from '../assets/languages/vite.png'
import JavaScriptLogo from '../assets/languages/javascript.png'

const Astro: Language = {
    ID: "e72844e0-ed9b-4325-992d-cc968117f106",
    Name: "Astro",
    Link: { Href: "https://astro.build/", Title: "Astro - The web framework for content-driven websites", Target: true },
    Logo: { Image: AstroLogo, Alt: "Astro logo" }
}
const React: Language = {
    ID: "2f06c1e2-2b1e-4df5-b146-396652a822c0",
    Name: "React",
    Link: { Href: "https://react.dev/", Title: "React - JavaScript library for user interfaces", Target: true },
    Logo: { Image: ReactLogo, Alt: "React logo" }
}
const TypeScript: Language = {
    ID: "59d2c5f9-8cbb-4102-98bd-33ee3ae8c52a",
    Name: "TypeScript",
    Link: { Href: "https://www.typescriptlang.org/", Title: "TypeScript - Typed superset of JavaScript", Target: true },
    Logo: { Image: TypeScriptLogo, Alt: "TypeScript logo" }
}
const NodeJS: Language = {
    ID: "09a32624-3a70-48fa-98b6-e6b972d55188",
    Name: "Node.js",
    Link: { Href: "https://nodejs.org/en", Title: "Node.js - Server-side JavaScript runtime", Target: true },
    Logo: { Image: NodeJSLogo, Alt: "Node.js logo" }
}
const Angular: Language = {
    ID: "10a0ef22-9182-4cb7-8365-c01f0615ba6d",
    Name: "Angular",
    Link: { Href: "https://angular.dev/", Title: "Angular - Frontend web framework", Target: true },
    Logo: { Image: AngularLogo, Alt: "Angular logo" }
}
const MariaDB: Language = {
    ID: "4edaf72d-8d4a-48f5-8b65-16a9feca532f",
    Name: "MariaDB",
    Link: { Href: "https://mariadb.org/", Title: "MariaDB - Relational database", Target: true },
    Logo: { Image: MariaDBLogo, Alt: "MariaDB logo" }
}
const Vite: Language = {
    ID: "bc13def4-8308-48db-b1e7-e86203f320af",
    Name: "Vite",
    Link: { Href: "https://vite.dev/", Title: "Vite - Frontend build tool", Target: true },
    Logo: { Image: ViteLogo, Alt: "Vite logo" }
}
const JavaScript: Language = {
    ID: "d3bdd649-b928-458d-9495-6770e510020c",
    Name: "JavaScript",
    Link: { Href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", Title: "JavaScript - The programming language of the web", Target: true },
    Logo: { Image: JavaScriptLogo, Alt: "JavaScript logo" }
}
const CSharp: Language = {
    ID: "29d19837-11c9-454a-a5b6-519ae882b627",
    Name: "C#",
    Link: { Href: "https://learn.microsoft.com/en-us/dotnet/csharp/", Title: "C# - Object-oriented programming language", Target: true },
    Logo: { Image: CSharpLogo, Alt: "C# logo" }
}

const CSharpDotNet: Language = {
    ...CSharp,
    ID: "6b2f9a41-8d3e-4c7a-b5f0-2e9d1c4a7f38",
    Name: "C# / .NET",
    Link: { Href: "https://dotnet.microsoft.com/", Title: "C# and .NET - Aulaventura backend", Target: true },
}

const Python: Language = {
    ID: "8c3a51e2-7b44-4f0e-9d1a-6e2f3b9c0a17",
    Name: "Python",
    Link: { Href: "https://www.python.org/", Title: "Python - Programming language", Target: true },
    Logo: { Image: PythonLogo, Alt: "Python logo" }
}
const Sql: Language = {
    ID: "1f7d2c90-3e5b-4a68-8b2c-9a0e4d6f1b35",
    Name: "SQL",
    Link: { Href: "https://en.wikipedia.org/wiki/SQL", Title: "SQL - Database query language", Target: true },
    Logo: { Image: SqlLogo, Alt: "SQL logo" }
}
const Docker: Language = {
    ID: "5b9e0d43-2a71-4c86-a3f5-7d1e8b2c6f90",
    Name: "Docker",
    Link: { Href: "https://www.docker.com/", Title: "Docker - Containers", Target: true },
    Logo: { Image: DockerLogo, Alt: "Docker logo" }
}

const NoRepo = { Href: "", Title: "", Target: true }

const projects : Project[] = [
    {
        ID: "c4d1a7e8-2f39-4b60-9e15-8a3c6d2b7f41",
        Name: "Cadena Alimentaria",
        Tagline: "Corporate platform to comply with Spain's Food Supply Chain Law, without spreadsheets or folders.",
        Description: "A web platform to manage the supplier contracts required by Spain's Food Supply Chain Law (Law 12/2013, amended by Law 16/2021) across every company in the group. Before, the admin team handled it with Excel files and folders: documents went missing, it was hard to know which contract was about to expire, and a mistake could lead to fines worth millions. Now everything lives in one application: supplier records, contracts with their status and applicable law, contract templates, attachments and certificates, emails sent from the platform itself, alerts for suppliers and contracts due for renewal, auditing and full traceability of every document, and a dashboard showing the work over time. Today it is used by around 10 people across 4 sites. I led the project end to end: architecture, C# and .NET backend, React and TypeScript frontend, and coordinating the two people on my team.",
        Highlights: [
            "Full traceability of contracts and documents to avoid fines",
            "Expiry alerts and a dashboard per site",
            "Emails and contract templates sent from the platform",
        ],
        Difficulty: DifficultyTypes.Hard,
        Category: "professional",
        StartDate: new Date("2025-06-01"),
        EndDate: new Date("2026-03-31"),
        Period: "Jun 2025 – Mar 2026",
        Role: "Technical lead: architecture, backend, frontend and team lead",
        Team: "Led 2 developers",
        Metrics: [{ Value: "4", Label: "sites in production" }, { Value: "2", Label: "developers on my team" }, { Value: "1,150+", Label: "commits in the project" }],
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/cadena-alimentaria/", Title: "Cadena Alimentaria project details", Target: false },
        GithubLink: NoRepo,
        Languages: [CSharpDotNet, React, TypeScript],
        CoverImage: { Image: CadenaCoverImage, Alt: "Cadena Alimentaria dashboard with actions, suppliers on alert and contracts due for renewal" },
        Images: [
            { Image: CadenaCoverImage, Alt: "Dashboard with actions over time, suppliers with valid contracts and contracts due for renewal" },
            { Image: CadenaImage1, Alt: "Supplier record with contracts, status, dates and applicable law (sample data)" },
            { Image: CadenaImage2, Alt: "Supplier attachments: certificates, registrations and contracts by type" },
            { Image: CadenaImage3, Alt: "Sales rep management with import and editing (sample data)" },
        ]},
    {
        ID: "a9e3f5b2-6c18-4d47-b0a2-5f7e1c9d3a86",
        Name: "Ágora",
        Tagline: "Sales and warehouse app for wholesale fruit markets: from tablet order to weighing.",
        Description: "Ágora is the complete app for day-to-day operations in wholesale fruit and vegetable markets such as Mercabarna, Mercamadrid, Mercasevilla or Mercaalicante. It replaces clerks and paper notes: sales reps take customer orders on tablets with a visual catalogue by product family, check stock, costs and latest prices, and the warehouse receives the orders for picking by priority and aisle, weighing with gross, tare and net weight, and label printing. It is built for several sites and companies at once and to handle thousands of orders a day. I mainly owned the architecture and the C# and .NET backend, plus part of the React and TypeScript frontend. First release planned for November 2026.",
        Highlights: [
            "Tablet ordering with a visual catalogue, stock and latest prices",
            "Picking by priority and aisle, weighing and labels",
            "Multi-site and multi-company, built for thousands of daily orders",
        ],
        Difficulty: DifficultyTypes.Hard,
        Category: "professional",
        StartDate: new Date("2025-07-01"),
        EndDate: new Date("2026-11-30"),
        Ongoing: true,
        Period: "Jul 2025 – present (release Nov 2026)",
        Role: "Architecture and backend; part of the frontend",
        Metrics: [{ Value: "4+", Label: "wholesale markets planned" }, { Value: "Thousands", Label: "of daily orders expected" }],
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/agora/", Title: "Ágora project details", Target: false },
        GithubLink: NoRepo,
        Languages: [CSharpDotNet, React, TypeScript],
        CoverImage: { Image: AgoraImage1, Alt: "Ágora visual product catalogue for taking orders on a tablet" },
        Images: [
            { Image: AgoraCoverImage, Alt: "Entering weights for an order: quantity, gross kilos, tare and net" },
            { Image: AgoraImage1, Alt: "Visual product catalogue by family for taking orders on a tablet" },
            { Image: AgoraImage2, Alt: "Product sheet with quantity, price, product standard and available stock" },
            { Image: AgoraImage3, Alt: "Order picking list with priority, aisle and printing" },
        ]},
    {
        ID: "e2b8c6d1-9a54-4f3e-8c71-3d6a0f5b9e24",
        Name: "Reporting",
        Tagline: "Central reporting service for every application in the company.",
        Description: "Reporting centralises every report the company uses, built on DevExpress Reporting. Other applications don't generate their own reports: they connect to it through an API, request the report they need and get it back generated. The frontend is used to create, edit and version reports easily, organise them by project, manage users and run backups. I built the entire backend on my own and designed the architecture and internal logic; two people on my team built the frontend under my lead.",
        Highlights: [
            "A single reporting service consumed via API by every other app",
            "Visual editor to change reports without touching code",
            "Organised by project, with backups",
        ],
        Difficulty: DifficultyTypes.Hard,
        Category: "professional",
        StartDate: new Date("2025-01-01"),
        EndDate: new Date("2026-07-31"),
        Period: "Jan 2025 – Jun 2025 · new frontend Apr – Jul 2026",
        Role: "Architecture and full backend; frontend lead",
        Team: "Led 2 developers",
        Metrics: [{ Value: "20+", Label: "centralised reports" }, { Value: "1", Label: "API for every application" }, { Value: "2", Label: "developers on my team" }],
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/reporting/", Title: "Reporting project details", Target: false },
        GithubLink: NoRepo,
        Languages: [CSharpDotNet, React, TypeScript],
        CoverImage: { Image: ReportingCoverImage, Alt: "Reporting list of reports by project with actions" },
        Images: [
            { Image: ReportingCoverImage, Alt: "List of reports with project, dates and edit and download actions" },
            { Image: ReportingImage1, Alt: "Visual report editor based on DevExpress Reporting" },
        ]},
    {
        ID: "f7a2d9c3-1e86-4b5a-9d30-6c8e2b4f1a75",
        Name: "Dev Dashboard",
        Tagline: "Development team metrics, gamified and live.",
        Description: "A Python dashboard built with Dash that pulls data from Azure DevOps (commits, pull requests, reviews, user stories and lines of code) and turns it into team metrics by day, week, month or year. It includes a scoring formula that gamifies the work, activity over the last 12 weeks, a comparison between developers, the status of each project and Excel export. Managers use it to track the team. I came up with it and built it on my own, from zero to production, in one month.",
        Highlights: [
            "Integration with the Azure DevOps API",
            "Gamified scoring for commits, PRs, reviews and user stories",
            "Per-project and per-developer views, with Excel export",
        ],
        Difficulty: DifficultyTypes.Medium,
        Category: "professional",
        StartDate: new Date("2026-08-01"),
        EndDate: new Date("2026-08-31"),
        Period: "Aug 2026",
        Role: "Idea, design and full development",
        Team: "Solo",
        Metrics: [{ Value: "1 month", Label: "from idea to production" }, { Value: "20+", Label: "projects tracked" }, { Value: "7", Label: "developers on the board" }],
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/dev-dashboard/", Title: "Dev Dashboard project details", Target: false },
        GithubLink: NoRepo,
        Languages: [Python],
        CoverImage: { Image: DevDashboardCoverImage, Alt: "Team dashboard with commits, pull requests, user stories and scoring" },
        Images: [
            { Image: DevDashboardCoverImage, Alt: "Last month summary: commits, PRs, user stories, lines and scoring formula" },
            { Image: DevDashboardImage1, Alt: "Projects view with activity, commits, PRs and user stories (names hidden)" },
        ]},
    {
        ID: "b5c0e8a4-7d29-4f61-a3b8-2e9f6d1c4b07",
        Name: "Shopping list",
        Tagline: "My NFC shopping list, self-hosted on a Raspberry Pi.",
        Description: "A personal app to manage the household shopping. Items are organised by category (groceries, clothing, home, pharmacy…), with quantity, unit and description, and the list is emailed to up to 10 people from a Gmail account. It opens by tapping the phone on an NFC tag. Built with Astro and a small SQL database, and deployed with Docker on my own Raspberry Pi 5 running Linux.",
        Highlights: [
            "Instant access with an NFC tag",
            "List emailed to several people",
            "Self-hosted with Docker on a Raspberry Pi 5",
        ],
        Difficulty: DifficultyTypes.Easy,
        Category: "personal",
        StartDate: new Date("2026-09-01"),
        EndDate: new Date("2026-09-30"),
        Period: "Sep 2026",
        Role: "Personal project: development and infrastructure",
        Team: "Solo",
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/lista-compra/", Title: "Shopping list project details", Target: false },
        GithubLink: NoRepo,
        Languages: [Astro, Sql, Docker],
        CoverImage: { Image: ListaCompraImage1, Alt: "Shopping list with categories and items" },
        Images: [
            { Image: ListaCompraImage1, Alt: "Shopping list with categories and items" },
            { Image: ListaCompraImage2, Alt: "Form to add an item with quantity, unit and category" },
            { Image: ListaCompraImage3, Alt: "Settings for the people the list is sent to" },
        ]},
    {
        ID: "7c1d2f0e-5a3b-4e8f-9b61-2d4a8c3e9f10",
        Name: "Aulaventura",
        Tagline: "Classroom gamification: the syllabus turned into an adventure campaign.",
        Description: "Aulaventura is a platform for primary and secondary school teachers that turns the syllabus into campaigns with maps, quests, battles and rewards. The teacher picks a map, adds stages and challenges, and the class progresses as a party of heroes: every right answer in a quiz battle damages the final boss and every mistake costs health. It includes a class dashboard to hand out XP and gold to the whole group, an in-game shop and trading (no real money), an optional leaderboard and AI-powered historical characters, like Dalí or Napoleon, who answer in the first person. I designed and built the whole product: the landing page in Astro and TypeScript and the backend in C# with .NET, from the data model to the game experience.",
        Highlights: [
            "Campaigns with maps, stages and a final boss, ready in minutes",
            "AI historical characters that speak in the first person",
            "Class dashboard with XP, gold, shop and trading",
        ],
        Difficulty: DifficultyTypes.Hard,
        Category: "personal",
        StartDate: new Date("2026-10-01"),
        Period: "Oct 2026 – present",
        Ongoing: true,
        Role: "Own product: idea, design, backend and frontend",
        Team: "Solo",
        EndDate: new Date("2026-10-27"),
        HasDemo: true,
        DemoLink: { Href: "https://aulaventura.dev", Title: "Visit the Aulaventura website", Target: true },
        DetailsLink: { Href: "/en/projects/aulaventura/", Title: "Aulaventura project details", Target: false },
        GithubLink: NoRepo,
        Languages: [Astro, TypeScript, CSharpDotNet],
        CoverImage: { Image: AulaventuraCoverImage, Alt: "Aulaventura cover: your class, turned into an adventure" },
        Images: [
            { Image: AulaventuraCoverImage, Alt: "Aulaventura cover with a Spartan warrior at sunset" },
            { Image: AulaventuraImage2, Alt: "Aulaventura: what if you stopped competing with video games and started playing on their team?" },
            { Image: AulaventuraImage3, Alt: "Aulaventura features: the syllabus as an adventure map and characters who tell the lesson" },
            { Image: AulaventuraImage4, Alt: "Student hero customisation and class dashboard with XP, gold and health" },
            { Image: AulaventuraImage5, Alt: "Aulaventura waiting list with perks for founding teachers" },
        ],
        Video: { Src: "/videos/aulaventura-demo.mp4", SrcWebm: "/videos/aulaventura-demo.webm", Poster: "/videos/aulaventura-demo-poster.jpg", Title: "Aulaventura 2-minute demo" },
    },
    {
        ID: "4a4e2198-d3fc-453a-8f0c-f51abaa490c5",
        Name: "CodeSano",
        Tagline: "Rescue service for AI-built apps: diagnosis, fixes and security.",
        Description: "CodeSano is my service for founders who built their app with Lovable, Bolt, Replit or Cursor and are afraid to launch it. I designed and built the lead-generation website with Astro: a clear message for a non-technical audience, plans with guide prices, an interactive quote calculator, real case studies, reviews and a four-step process (free diagnosis, fixed quote, milestone deliveries and explained code). Behind the site is the real work: auditing, fixing and hardening AI-generated code so it holds up with real users.",
        Highlights: [
            "Conversion landing page for a non-technical audience",
            "Interactive quote calculator",
            "Free diagnosis, fixed price and phased payments",
        ],
        Difficulty: DifficultyTypes.Medium,
        Category: "personal",
        StartDate: new Date("2026-06-01"),
        Period: "Jun 2026 – present",
        Ongoing: true,
        Role: "Own service: website, lead generation and development",
        Team: "Solo",
        Metrics: [{ Value: "4.5/5", Label: "average client rating" }, { Value: "4 steps", Label: "diagnosis, quote, milestones and handover" }],
        EndDate: new Date("2026-10-27"),
        HasDemo: true,
        DemoLink: { Href: "https://codesano.com", Title: "Visit the CodeSano website", Target: true },
        DetailsLink: { Href: "/en/projects/code-sano/", Title: "CodeSano project details", Target: false },
        GithubLink: NoRepo,
        Languages: [Astro, TypeScript],
        CoverImage: { Image: CodeSanoCoverImage, Alt: "CodeSano cover: an AI built your app, I make it actually work" },
        Images: [
            { Image: CodeSanoCoverImage, Alt: "CodeSano website cover" },
            { Image: CodeSanoCalculatorImage, Alt: "CodeSano quote calculator" },
            { Image: CodeSanoReviewsImage, Alt: "Client reviews on CodeSano" },
            { Image: CodeSanoDetailsImage, Alt: "CodeSano work process and guarantees" },
        ],
    },
    {
        ID: "b381c29d-0264-4f65-95dd-8076b3591127",
        Name: "Renta Norte",
        Tagline: "Data-driven real estate investment newsletter for Alicante.",
        Description: "Renta Norte is a free weekly newsletter for investing in Alicante property based on data rather than gut feeling. I built the website with Astro: subscription landing page, analysis blog, rental yield map by area, yield and mortgage amortisation calculators, and a proprietary database covering the 141 municipalities of the province. A new analysis of areas and opportunities goes out every Sunday.",
        Highlights: [
            "Rental yield map by area across Alicante",
            "Yield and mortgage amortisation calculators",
            "Proprietary data on 141 municipalities",
        ],
        Difficulty: DifficultyTypes.Medium,
        Category: "personal",
        StartDate: new Date("2026-04-01"),
        Period: "Apr 2026 – Sep 2026",
        Role: "Own product: website, data and content",
        Team: "Solo",
        Metrics: [{ Value: "60+", Label: "subscribers" }, { Value: "141", Label: "municipalities in the database" }],
        EndDate: new Date("2026-09-30"),
        HasDemo: true,
        DemoLink: { Href: "https://rentanorte.com", Title: "Visit the Renta Norte website", Target: true },
        DetailsLink: { Href: "/en/projects/renta-norte/", Title: "Renta Norte project details", Target: false },
        GithubLink: NoRepo,
        Languages: [Astro],
        CoverImage: { Image: RentaNorteCoverImage, Alt: "Renta Norte cover: find profitable flats in Alicante" },
        Images: [
            { Image: RentaNorteCoverImage, Alt: "Renta Norte newsletter cover" },
            { Image: RentaNorteDetailsImage, Alt: "Renta Norte landing page sections" },
            { Image: RentaNortePostsImage, Alt: "List of published analyses on Renta Norte" },
            { Image: RentaNortePostExampleImage, Alt: "Example property analysis on Renta Norte" },
        ],
    },
    {
        ID: "d595f540-3058-45b7-9f14-b0d4342f45a9",
        Name: "Brokey",
        Tagline: "An investing platform for people who have never invested.",
        Description: "Brokey is a web application built with Angular and TypeScript that makes investing approachable for beginners. Users can buy, sell and track stocks, cryptocurrencies and commodities from a simple interface, with custom portfolios, interactive charts, secure authentication and real market data through a mirror API.",
        Difficulty: DifficultyTypes.Hard,
        Category: "academic",
        StartDate: new Date("2024-03-01"),
        Period: "Jun 2024",
        Role: "Final project of the Web Application Development diploma",
        EndDate: new Date("2024-06-30"),
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/brokey/", Title: "Brokey project details", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/Brokey_FrontEnd", Title: "Brokey FrontEnd repository on GitHub", Target: true },
        Languages: [Angular, TypeScript, MariaDB, NodeJS],
        CoverImage: { Image: BrokeyCoverImage, Alt: "Brokey main dashboard" },
        Images: [
            { Image: BrokeyCoverImage, Alt: "Brokey main dashboard" },
            { Image: BrokeyActionsImage, Alt: "Stock management in Brokey" },
            { Image: BrokeyPortfolioImage, Alt: "Custom portfolio in Brokey" },
            { Image: BrokeyLoginImage, Alt: "Brokey login screen" },
            { Image: BrokeyGoodsImage, Alt: "Commodities list in Brokey" },
            { Image: BrokeyGoodsDetailsImage, Alt: "Commodity details in Brokey" },
            { Image: BrokeyCryptoImage, Alt: "Cryptocurrency list in Brokey" },
            { Image: BrokeyCryptoDetailsImage, Alt: "Cryptocurrency details in Brokey" },
            { Image: BrokeyStockImage, Alt: "Stock list in Brokey" },
            { Image: BrokeyStockDetailsImage, Alt: "Stock details in Brokey" },
        ],
    },
    {
        ID: "a1537fa1-325b-4bf0-b9ce-ae4260594374",
        Name: "Cervezas Marín",
        Tagline: "Craft beer online shop with cart and filters.",
        Description: "Cervezas Marín is a fictional craft beer online shop built with TypeScript, SCSS and Vite. It includes a catalogue with type and price filters, best sellers, a shopping cart and a responsive layout. A clean frontend exercise, ready to be connected to a real backend.",
        Difficulty: DifficultyTypes.Medium,
        Category: "academic",
        StartDate: new Date("2024-04-01"),
        Period: "Apr 2024",
        Role: "Training project",
        EndDate: new Date("2024-04-30"),
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/cervezas/", Title: "Cervezas Marín project details", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/CervezasMarin", Title: "Cervezas Marín repository on GitHub", Target: true },
        Languages: [TypeScript, Vite],
        CoverImage: { Image: CervezasMarinCoverImage, Alt: "Cervezas Marín shop homepage" },
        Images: [
            { Image: CervezasMarinCoverImage, Alt: "Cervezas Marín shop homepage" },
            { Image: CervezasMarinCartImage, Alt: "Shopping cart in Cervezas Marín" },
            { Image: CervezasMarinListImage, Alt: "Craft beer catalogue in Cervezas Marín" },
            { Image: CervezasMarinSoldImage, Alt: "Best-selling beers in Cervezas Marín" },
        ],
    },
    {
        ID: "4bc0e413-0fc2-4353-acf0-7c92c5937203",
        Name: "Who's Who",
        Tagline: "C# desktop game with an Akinator-style mode.",
        Description: "A C# and Windows Forms desktop app inspired by Akinator and the classic Guess Who?, featuring League of Legends characters. It has two modes: the computer guesses your character with dynamic questions and progressive filtering, or two players face each other. An educational project, not affiliated with Riot Games.",
        Difficulty: DifficultyTypes.Medium,
        Category: "academic",
        StartDate: new Date("2023-12-01"),
        Period: "Dec 2023",
        Role: "Training project",
        EndDate: new Date("2023-12-31"),
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/quien-es-quien/", Title: "Who's Who project details", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/QuienEsQuienLOL", Title: "Who's Who LoL repository on GitHub", Target: true },
        Languages: [CSharp],
        CoverImage: { Image: QuienEsQuienCoverImage, Alt: "Who's Who game from player 2's view" },
        Images: [
            { Image: QuienEsQuienHomeImage, Alt: "Who's Who start screen" },
            { Image: QuienEsQuienAkinatorImage, Alt: "Akinator mode guessing a character" },
            { Image: QuienEsQuienCoverImage, Alt: "Player 2 interface" },
            { Image: QuienEsQuienJugadorImage, Alt: "Player 1 interface" },
            { Image: QuienEsQuienResultados, Alt: "Results screen" },
        ],
    },
    {
        ID: "80aae9da-db13-48a5-bdf7-09afbdad3484",
        Name: "Brawl Stars",
        Tagline: "Interactive character viewer in plain JavaScript.",
        Description: "A Brawl Stars character viewer built with HTML, CSS and JavaScript, with no dependencies. Users explore character cards with drag and drop and filter by character type. One of my first projects, focused on confident DOM manipulation.",
        Difficulty: DifficultyTypes.Easy,
        Category: "academic",
        StartDate: new Date("2023-06-01"),
        Period: "Jun 2023",
        Role: "Training project",
        EndDate: new Date("2023-06-30"),
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/brawl-stars/", Title: "Brawl Stars project details", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/BrawlStars", Title: "Brawl Stars repository on GitHub", Target: true },
        Languages: [JavaScript],
        CoverImage: { Image: BrawlStarsCoverImage, Alt: "Character card in the Brawl Stars viewer" },
        Images: [
            { Image: BrawlStarsHomeImage, Alt: "Brawl Stars viewer main screen" },
            { Image: BrawlStarsCoverImage, Alt: "Character card in the Brawl Stars viewer" },
        ],
    },
]

export const ProjectListEn : Project[] = sortProjects(projects)
