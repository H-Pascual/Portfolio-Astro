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
    Link: { Href: "https://astro.build/", Title: "Astro - Framework web orientado a contenido", Target: true },
    Logo: { Image: AstroLogo, Alt: "Logo de Astro" }
}
const React: Language = {
    ID: "2f06c1e2-2b1e-4df5-b146-396652a822c0",
    Name: "React",
    Link: { Href: "https://react.dev/", Title: "React - Biblioteca JavaScript para interfaces de usuario", Target: true },
    Logo: { Image: ReactLogo, Alt: "Logo de React" }
}
const TypeScript: Language = {
    ID: "59d2c5f9-8cbb-4102-98bd-33ee3ae8c52a",
    Name: "TypeScript",
    Link: { Href: "https://www.typescriptlang.org/", Title: "TypeScript - Superset de JavaScript tipado", Target: true },
    Logo: { Image: TypeScriptLogo, Alt: "Logo de TypeScript" }
}
const NodeJS: Language = {
    ID: "09a32624-3a70-48fa-98b6-e6b972d55188",
    Name: "Node.js",
    Link: { Href: "https://nodejs.org/es", Title: "Node.js - Entorno de ejecución para JavaScript en el servidor", Target: true },
    Logo: { Image: NodeJSLogo, Alt: "Logo de Node.js" }
}
const Angular: Language = {
    ID: "10a0ef22-9182-4cb7-8365-c01f0615ba6d",
    Name: "Angular",
    Link: { Href: "https://angular.dev/", Title: "Angular - Framework de desarrollo web frontend", Target: true },
    Logo: { Image: AngularLogo, Alt: "Logo de Angular" }
}
const MariaDB: Language = {
    ID: "4edaf72d-8d4a-48f5-8b65-16a9feca532f",
    Name: "MariaDB",
    Link: { Href: "https://mariadb.org/", Title: "MariaDB - Sistema de gestión de bases de datos relacional", Target: true },
    Logo: { Image: MariaDBLogo, Alt: "Logo de MariaDB" }
}
const Vite: Language = {
    ID: "bc13def4-8308-48db-b1e7-e86203f320af",
    Name: "Vite",
    Link: { Href: "https://vite.dev/", Title: "Vite - Herramienta de build para proyectos frontend", Target: true },
    Logo: { Image: ViteLogo, Alt: "Logo de Vite" }
}
const JavaScript: Language = {
    ID: "d3bdd649-b928-458d-9495-6770e510020c",
    Name: "JavaScript",
    Link: { Href: "https://developer.mozilla.org/es/docs/Web/JavaScript", Title: "JavaScript - Lenguaje de programación para la web", Target: true },
    Logo: { Image: JavaScriptLogo, Alt: "Logo de JavaScript" }
}
const CSharp: Language = {
    ID: "29d19837-11c9-454a-a5b6-519ae882b627",
    Name: "C#",
    Link: { Href: "https://learn.microsoft.com/es-es/dotnet/csharp/", Title: "C# - Lenguaje de programación orientado a objetos", Target: true },
    Logo: { Image: CSharpLogo, Alt: "Logo de C#" }
}

const NoRepo = { Href: "", Title: "", Target: true }

