import { Language } from "../entities";
import ReactLogo from '../assets/languages/react.png'
import CSharpLogo from '../assets/languages/csharp.svg'
import HtmlLogo from '../assets/languages/html.png'
import DockerLogo from '../assets/languages/docker-logo.png'
import PythonLogo from '../assets/languages/python.png'
import CssLogo from '../assets/languages/css.svg'
import GitLogo from '../assets/languages/git.webp'
import MongoDbLogo from '../assets/languages/mongodb.png'
import SqlLogo from '../assets/languages/sql.webp'
import TypeScriptLogo from '../assets/languages/typescript.png'
import AngularLogo from '../assets/languages/angular.png'

export const Languages : Language[] = [
    {
        ID: "2f06c1e2-2b1e-4df5-b146-396652a822c0",
        Name: "React", 
        Link: { Href: "https://react.dev/", Title: "React - Biblioteca JavaScript para interfaces de usuario", Target: true },
        Logo: { Image: ReactLogo, Alt: "Logo de React" }
    },
    {
        ID: "29d19837-11c9-454a-a5b6-519ae882b627",
        Name: "C#", 
        Link: { Href: "https://learn.microsoft.com/en-us/dotnet/csharp/", Title: "C# - Lenguaje de programación moderno orientado a objetos", Target: true },
        Logo: { Image: CSharpLogo, Alt: "Logo de C#" }
    },
    {
        ID: "36236a85-1898-40f2-9da5-f7904aef2012",
        Name: "HTML", 
        Link: { Href: "https://developer.mozilla.org/es/docs/Web/HTML", Title: "HTML - Lenguaje de marcado para páginas web", Target: true },
        Logo: { Image: HtmlLogo, Alt: "Logo de HTML" }
    },
    {
        ID: "e0218481-9972-4db5-b9f3-429c3dbe0b75",
        Name: "Docker", 
        Link: { Href: "https://www.docker.com/", Title: "Docker - Plataforma de contenedores para desarrollo y despliegue", Target: true },
        Logo: { Image: DockerLogo, Alt: "Logo de Docker" }
    },
    {
        ID: "f88dd6f2-fcea-4d5c-92fa-34eb8a183ffd",
        Name: "Python", 
        Link: { Href: "https://www.python.org/", Title: "Python - Lenguaje de programación multipropósito", Target: true },
        Logo: { Image: PythonLogo, Alt: "Logo de Python" }
    },
    {
        ID: "a4742fee-dc9c-4831-8a98-eb28c3a9915e",
        Name: "CSS", 
        Link: { Href: "https://developer.mozilla.org/es/docs/Web/CSS", Title: "CSS - Hojas de estilo en cascada para diseño web", Target: true },
        Logo: { Image: CssLogo, Alt: "Logo de CSS" }
    },
    {
        ID: "390bf549-5fa3-475e-9835-53765154e71c",
        Name: "Git", 
        Link: { Href: "https://git-scm.com/", Title: "Git - Sistema de control de versiones distribuido", Target: true },
        Logo: { Image: GitLogo, Alt: "Logo de Git" }
    },
    {
        ID: "6b864cfa-ad6e-4cc8-8f61-781bd3c36c4c",
        Name: "MongoDB", 
        Link: { Href: "https://www.mongodb.com/", Title: "MongoDB - Base de datos NoSQL orientada a documentos", Target: true },
        Logo: { Image: MongoDbLogo, Alt: "Logo de MongoDB" }
    },
    {
        ID: "e6c5712c-767f-4980-88d8-b42fe8212e6a",
        Name: "SQL", 
        Link: { Href: "https://www.w3schools.com/sql/", Title: "SQL - Lenguaje para gestión de bases de datos relacionales", Target: true },
        Logo: { Image: SqlLogo, Alt: "Logo de SQL" }
    },
    {
        ID: "59d2c5f9-8cbb-4102-98bd-33ee3ae8c52a",
        Name: "TypeScript", 
        Link: { Href: "https://www.typescriptlang.org/", Title: "TypeScript - Superset de JavaScript tipado", Target: true },
        Logo: { Image: TypeScriptLogo, Alt: "Logo de TypeScript" }
    },
    {
        ID: "10a0ef22-9182-4cb7-8365-c01f0615ba6d",
        Name: "Angular", 
        Link: { Href: "https://angular.io/", Title: "Angular - Framework de desarrollo web frontend", Target: true },
        Logo: { Image: AngularLogo, Alt: "Logo de Angular" }
    }
]