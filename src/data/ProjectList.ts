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

const CSharpDotNet: Language = {
    ...CSharp,
    ID: "6b2f9a41-8d3e-4c7a-b5f0-2e9d1c4a7f38",
    Name: "C# / .NET",
    Link: { Href: "https://dotnet.microsoft.com/", Title: "C# y .NET - Backend de Aulaventura", Target: true },
}

const Python: Language = {
    ID: "8c3a51e2-7b44-4f0e-9d1a-6e2f3b9c0a17",
    Name: "Python",
    Link: { Href: "https://www.python.org/", Title: "Python - Lenguaje de programación", Target: true },
    Logo: { Image: PythonLogo, Alt: "Logo de Python" }
}
const Sql: Language = {
    ID: "1f7d2c90-3e5b-4a68-8b2c-9a0e4d6f1b35",
    Name: "SQL",
    Link: { Href: "https://es.wikipedia.org/wiki/SQL", Title: "SQL - Lenguaje de consulta de bases de datos", Target: true },
    Logo: { Image: SqlLogo, Alt: "Logo de SQL" }
}
const Docker: Language = {
    ID: "5b9e0d43-2a71-4c86-a3f5-7d1e8b2c6f90",
    Name: "Docker",
    Link: { Href: "https://www.docker.com/", Title: "Docker - Contenedores", Target: true },
    Logo: { Image: DockerLogo, Alt: "Logo de Docker" }
}

const NoRepo = { Href: "", Title: "", Target: true }

