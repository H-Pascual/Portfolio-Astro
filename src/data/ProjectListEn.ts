import type { Language, Project } from "../entities"
import { DifficultyTypes } from "../types"

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

const NoRepo = { Href: "", Title: "", Target: true }

export const ProjectListEn : Project[] = [
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
        EndDate: new Date("2026-10-20"),
        HasDemo: true,
        DemoLink: { Href: "https://aulaventura.dev", Title: "Visit the Aulaventura website", Target: true },
        DetailsLink: { Href: "/en/projects/aulaventura", Title: "Aulaventura project details", Target: false },
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
        EndDate: new Date("2026-07-05"),
        HasDemo: true,
        DemoLink: { Href: "https://codesano.com", Title: "Visit the CodeSano website", Target: true },
        DetailsLink: { Href: "/en/projects/code-sano", Title: "CodeSano project details", Target: false },
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
        EndDate: new Date("2026-04-21"),
        HasDemo: true,
        DemoLink: { Href: "https://rentanorte.com", Title: "Visit the Renta Norte website", Target: true },
        DetailsLink: { Href: "/en/projects/renta-norte", Title: "Renta Norte project details", Target: false },
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
        EndDate: new Date("2024-05-13"),
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/brokey", Title: "Brokey project details", Target: false },
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
        EndDate: new Date("2024-02-05"),
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/cervezas", Title: "Cervezas Marín project details", Target: false },
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
        EndDate: new Date("2023-05-17"),
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/quien-es-quien", Title: "Who's Who project details", Target: false },
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
        EndDate: new Date("2023-03-23"),
        HasDemo: false,
        DetailsLink: { Href: "/en/projects/brawl-stars", Title: "Brawl Stars project details", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/BrawlStars", Title: "Brawl Stars repository on GitHub", Target: true },
        Languages: [JavaScript],
        CoverImage: { Image: BrawlStarsCoverImage, Alt: "Character card in the Brawl Stars viewer" },
        Images: [
            { Image: BrawlStarsHomeImage, Alt: "Brawl Stars viewer main screen" },
            { Image: BrawlStarsCoverImage, Alt: "Character card in the Brawl Stars viewer" },
        ],
    },
]
