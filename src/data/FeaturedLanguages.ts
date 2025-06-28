import { Language } from "../entities"
import ReactLogo from '../assets/languages/react.png'
import CSharpLogo from '../assets/languages/csharp.svg'
import PythonLogo from '../assets/languages/python.png'
import MongoDbLogo from '../assets/languages/mongodb.png'
import TypeScriptLogo from '../assets/languages/typescript.png'
import AngularLogo from '../assets/languages/angular.png'

export const FeaturedLanguages : Language[] = [
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
        ID: "f88dd6f2-fcea-4d5c-92fa-34eb8a183ffd",
        Name: "Python", 
        Link: { Href: "https://www.python.org/", Title: "Python - Lenguaje de programación multipropósito", Target: true },
        Logo: { Image: PythonLogo, Alt: "Logo de Python" }
    },
    {
        ID: "6b864cfa-ad6e-4cc8-8f61-781bd3c36c4c",
        Name: "MongoDB", 
        Link: { Href: "https://www.mongodb.com/", Title: "MongoDB - Base de datos NoSQL orientada a documentos", Target: true },
        Logo: { Image: MongoDbLogo, Alt: "Logo de MongoDB" }
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