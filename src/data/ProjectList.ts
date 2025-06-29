import { Project } from "../entities"
import { DifficultyTypes } from "../types"
import BrokeyCoverImage from '../assets/projects/brokey/brokey-home.png'
import CervezasMarinCoverImage from '../assets/projects/cervezas-marin/cervezas-marin-home.png'
import BrawlStartsCoverImage from '../assets/projects/brawl-starts/brawl-starts-details.png'
import QuienEsQuienCoverImage from '../assets/projects/quien-es-quien/quien-es-quien-jugador2.png'

//Añadir languages
export const ProjectList : Project[] = [
    { ID: "d595f540-3058-45b7-9f14-b0d4342f45a9", 
        Name: "Brokey", 
        Description: "Brokey es una aplicación web desarrollada con Angular y TypeScript que facilita la inversión en bolsa para usuarios sin experiencia. Ofrece una interfaz intuitiva para comprar, vender y gestionar acciones, criptomonedas y commodities. Incluye funcionalidades como carteras personalizadas, gráficos interactivos, autenticación segura y conexión con datos reales mediante API espejo.",
        Difficulty: DifficultyTypes.Hard, 
        EndDate: "",
        HasDemo: false, 
        GithubLink: { Href: "https://github.com/H-Pascual/Brokey_FrontEnd", Title: "Repositorio de Brokey FrontEnd en GitHub", Target: true},
        Languages: [], //Angular, Typescript, MariaDB, Nodejs
        CoverImage: { Image: BrokeyCoverImage, Alt: ""}, //Create Alt 
        Images: []}, //Add Images
    { ID: "a1537fa1-325b-4bf0-b9ce-ae4260594374", 
        Name: "Cervezas Marin", 
        Description: "Cervezas Marín es un sitio web ficticio desarrollado con HTML, SCSS y Vite, dedicado a la venta de cervezas artesanales. Ofrece una experiencia visual moderna, navegación fluida, galería de productos destacados, filtros por tipo y precio, y diseño responsive. Ideal como proyecto educativo que demuestra buenas prácticas en frontend estático con vistas a integraciones futuras con TypeScript.",
        Difficulty: DifficultyTypes.Medium, 
        EndDate: "", 
        HasDemo: false, //true when deployed
        GithubLink: {Href: "https://github.com/H-Pascual/CervezasMarin", Title: "Repositorio de CervezasMarin en GitHub", Target: true },
        Languages: [], //Vite, Typescript
        CoverImage: { Image: CervezasMarinCoverImage, Alt: ""}, //Create Alt
        Images: []}, //Add Images
    { ID: "80aae9da-db13-48a5-bdf7-09afbdad3484", 
        Name: "Brawl Starts", 
        Description: "Visualizador web interactivo de personajes de Brawl Stars, desarrollado con HTML, CSS y JavaScript puro. Permite explorar fichas detalladas mediante drag and drop, aplicar filtros por tipo de personaje (Luchador o Francotirador) y disfrutar de una interfaz amigable y responsiva. Proyecto educativo sin dependencias externas, funcional 100% en local.",
        Difficulty: DifficultyTypes.Easy, 
        EndDate: "", 
        HasDemo: false, //true when deployed
        GithubLink: {Href: "https://github.com/H-Pascual/BrawlStars", Title: "Repositorio del proyecto BrawlStars en GitHub", Target: true},
        Languages: [], //Javascript
        CoverImage: { Image: BrawlStartsCoverImage, Alt: ""}, //Create Alt 
        Images: []}, //Add Images
    { ID: "4bc0e413-0fc2-4353-acf0-7c92c5937203", 
        Name: "Quién es Quién", 
        Description: "Aplicación de escritorio en C# inspirada en Akinator y ¿Quién es Quién?, centrada en personajes de League of Legends. Incluye dos modos de juego: adivinanza automática con preguntas (modo Akinator) y duelo entre jugadores (modo ¿Quién es Quién?). Utiliza lógica de filtrado progresivo, preguntas dinámicas y una interfaz con Windows Forms. Proyecto educativo y de entretenimiento, no afiliado a Riot Games.",
        Difficulty: DifficultyTypes.Medium, 
        EndDate: "", 
        HasDemo: false,  
        GithubLink: {Href: "https://github.com/H-Pascual/QuienEsQuienLOL", Title: "Repositorio de ¿Quién es quién? LoL en GitHub", Target: true},
        Languages: [], // C#
        CoverImage: {Image: QuienEsQuienCoverImage, Alt: ""}, //Create Alt
        Images: []} //Add Images
]