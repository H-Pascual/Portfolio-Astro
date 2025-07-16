import { Project } from "../entities"
import { DifficultyTypes } from "../types"

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

import BrawlStartsCoverImage from '../assets/projects/brawl-starts/brawl-starts-details.png'
import BrawlStartsHomeImage from '../assets/projects/brawl-starts/brawl-starts-home.png'

import QuienEsQuienCoverImage from '../assets/projects/quien-es-quien/quien-es-quien-jugador2.png'
import QuienEsQuienAkinatorImage from '../assets/projects/quien-es-quien/quien-es-quien-akinator.png'
import QuienEsQuienHomeImage from '../assets/projects/quien-es-quien/quien-es-quien-home.png'
import QuienEsQuienResultados from '../assets/projects/quien-es-quien/quien-es-quien-resultado.png'
import QuienEsQuienJugadorImage from '../assets/projects/quien-es-quien/quien-es-quien-jugador1.png'

import CSharpLogo from '../assets/languages/csharp.svg'
import AngularLogo from '../assets/languages/angular.png'
import TypeScriptLogo from '../assets/languages/typescript.png'
import NodeJSLogo from '../assets/languages/node.png'
import MariaDBLogo from '../assets/languages/mariadb.svg'
import ViteLogo from '../assets/languages/vite.png'
import JavaScriptLogo from '../assets/languages/javascript.png'

