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

export const ProjectListEn: Project[] = [
  {
    ID: "d595f540-3058-45b7-9f14-b0d4342f45a9",
    Name: "Brokey",
    Description:
      "Brokey is a web application developed with Angular and TypeScript that simplifies stock market investing for inexperienced users. It features an intuitive interface for buying, selling, and managing stocks, cryptocurrencies, and commodities. It includes features such as personalized portfolios, interactive charts, secure authentication, and real-time data via mirror APIs.",
    Difficulty: DifficultyTypes.Hard,
    EndDate: new Date("2024-05-13"),
    HasDemo: false,
    DetailsLink: {
      Href: "/en/projects/brokey",
      Title: "Brokey Web Details Page",
      Target: false
    },
    GithubLink: {
      Href: "https://github.com/H-Pascual/Brokey_FrontEnd",
      Title: "Brokey FrontEnd GitHub Repository",
      Target: true
    },
    Languages: [
      {
        ID: "10a0ef22-9182-4cb7-8365-c01f0615ba6d",
        Name: "Angular",
        Link: {
          Href: "https://angular.io/",
          Title: "Angular - Frontend web development framework",
          Target: true
        },
        Logo: { Image: AngularLogo, Alt: "Angular Logo" }
      },
      {
        ID: "59d2c5f9-8cbb-4102-98bd-33ee3ae8c52a",
        Name: "TypeScript",
        Link: {
          Href: "https://www.typescriptlang.org/",
          Title: "TypeScript - Typed superset of JavaScript",
          Target: true
        },
        Logo: { Image: TypeScriptLogo, Alt: "TypeScript Logo" }
      },
      {
        ID: "4edaf72d-8d4a-48f5-8b65-16a9feca532f",
        Name: "MariaDB",
        Link: {
          Href: "https://mariadb.org/",
          Title: "MariaDB - Relational database management system",
          Target: true
        },
        Logo: { Image: MariaDBLogo, Alt: "MariaDB Logo" }
      },
      {
        ID: "09a32624-3a70-48fa-98b6-e6b972d55188",
        Name: "Node.js",
        Link: {
          Href: "https://nodejs.org/en",
          Title: "Node.js - JavaScript runtime for the server",
          Target: true
        },
        Logo: { Image: NodeJSLogo, Alt: "Node JS Logo" }
      }
    ],
    CoverImage: {
      Image: BrokeyCoverImage,
      Alt: "Overview of Brokey's main dashboard"
    },
    Images: [
      { Image: BrokeyCoverImage, Alt: "Overview of Brokey's main dashboard" },
      { Image: BrokeyActionsImage, Alt: "Stock management on Brokey" },
      {
        Image: BrokeyPortfolioImage,
        Alt: "Personalized portfolio display on Brokey"
      },
      { Image: BrokeyLoginImage, Alt: "Brokey login screen" },
      {
        Image: BrokeyGoodsImage,
        Alt: "List of available commodities on Brokey"
      },
      {
        Image: BrokeyGoodsDetailsImage,
        Alt: "Commodity details view in Brokey"
      },
      {
        Image: BrokeyCryptoImage,
        Alt: "Cryptocurrency overview in Brokey"
      },
      {
        Image: BrokeyCryptoDetailsImage,
        Alt: "Cryptocurrency details in Brokey"
      },
      { Image: BrokeyStockImage, Alt: "Stock listings in Brokey" },
      {
        Image: BrokeyStockDetailsImage,
        Alt: "Stock details page in Brokey platform"
      }
    ]
  },
  {
    ID: "a1537fa1-325b-4bf0-b9ce-ae4260594374",
    Name: "Cervezas Marin",
    Description:
      "Cervezas Marín is a fictional website developed with HTML, SCSS, and Vite, focused on selling craft beers. It offers a modern visual experience, smooth navigation, a featured product gallery, filters by type and price, and a responsive design. An educational project that demonstrates frontend best practices, ready for future TypeScript integration.",
    Difficulty: DifficultyTypes.Medium,
    EndDate: new Date("2024-02-05"),
    HasDemo: false,
    DetailsLink: {
      Href: "/en/projects/cervezas",
      Title: "Cervezas Marin Web Details Page",
      Target: false
    },
    GithubLink: {
      Href: "https://github.com/H-Pascual/CervezasMarin",
      Title: "CervezasMarin GitHub Repository",
      Target: true
    },
    Languages: [
      {
        ID: "59d2c5f9-8cbb-4102-98bd-33ee3ae8c52a",
        Name: "TypeScript",
        Link: {
          Href: "https://www.typescriptlang.org/",
          Title: "TypeScript - Typed superset of JavaScript",
          Target: true
        },
        Logo: { Image: TypeScriptLogo, Alt: "TypeScript Logo" }
      },
      {
        ID: "bc13def4-8308-48db-b1e7-e86203f320af",
        Name: "Vite",
        Link: {
          Href: "https://vite.dev/",
          Title: "Vite - Fast build tool for frontend projects",
          Target: true
        },
        Logo: { Image: ViteLogo, Alt: "Vite Logo" }
      }
    ],
    CoverImage: {
      Image: CervezasMarinCoverImage,
      Alt: "Main homepage of Cervezas Marín site"
    },
    Images: [
      {
        Image: CervezasMarinCoverImage,
        Alt: "Main homepage of Cervezas Marín site"
      },
      {
        Image: CervezasMarinCartImage,
        Alt: "Shopping cart view in Cervezas Marín"
      },
      {
        Image: CervezasMarinListImage,
        Alt: "Craft beer list in Cervezas Marín"
      },
      {
        Image: CervezasMarinSoldImage,
        Alt: "Top-selling beers in Cervezas Marín"
      }
    ]
  },
  {
    ID: "80aae9da-db13-48a5-bdf7-09afbdad3484",
    Name: "Brawl Starts",
    Description:
      "Interactive web viewer of Brawl Stars characters, developed using pure HTML, CSS, and JavaScript. Users can explore detailed character cards via drag and drop, filter by character type (Fighter or Sniper), and enjoy a friendly responsive interface. An educational project with no external dependencies, fully functional offline.",
    Difficulty: DifficultyTypes.Easy,
    EndDate: new Date("2023-03-23"),
    HasDemo: false,
    DetailsLink: {
      Href: "/en/projects/brawl-stars",
      Title: "Brawl Stars Web Details Page",
      Target: false
    },
    GithubLink: {
      Href: "https://github.com/H-Pascual/BrawlStars",
      Title: "BrawlStars Project GitHub Repository",
      Target: true
    },
    Languages: [
      {
        ID: "d3bdd649-b928-458d-9495-6770e510020c",
        Name: "JavaScript",
        Link: {
          Href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          Title: "JavaScript - Web programming language",
          Target: true
        },
        Logo: { Image: JavaScriptLogo, Alt: "JavaScript Logo" }
      }
    ],
    CoverImage: {
      Image: BrawlStartsCoverImage,
      Alt: "Main screen of the Brawl Starts project"
    },
    Images: [
      {
        Image: BrawlStartsHomeImage,
        Alt: "Main screen of the Brawl Starts project"
      },
      {
        Image: BrawlStartsCoverImage,
        Alt: "Character detail view in Brawl Starts project"
      }
    ]
  },
  {
    ID: "4bc0e413-0fc2-4353-acf0-7c92c5937203",
    Name: "Who's Who",
    Description:
      "A desktop app built with C#, inspired by Akinator and Who's Who?, focused on League of Legends characters. It includes two game modes: automatic guessing with dynamic questions (Akinator mode) and a duel between players (Who's Who? mode). It uses progressive filtering logic, dynamic questions, and a Windows Forms interface. An educational and entertainment project, not affiliated with Riot Games.",
    Difficulty: DifficultyTypes.Medium,
    EndDate: new Date("2023-05-17"),
    HasDemo: false,
    DetailsLink: {
      Href: "/en/projects/quien-es-quien",
      Title: "Who's Who? LoL Web Details Page",
      Target: false
    },
    GithubLink: {
      Href: "https://github.com/H-Pascual/QuienEsQuienLOL",
      Title: "Who's Who? LoL GitHub Repository",
      Target: true
    },
    Languages: [
      {
        ID: "29d19837-11c9-454a-a5b6-519ae882b627",
        Name: "C#",
        Link: {
          Href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
          Title: "C# - Modern object-oriented programming language",
          Target: true
        },
        Logo: { Image: CSharpLogo, Alt: "C# Logo" }
      }
    ],
    CoverImage: {
      Image: QuienEsQuienCoverImage,
      Alt: "Startup screen of the Who's Who? game"
    },
    Images: [
      {
        Image: QuienEsQuienHomeImage,
        Alt: "Startup screen of the Who's Who? game"
      },
      {
        Image: QuienEsQuienAkinatorImage,
        Alt: "Akinator mode guessing a LoL character"
      },
      {
        Image: QuienEsQuienCoverImage,
        Alt: "Player 2 interface in Who's Who?"
      },
      {
        Image: QuienEsQuienJugadorImage,
        Alt: "Player 1 interface in Who's Who?"
      },
      {
        Image: QuienEsQuienResultados,
        Alt: "Results screen of Who's Who? game"
      }
    ]
  }
]