export const ProjectList : Project[] = [
    {
        ID: "7c1d2f0e-5a3b-4e8f-9b61-2d4a8c3e9f10",
        Name: "Aulaventura",
        Tagline: "Gamificación para profesores: el temario convertido en una campaña de aventura.",
        Description: "Aulaventura es una plataforma para docentes de Primaria y ESO que convierte el temario en campañas con mapas, misiones, batallas y recompensas. El profesor elige un mapa, añade etapas y retos, y la clase avanza como un grupo de héroes: cada acierto en una batalla de preguntas daña al jefe final y cada fallo cuesta vida. Incluye un panel de clase para repartir experiencia y oro en grupo, tienda e intercambios con moneda del juego (sin dinero real), ranking opcional y personajes históricos con IA, como Dalí o Napoleón, que responden en primera persona. Diseñé y desarrollé el producto completo, desde el modelo de datos hasta la experiencia de juego.",
        Highlights: [
            "Campañas con mapas, etapas y jefe final, listas en minutos",
            "Personajes históricos con IA que hablan en primera persona",
            "Panel de clase con XP, oro, tienda e intercambios",
        ],
        Difficulty: DifficultyTypes.Hard,
        EndDate: new Date("2026-10-20"),
        HasDemo: true,
        DemoLink: { Href: "https://aulaventura.dev", Title: "Visitar la web de Aulaventura", Target: true },
        DetailsLink: { Href: "/projects/aulaventura", Title: "Detalles del proyecto Aulaventura", Target: false },
        GithubLink: NoRepo,
        Languages: [React, TypeScript, NodeJS],
        CoverImage: { Image: AulaventuraCoverImage, Alt: "Portada de Aulaventura: tu clase, convertida en una aventura" },
        Images: [
            { Image: AulaventuraCoverImage, Alt: "Portada de Aulaventura con un guerrero espartano al atardecer" },
            { Image: AulaventuraImage2, Alt: "Mapa de campaña de Aulaventura con etapas y retos" },
            { Image: AulaventuraImage3, Alt: "Pantalla de Aulaventura con personajes y misiones" },
            { Image: AulaventuraImage4, Alt: "Batalla de preguntas contra el jefe final en Aulaventura" },
            { Image: AulaventuraImage5, Alt: "Panel de clase de Aulaventura con los héroes de los alumnos" },
        ],
        Video: { Src: "/videos/aulaventura-demo.mp4", Poster: "/videos/aulaventura-demo-poster.jpg", Title: "Demo de Aulaventura en 2 minutos" },
    },
    {
        ID: "4a4e2198-d3fc-453a-8f0c-f51abaa490c5",
        Name: "CodeSano",
        Tagline: "Rescate de apps creadas con IA: diagnóstico, arreglo y seguridad.",
        Description: "CodeSano es mi servicio para emprendedores que han construido su app con Lovable, Bolt, Replit o Cursor y no se atreven a lanzarla. Diseñé y desarrollé la web de captación con Astro: mensaje claro para un público no técnico, planes con precio orientativo, calculadora de presupuesto, casos reales, reseñas y un proceso en cuatro pasos (diagnóstico gratuito, presupuesto cerrado, entregas por hitos y código explicado). Detrás de la web está el trabajo real: auditar, corregir y blindar código generado por IA para que aguante usuarios de verdad.",
        Highlights: [
            "Landing de conversión para un público no técnico",
            "Calculadora de presupuesto interactiva",
            "Diagnóstico, precio cerrado y pago por fases",
        ],
        Difficulty: DifficultyTypes.Medium,
        EndDate: new Date("2026-07-05"),
        HasDemo: true,
        DemoLink: { Href: "https://codesano.com", Title: "Visitar la web de CodeSano", Target: true },
        DetailsLink: { Href: "/projects/code-sano", Title: "Detalles del proyecto CodeSano", Target: false },
        GithubLink: NoRepo,
        Languages: [Astro, TypeScript],
        CoverImage: { Image: CodeSanoCoverImage, Alt: "Portada de CodeSano: tu app la construyó una IA, yo hago que funcione" },
        Images: [
            { Image: CodeSanoCoverImage, Alt: "Portada de la web de CodeSano" },
            { Image: CodeSanoCalculatorImage, Alt: "Calculadora de presupuesto de CodeSano" },
            { Image: CodeSanoReviewsImage, Alt: "Reseñas de clientes en CodeSano" },
            { Image: CodeSanoDetailsImage, Alt: "Proceso de trabajo y garantías de CodeSano" },
        ],
    },
    {
        ID: "b381c29d-0264-4f65-95dd-8076b3591127",
        Name: "Renta Norte",
        Tagline: "Newsletter de inversión inmobiliaria en Alicante, basada en datos.",
        Description: "Renta Norte es una newsletter semanal gratuita para invertir en pisos de Alicante con criterio y no por intuición. Construí la web con Astro: landing de suscripción, blog de análisis, mapa de rentabilidad por zonas, calculadoras de rentabilidad y de amortización de hipoteca, y una base de datos propia con los 141 municipios de la provincia. Cada domingo se publica un análisis nuevo de zonas y oportunidades.",
        Highlights: [
            "Mapa de rentabilidad por zonas de Alicante",
            "Calculadoras de rentabilidad y amortización",
            "Datos propios de 141 municipios de la provincia",
        ],
        Difficulty: DifficultyTypes.Medium,
        EndDate: new Date("2026-04-21"),
        HasDemo: true,
        DemoLink: { Href: "https://rentanorte.com", Title: "Visitar la web de Renta Norte", Target: true },
        DetailsLink: { Href: "/projects/renta-norte", Title: "Detalles del proyecto Renta Norte", Target: false },
        GithubLink: NoRepo,
        Languages: [Astro],
        CoverImage: { Image: RentaNorteCoverImage, Alt: "Portada de Renta Norte: encuentra pisos rentables en Alicante" },
        Images: [
            { Image: RentaNorteCoverImage, Alt: "Portada de la newsletter Renta Norte" },
            { Image: RentaNorteDetailsImage, Alt: "Secciones de la landing de Renta Norte" },
            { Image: RentaNortePostsImage, Alt: "Listado de análisis publicados en Renta Norte" },
            { Image: RentaNortePostExampleImage, Alt: "Ejemplo de análisis inmobiliario en Renta Norte" },
        ],
    },
    {
        ID: "d595f540-3058-45b7-9f14-b0d4342f45a9",
        Name: "Brokey",
        Tagline: "Plataforma de inversión para quien nunca ha invertido.",
        Description: "Brokey es una aplicación web desarrollada con Angular y TypeScript que acerca la inversión a usuarios sin experiencia. Permite comprar, vender y seguir acciones, criptomonedas y materias primas desde una interfaz sencilla, con carteras personalizadas, gráficos interactivos, autenticación segura y datos reales de mercado a través de una API espejo.",
        Difficulty: DifficultyTypes.Hard,
        EndDate: new Date("2024-05-13"),
        HasDemo: false,
        DetailsLink: { Href: "/projects/brokey", Title: "Detalles del proyecto Brokey", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/Brokey_FrontEnd", Title: "Repositorio de Brokey FrontEnd en GitHub", Target: true },
        Languages: [Angular, TypeScript, MariaDB, NodeJS],
        CoverImage: { Image: BrokeyCoverImage, Alt: "Panel principal de Brokey" },
        Images: [
            { Image: BrokeyCoverImage, Alt: "Panel principal de Brokey" },
            { Image: BrokeyActionsImage, Alt: "Gestión de acciones en Brokey" },
            { Image: BrokeyPortfolioImage, Alt: "Cartera personalizada en Brokey" },
            { Image: BrokeyLoginImage, Alt: "Pantalla de inicio de sesión de Brokey" },
            { Image: BrokeyGoodsImage, Alt: "Listado de materias primas en Brokey" },
            { Image: BrokeyGoodsDetailsImage, Alt: "Detalle de una materia prima en Brokey" },
            { Image: BrokeyCryptoImage, Alt: "Listado de criptomonedas en Brokey" },
            { Image: BrokeyCryptoDetailsImage, Alt: "Detalle de una criptomoneda en Brokey" },
            { Image: BrokeyStockImage, Alt: "Listado de acciones en Brokey" },
            { Image: BrokeyStockDetailsImage, Alt: "Detalle de una acción en Brokey" },
        ],
    },
    {
        ID: "a1537fa1-325b-4bf0-b9ce-ae4260594374",
        Name: "Cervezas Marín",
        Tagline: "Tienda online de cerveza artesanal con carrito y filtros.",
        Description: "Cervezas Marín es una tienda online ficticia de cerveza artesanal construida con TypeScript, SCSS y Vite. Incluye catálogo con filtros por tipo y precio, productos más vendidos, carrito de compra y diseño responsive. Un ejercicio de frontend limpio, preparado para conectarse a un backend real.",
        Difficulty: DifficultyTypes.Medium,
        EndDate: new Date("2024-02-05"),
        HasDemo: false,
        DetailsLink: { Href: "/projects/cervezas", Title: "Detalles del proyecto Cervezas Marín", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/CervezasMarin", Title: "Repositorio de Cervezas Marín en GitHub", Target: true },
        Languages: [TypeScript, Vite],
        CoverImage: { Image: CervezasMarinCoverImage, Alt: "Portada de la tienda Cervezas Marín" },
        Images: [
            { Image: CervezasMarinCoverImage, Alt: "Portada de la tienda Cervezas Marín" },
            { Image: CervezasMarinCartImage, Alt: "Carrito de compra en Cervezas Marín" },
            { Image: CervezasMarinListImage, Alt: "Catálogo de cervezas artesanales en Cervezas Marín" },
            { Image: CervezasMarinSoldImage, Alt: "Cervezas más vendidas en Cervezas Marín" },
        ],
    },
    {
        ID: "4bc0e413-0fc2-4353-acf0-7c92c5937203",
        Name: "Quién es Quién",
        Tagline: "Juego de escritorio en C# con un modo tipo Akinator.",
        Description: "Aplicación de escritorio en C# y Windows Forms inspirada en Akinator y en el clásico ¿Quién es Quién?, con personajes de League of Legends. Tiene dos modos: la máquina adivina tu personaje con preguntas dinámicas y filtrado progresivo, o dos jugadores se enfrentan entre sí. Proyecto educativo, sin afiliación con Riot Games.",
        Difficulty: DifficultyTypes.Medium,
        EndDate: new Date("2023-05-17"),
        HasDemo: false,
        DetailsLink: { Href: "/projects/quien-es-quien", Title: "Detalles del proyecto ¿Quién es Quién?", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/QuienEsQuienLOL", Title: "Repositorio de ¿Quién es Quién? LoL en GitHub", Target: true },
        Languages: [CSharp],
        CoverImage: { Image: QuienEsQuienCoverImage, Alt: "Partida de ¿Quién es Quién? vista por el jugador 2" },
        Images: [
            { Image: QuienEsQuienHomeImage, Alt: "Pantalla de inicio de ¿Quién es Quién?" },
            { Image: QuienEsQuienAkinatorImage, Alt: "Modo Akinator adivinando un personaje" },
            { Image: QuienEsQuienCoverImage, Alt: "Interfaz del jugador 2" },
            { Image: QuienEsQuienJugadorImage, Alt: "Interfaz del jugador 1" },
            { Image: QuienEsQuienResultados, Alt: "Pantalla de resultados" },
        ],
    },
    {
        ID: "80aae9da-db13-48a5-bdf7-09afbdad3484",
        Name: "Brawl Stars",
        Tagline: "Visor interactivo de personajes en JavaScript puro.",
        Description: "Visor web de personajes de Brawl Stars hecho con HTML, CSS y JavaScript, sin dependencias. Permite explorar fichas con arrastrar y soltar y filtrar por tipo de personaje. Uno de mis primeros proyectos, centrado en manipular el DOM con soltura.",
        Difficulty: DifficultyTypes.Easy,
        EndDate: new Date("2023-03-23"),
        HasDemo: false,
        DetailsLink: { Href: "/projects/brawl-stars", Title: "Detalles del proyecto Brawl Stars", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/BrawlStars", Title: "Repositorio de Brawl Stars en GitHub", Target: true },
        Languages: [JavaScript],
        CoverImage: { Image: BrawlStarsCoverImage, Alt: "Ficha de personaje en el visor de Brawl Stars" },
        Images: [
            { Image: BrawlStarsHomeImage, Alt: "Pantalla principal del visor de Brawl Stars" },
            { Image: BrawlStarsCoverImage, Alt: "Ficha de personaje en el visor de Brawl Stars" },
        ],
    },
]