export const ProjectList : Project[] = [
    { ID: "d595f540-3058-45b7-9f14-b0d4342f45a9", 
        Name: "Brokey", 
        Description: "Brokey es una aplicación web desarrollada con Angular y TypeScript que facilita la inversión en bolsa para usuarios sin experiencia. Ofrece una interfaz intuitiva para comprar, vender y gestionar acciones, criptomonedas y commodities. Incluye funcionalidades como carteras personalizadas, gráficos interactivos, autenticación segura y conexión con datos reales mediante API espejo.",
        Difficulty: DifficultyTypes.Hard, 
        EndDate: new Date("2024-05-13"),
        HasDemo: false, 
        DetailsLink: { },
        GithubLink: { Href: "https://github.com/H-Pascual/Brokey_FrontEnd", Title: "Repositorio de Brokey FrontEnd en GitHub", Target: true},
        Languages: [
            {
                ID: "10a0ef22-9182-4cb7-8365-c01f0615ba6d",
                Name: "Angular", 
                Link: { Href: "https://angular.io/", Title: "Angular - Framework de desarrollo web frontend", Target: true },
                Logo: { Image: AngularLogo, Alt: "Logo de Angular" }
            },
            {
                ID: "59d2c5f9-8cbb-4102-98bd-33ee3ae8c52a",
                Name: "TypeScript", 
                Link: { Href: "https://www.typescriptlang.org/", Title: "TypeScript - Superset de JavaScript tipado", Target: true },
                Logo: { Image: TypeScriptLogo, Alt: "Logo de TypeScript" }
            },
            {
                ID: "4edaf72d-8d4a-48f5-8b65-16a9feca532f",
                Name: "MariaDB",
                Link: { Href: "https://mariadb.org/", Title: "MariaDB - Sistema de gestión de bases de datos relacional", Target: true },
                Logo: { Image: MariaDBLogo, Alt: "Logo de MariaDB" }
            },
            {
                ID: "09a32624-3a70-48fa-98b6-e6b972d55188",
                Name: "Node.js",
                Link: { Href: "https://nodejs.org/en", Title: "Node.js - Entorno de ejecución para JavaScript en el servidor", Target: true },
                Logo: { Image: NodeJSLogo, Alt: "Logo de Node JS" }
            }
        ],
        CoverImage: { Image: BrokeyCoverImage, Alt: "Vista general del panel principal de Brokey"}, 
        Images: [
            { Image: BrokeyCoverImage, Alt: "Vista general del panel principal de Brokey" }, 
            { Image: BrokeyActionsImage, Alt: "Gestión de acciones en la plataforma Brokey"}, 
            { Image: BrokeyPortfolioImage, Alt: "Visualización de portafolio personalizado en Brokey"}, 
            { Image: BrokeyLoginImage, Alt: "Pantalla de inicio de sesión de Brokey"}, 
            { Image: BrokeyGoodsImage, Alt: "Listado de commodities disponibles en Brokey"}, 
            { Image: BrokeyGoodsDetailsImage, Alt: "Detalles de un commodity dentro de Brokey"}, 
            { Image: BrokeyCryptoImage, Alt: "Visualización de criptomonedas en Brokey"}, 
            { Image: BrokeyCryptoDetailsImage, Alt: "Detalles de una criptomoneda en Brokey"}, 
            { Image: BrokeyStockImage, Alt: "Listado de acciones disponibles en Brokey"}, 
            { Image: BrokeyStockDetailsImage, Alt: "Detalles de una acción en la plataforma Brokey"}
        ]},
    { ID: "a1537fa1-325b-4bf0-b9ce-ae4260594374", 
        Name: "Cervezas Marin", 
        Description: "Cervezas Marín es un sitio web ficticio desarrollado con HTML, SCSS y Vite, dedicado a la venta de cervezas artesanales. Ofrece una experiencia visual moderna, navegación fluida, galería de productos destacados, filtros por tipo y precio, y diseño responsive. Ideal como proyecto educativo que demuestra buenas prácticas en frontend estático con vistas a integraciones futuras con TypeScript.",
        Difficulty: DifficultyTypes.Medium, 
        EndDate: new Date("2024-02-05"),
        HasDemo: false, //true when deployed
        DetailsLink: { },
        GithubLink: {Href: "https://github.com/H-Pascual/CervezasMarin", Title: "Repositorio de CervezasMarin en GitHub", Target: true },
        Languages: [
            {
                ID: "59d2c5f9-8cbb-4102-98bd-33ee3ae8c52a",
                Name: "TypeScript", 
                Link: { Href: "https://www.typescriptlang.org/", Title: "TypeScript - Superset de JavaScript tipado", Target: true },
                Logo: { Image: TypeScriptLogo, Alt: "Logo de TypeScript" }
            },
            {
                ID: "bc13def4-8308-48db-b1e7-e86203f320af",
                Name: "Vite",
                Link: { Href: "https://vite.dev/", Title: "Vite - Herramienta de build rápida para proyectos frontend", Target: true },
                Logo: { Image: ViteLogo, Alt: "Logo de Vite" }
            }
        ],
        CoverImage: { Image: CervezasMarinCoverImage, Alt: "Portada principal del sitio web Cervezas Marín"},
        Images: [
            { Image: CervezasMarinCoverImage, Alt: "Portada principal del sitio web Cervezas Marín"},
            { Image: CervezasMarinCartImage, Alt: "Vista del carrito de compras en Cervezas Marín"}, 
            { Image: CervezasMarinListImage, Alt: "Listado de cervezas artesanales en Cervezas Marín"}, 
            { Image: CervezasMarinSoldImage, Alt: "Listado de cervezas más vendidas en Cervezas Marín"}
        ]},
    { ID: "80aae9da-db13-48a5-bdf7-09afbdad3484", 
        Name: "Brawl Starts", 
        Description: "Visualizador web interactivo de personajes de Brawl Stars, desarrollado con HTML, CSS y JavaScript puro. Permite explorar fichas detalladas mediante drag and drop, aplicar filtros por tipo de personaje (Luchador o Francotirador) y disfrutar de una interfaz amigable y responsiva. Proyecto educativo sin dependencias externas, funcional 100% en local.",
        Difficulty: DifficultyTypes.Easy, 
        EndDate: new Date("2023-03-23"),
        HasDemo: false, //true when deployed
        DetailsLink: { },
        GithubLink: {Href: "https://github.com/H-Pascual/BrawlStars", Title: "Repositorio del proyecto BrawlStars en GitHub", Target: true},
        Languages: [
            {
                ID: "d3bdd649-b928-458d-9495-6770e510020c",
                Name: "JavaScript",
                Link: { Href: "https://developer.mozilla.org/es/docs/Web/JavaScript", Title: "JavaScript - Lenguaje de programación para la web", Target: true },
                Logo: { Image: JavaScriptLogo, Alt: "Logo de JavaScript" }
            }
        ],
        CoverImage: { Image: BrawlStartsCoverImage, Alt: "Pantalla principal del proyecto Brawl Starts"}, 
        Images: [
            { Image: BrawlStartsHomeImage, Alt: "Pantalla principal del proyecto Brawl Starts"}, 
            { Image: BrawlStartsCoverImage, Alt: "Detalles de un personaje en el proyecto Brawl Starts"}
        ]},
    { ID: "4bc0e413-0fc2-4353-acf0-7c92c5937203", 
        Name: "Quién es Quién", 
        Description: "Aplicación de escritorio en C# inspirada en Akinator y ¿Quién es Quién?, centrada en personajes de League of Legends. Incluye dos modos de juego: adivinanza automática con preguntas (modo Akinator) y duelo entre jugadores (modo ¿Quién es Quién?). Utiliza lógica de filtrado progresivo, preguntas dinámicas y una interfaz con Windows Forms. Proyecto educativo y de entretenimiento, no afiliado a Riot Games.",
        Difficulty: DifficultyTypes.Medium, 
        EndDate: new Date("2023-05-17"),
        HasDemo: false,  
        DetailsLink: { },
        GithubLink: {Href: "https://github.com/H-Pascual/QuienEsQuienLOL", Title: "Repositorio de ¿Quién es quién? LoL en GitHub", Target: true},
        Languages: [
            {
                ID: "29d19837-11c9-454a-a5b6-519ae882b627",
                Name: "C#", 
                Link: { Href: "https://learn.microsoft.com/en-us/dotnet/csharp/", Title: "C# - Lenguaje de programación moderno orientado a objetos", Target: true },
                Logo: { Image: CSharpLogo, Alt: "Logo de C#" }
            }
        ],
        CoverImage: {Image: QuienEsQuienCoverImage, Alt: "Pantalla de inicio del juego ¿Quién es Quién?"},
        Images: [
            { Image: QuienEsQuienHomeImage, Alt: "Pantalla de inicio del juego ¿Quién es Quién?"}, 
            { Image: QuienEsQuienAkinatorImage, Alt: "Modo Akinator adivinando un personaje de LoL"}, 
            { Image: QuienEsQuienCoverImage, Alt: "Interfaz del jugador 2 en ¿Quién es Quién?"}, 
            { Image: QuienEsQuienJugadorImage, Alt: "Interfaz del jugador 1 en ¿Quién es Quién?"}, 
            { Image: QuienEsQuienResultados, Alt: "Pantalla de resultados del juego ¿Quién es Quién?"}
        ]}
]