const projects : Project[] = [
    {
        ID: "c4d1a7e8-2f39-4b60-9e15-8a3c6d2b7f41",
        Name: "Cadena Alimentaria",
        Tagline: "Plataforma corporativa para cumplir la Ley de la Cadena Alimentaria sin Excel ni carpetas.",
        Description: "Plataforma web para gestionar los contratos con proveedores que exige la Ley de la Cadena Alimentaria (Ley 12/2013, modificada por la Ley 16/2021) en todas las sociedades del grupo. Antes, el equipo administrativo lo llevaba en hojas de Excel y carpetas: se perdían documentos, era difícil saber qué contrato vencía y un error podía acabar en sanciones de cifras millonarias. Ahora todo vive en una sola aplicación: alta y ficha de proveedores, contratos con su estado y ley asociada, plantillas de contrato, adjuntos con certificados, envío de correos desde la propia plataforma, alertas de proveedores y contratos a renovar, auditoría y trazabilidad completa de cada documento, y un panel de control con la evolución del trabajo. Hoy lo usan unas 10 personas en 4 centros. Dirigí el proyecto de principio a fin: arquitectura, backend en C# y .NET, frontend en React y TypeScript, y la coordinación de las dos personas de mi equipo.",
        Highlights: [
            "Trazabilidad completa de contratos y documentos para evitar sanciones",
            "Alertas de vencimiento y panel de control por centro",
            "Envío de correos y plantillas de contrato desde la propia web",
        ],
        Difficulty: DifficultyTypes.Hard,
        Category: "professional",
        StartDate: new Date("2025-06-01"),
        EndDate: new Date("2026-03-31"),
        Period: "Jun 2025 – Mar 2026",
        Role: "Responsable técnico: arquitectura, backend, frontend y dirección del equipo",
        Team: "Dirigí a 2 desarrolladores",
        Metrics: [{ Value: "4", Label: "centros en producción" }, { Value: "2", Label: "desarrolladores a mi cargo" }, { Value: "+1.150", Label: "commits en el proyecto" }],
        HasDemo: false,
        DetailsLink: { Href: "/projects/cadena-alimentaria/", Title: "Detalles del proyecto Cadena Alimentaria", Target: false },
        GithubLink: NoRepo,
        Languages: [CSharpDotNet, React, TypeScript],
        CoverImage: { Image: CadenaCoverImage, Alt: "Panel de control de Cadena Alimentaria con acciones, proveedores en alerta y contratos a renovar" },
        Images: [
            { Image: CadenaCoverImage, Alt: "Panel de control con la evolución de acciones, proveedores con contrato vigente y contratos a renovar" },
            { Image: CadenaImage1, Alt: "Ficha de proveedor con sus contratos, estado, fechas y ley asociada (datos de ejemplo)" },
            { Image: CadenaImage2, Alt: "Adjuntos del proveedor: certificados, altas y contratos con su tipo" },
            { Image: CadenaImage3, Alt: "Gestión de comerciales con importación y edición (datos de ejemplo)" },
        ]},
    {
        ID: "a9e3f5b2-6c18-4d47-b0a2-5f7e1c9d3a86",
        Name: "Ágora",
        Tagline: "La aplicación de venta y almacén para mercados mayoristas de fruta: del pedido en tablet al pesaje.",
        Description: "Ágora es la aplicación completa para la operativa diaria en mercados mayoristas de fruta y verdura, como Mercabarna, Mercamadrid, Mercasevilla o Mercaalicante. Sustituye a los escribientes y a las notas en papel: los comerciales toman los pedidos de los clientes en tablet con un catálogo visual por familias, consultan stock, costes y últimos precios, y el almacén recibe los pedidos para la preparación (picking) por prioridad y pasillo, el pesaje con bruto, tara y neto, y la impresión de etiquetas. Está pensada para varios centros y empresas a la vez y para gestionar miles de pedidos diarios. Me encargué sobre todo de la arquitectura y del backend en C# y .NET, y de parte del frontend en React y TypeScript. Primera versión prevista para noviembre de 2026.",
        Highlights: [
            "Pedidos en tablet con catálogo visual, stock y últimos precios",
            "Preparación de pedidos por prioridad y pasillo, pesaje y etiquetas",
            "Multicentro y multiempresa, diseñada para miles de pedidos diarios",
        ],
        Difficulty: DifficultyTypes.Hard,
        Category: "professional",
        StartDate: new Date("2025-07-01"),
        EndDate: new Date("2026-11-30"),
        Ongoing: true,
        Period: "Jul 2025 – actualidad (despliegue en nov 2026)",
        Role: "Arquitectura y backend; parte del frontend",
        Metrics: [{ Value: "+4", Label: "mercados mayoristas previstos" }, { Value: "Miles", Label: "de pedidos diarios previstos" }],
        HasDemo: false,
        DetailsLink: { Href: "/projects/agora/", Title: "Detalles del proyecto Ágora", Target: false },
        GithubLink: NoRepo,
        Languages: [CSharpDotNet, React, TypeScript],
        CoverImage: { Image: AgoraImage1, Alt: "Catálogo visual de productos de Ágora para tomar pedidos en tablet" },
        Images: [
            { Image: AgoraCoverImage, Alt: "Introducción de pesos de un pedido: cantidad, kilos brutos, tara y netos" },
            { Image: AgoraImage1, Alt: "Catálogo visual de productos por familia para tomar pedidos en tablet" },
            { Image: AgoraImage2, Alt: "Ficha de producto con cantidad, precio, estándar de producto y stock disponible" },
            { Image: AgoraImage3, Alt: "Lista de preparación de pedidos con prioridad, pasillo e impresión" },
        ]},
    {
        ID: "e2b8c6d1-9a54-4f3e-8c71-3d6a0f5b9e24",
        Name: "Reporting",
        Tagline: "Servicio central de informes para todas las aplicaciones de la empresa.",
        Description: "Reporting centraliza todos los informes que usa la empresa sobre DevExpress Reporting. Las demás aplicaciones no generan sus propios informes: se conectan a él a través de una API, piden el informe que necesitan y lo reciben generado. El frontend sirve para crear, editar y versionar los informes de forma sencilla, organizarlos por proyecto, gestionar usuarios y hacer copias de seguridad. Desarrollé yo solo todo el backend y diseñé la arquitectura y la lógica interna; el frontend lo construyeron dos personas de mi equipo bajo mi dirección.",
        Highlights: [
            "Un único servicio de informes consumido por API desde el resto de aplicaciones",
            "Editor visual para modificar informes sin tocar código",
            "Organización por proyectos y copias de seguridad",
        ],
        Difficulty: DifficultyTypes.Hard,
        Category: "professional",
        StartDate: new Date("2025-01-01"),
        EndDate: new Date("2026-07-31"),
        Period: "Ene 2025 – Jun 2025 · nuevo frontend Abr – Jul 2026",
        Role: "Arquitectura y backend completo; dirección del frontend",
        Team: "Dirigí a 2 desarrolladores",
        Metrics: [{ Value: "+20", Label: "informes centralizados" }, { Value: "1", Label: "API para todas las aplicaciones" }, { Value: "2", Label: "desarrolladores a mi cargo" }],
        HasDemo: false,
        DetailsLink: { Href: "/projects/reporting/", Title: "Detalles del proyecto Reporting", Target: false },
        GithubLink: NoRepo,
        Languages: [CSharpDotNet, React, TypeScript],
        CoverImage: { Image: ReportingCoverImage, Alt: "Listado de informes de Reporting por proyecto con acciones" },
        Images: [
            { Image: ReportingCoverImage, Alt: "Listado de informes con proyecto, fechas y acciones de edición y descarga" },
            { Image: ReportingImage1, Alt: "Editor visual de informes basado en DevExpress Reporting" },
        ]},
    {
        ID: "f7a2d9c3-1e86-4b5a-9d30-6c8e2b4f1a75",
        Name: "Dev Dashboard",
        Tagline: "Métricas del equipo de desarrollo, gamificadas y en tiempo real.",
        Description: "Dashboard en Python con Dash que recoge los datos de Azure DevOps (commits, pull requests, revisiones, user stories y líneas de código) y los convierte en métricas del equipo por día, semana, mes o año. Incluye una fórmula de puntuación que gamifica el trabajo, la actividad de las últimas 12 semanas, la comparativa entre programadores, el estado de cada proyecto y exportación a Excel. Lo usan los responsables para hacer seguimiento del equipo. Lo ideé y lo desarrollé yo solo, de cero a producción, en un mes.",
        Highlights: [
            "Integración con la API de Azure DevOps",
            "Puntuación gamificada por commits, PR, revisiones y user stories",
            "Vista por proyecto y por programador, con exportación a Excel",
        ],
        Difficulty: DifficultyTypes.Medium,
        Category: "professional",
        StartDate: new Date("2026-08-01"),
        EndDate: new Date("2026-08-31"),
        Period: "Ago 2026",
        Role: "Idea, diseño y desarrollo completo",
        Team: "En solitario",
        Metrics: [{ Value: "1 mes", Label: "de la idea a producción" }, { Value: "+20", Label: "proyectos monitorizados" }, { Value: "7", Label: "desarrolladores en el panel" }],
        HasDemo: false,
        DetailsLink: { Href: "/projects/dev-dashboard/", Title: "Detalles del proyecto Dev Dashboard", Target: false },
        GithubLink: NoRepo,
        Languages: [Python],
        CoverImage: { Image: DevDashboardCoverImage, Alt: "Dashboard del equipo con commits, pull requests, user stories y puntuación" },
        Images: [
            { Image: DevDashboardCoverImage, Alt: "Resumen del último mes: commits, PR, user stories, líneas y fórmula de puntuación" },
            { Image: DevDashboardImage1, Alt: "Vista de proyectos con actividad, commits, PR y user stories (nombres ocultos)" },
        ]},
    {
        ID: "b5c0e8a4-7d29-4f61-a3b8-2e9f6d1c4b07",
        Name: "Lista de la compra",
        Tagline: "Mi lista de la compra con NFC, autoalojada en una Raspberry Pi.",
        Description: "Aplicación personal para gestionar la compra de casa. Los productos se organizan por categorías (supermercado, ropa, hogar, farmacia…), con cantidad, unidad y descripción, y la lista se envía por correo a hasta 10 personas desde una cuenta de Gmail. Se abre acercando el móvil a una etiqueta NFC. Está hecha con Astro y una pequeña base de datos SQL, y desplegada con Docker en mi propia Raspberry Pi 5 con Linux.",
        Highlights: [
            "Acceso instantáneo con una etiqueta NFC",
            "Envío de la lista por correo a varias personas",
            "Autoalojada con Docker en una Raspberry Pi 5",
        ],
        Difficulty: DifficultyTypes.Easy,
        Category: "personal",
        StartDate: new Date("2026-09-01"),
        EndDate: new Date("2026-09-30"),
        Period: "Sep 2026",
        Role: "Proyecto personal: desarrollo e infraestructura",
        Team: "En solitario",
        HasDemo: false,
        DetailsLink: { Href: "/projects/lista-compra/", Title: "Detalles del proyecto Lista de la compra", Target: false },
        GithubLink: NoRepo,
        Languages: [Astro, Sql, Docker],
        CoverImage: { Image: ListaCompraImage1, Alt: "Lista de la compra con categorías y productos" },
        Images: [
            { Image: ListaCompraImage1, Alt: "Lista de la compra con categorías y productos" },
            { Image: ListaCompraImage2, Alt: "Formulario para añadir un producto con cantidad, unidad y categoría" },
            { Image: ListaCompraImage3, Alt: "Configuración de los destinatarios a los que se envía la lista" },
        ]},
    {
        ID: "7c1d2f0e-5a3b-4e8f-9b61-2d4a8c3e9f10",
        Name: "Aulaventura",
        Tagline: "Gamificación para profesores: el temario convertido en una campaña de aventura.",
        Description: "Aulaventura es una plataforma para docentes de Primaria y ESO que convierte el temario en campañas con mapas, misiones, batallas y recompensas. El profesor elige un mapa, añade etapas y retos, y la clase avanza como un grupo de héroes: cada acierto en una batalla de preguntas daña al jefe final y cada fallo cuesta vida. Incluye un panel de clase para repartir experiencia y oro en grupo, tienda e intercambios con moneda del juego (sin dinero real), ranking opcional y personajes históricos con IA, como Dalí o Napoleón, que responden en primera persona. Diseñé y desarrollé el producto completo: la landing en Astro y TypeScript y el backend en C# con .NET, desde el modelo de datos hasta la experiencia de juego.",
        Highlights: [
            "Campañas con mapas, etapas y jefe final, listas en minutos",
            "Personajes históricos con IA que hablan en primera persona",
            "Panel de clase con XP, oro, tienda e intercambios",
        ],
        Difficulty: DifficultyTypes.Hard,
        Category: "personal",
        StartDate: new Date("2026-10-01"),
        Period: "Oct 2026 – actualidad",
        Ongoing: true,
        Role: "Producto propio: idea, diseño, backend y frontend",
        Team: "En solitario",
        EndDate: new Date("2026-10-27"),
        HasDemo: true,
        DemoLink: { Href: "https://aulaventura.dev", Title: "Visitar la web de Aulaventura", Target: true },
        DetailsLink: { Href: "/projects/aulaventura/", Title: "Detalles del proyecto Aulaventura", Target: false },
        GithubLink: NoRepo,
        Languages: [Astro, TypeScript, CSharpDotNet],
        CoverImage: { Image: AulaventuraCoverImage, Alt: "Portada de Aulaventura: tu clase, convertida en una aventura" },
        Images: [
            { Image: AulaventuraCoverImage, Alt: "Portada de Aulaventura con un guerrero espartano al atardecer" },
            { Image: AulaventuraImage2, Alt: "Aulaventura: ¿y si dejaras de competir con los videojuegos y empezaras a jugar en su equipo?" },
            { Image: AulaventuraImage3, Alt: "Funciones de Aulaventura: el temario convertido en un mapa de aventura y personajes que cuentan la lección" },
            { Image: AulaventuraImage4, Alt: "Personalización del héroe de cada alumno y panel de clase con XP, oro y vida" },
            { Image: AulaventuraImage5, Alt: "Lista de espera de Aulaventura con ventajas para los profesores fundadores" },
        ],
        Video: { Src: "/videos/aulaventura-demo.mp4", SrcWebm: "/videos/aulaventura-demo.webm", Poster: "/videos/aulaventura-demo-poster.jpg", Title: "Demo de Aulaventura en 2 minutos" },
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
        Category: "personal",
        StartDate: new Date("2026-06-01"),
        Period: "Jun 2026 – actualidad",
        Ongoing: true,
        Role: "Servicio propio: web, captación y desarrollo",
        Team: "En solitario",
        Metrics: [{ Value: "4,5/5", Label: "valoración media de clientes" }, { Value: "4 fases", Label: "diagnóstico, presupuesto, hitos y entrega" }],
        EndDate: new Date("2026-10-27"),
        HasDemo: true,
        DemoLink: { Href: "https://codesano.com", Title: "Visitar la web de CodeSano", Target: true },
        DetailsLink: { Href: "/projects/code-sano/", Title: "Detalles del proyecto CodeSano", Target: false },
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
        Category: "personal",
        StartDate: new Date("2026-04-01"),
        Period: "Abr 2026 – Sep 2026",
        Role: "Producto propio: web, datos y contenido",
        Team: "En solitario",
        Metrics: [{ Value: "+60", Label: "suscriptores" }, { Value: "141", Label: "municipios en la base de datos" }],
        EndDate: new Date("2026-09-30"),
        HasDemo: true,
        DemoLink: { Href: "https://rentanorte.com", Title: "Visitar la web de Renta Norte", Target: true },
        DetailsLink: { Href: "/projects/renta-norte/", Title: "Detalles del proyecto Renta Norte", Target: false },
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
        Category: "academic",
        StartDate: new Date("2024-03-01"),
        Period: "Jun 2024",
        Role: "Proyecto final del ciclo de Desarrollo de Aplicaciones Web",
        EndDate: new Date("2024-06-30"),
        HasDemo: false,
        DetailsLink: { Href: "/projects/brokey/", Title: "Detalles del proyecto Brokey", Target: false },
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
        Category: "academic",
        StartDate: new Date("2024-04-01"),
        Period: "Abr 2024",
        Role: "Proyecto de formación",
        EndDate: new Date("2024-04-30"),
        HasDemo: false,
        DetailsLink: { Href: "/projects/cervezas/", Title: "Detalles del proyecto Cervezas Marín", Target: false },
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
        Category: "academic",
        StartDate: new Date("2023-12-01"),
        Period: "Dic 2023",
        Role: "Proyecto de formación",
        EndDate: new Date("2023-12-31"),
        HasDemo: false,
        DetailsLink: { Href: "/projects/quien-es-quien/", Title: "Detalles del proyecto ¿Quién es Quién?", Target: false },
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
        Category: "academic",
        StartDate: new Date("2023-06-01"),
        Period: "Jun 2023",
        Role: "Proyecto de formación",
        EndDate: new Date("2023-06-30"),
        HasDemo: false,
        DetailsLink: { Href: "/projects/brawl-stars/", Title: "Detalles del proyecto Brawl Stars", Target: false },
        GithubLink: { Href: "https://github.com/H-Pascual/BrawlStars", Title: "Repositorio de Brawl Stars en GitHub", Target: true },
        Languages: [JavaScript],
        CoverImage: { Image: BrawlStarsCoverImage, Alt: "Ficha de personaje en el visor de Brawl Stars" },
        Images: [
            { Image: BrawlStarsHomeImage, Alt: "Pantalla principal del visor de Brawl Stars" },
            { Image: BrawlStarsCoverImage, Alt: "Ficha de personaje en el visor de Brawl Stars" },
        ],
    },
]

export const ProjectList : Project[] = sortProjects(projects)
