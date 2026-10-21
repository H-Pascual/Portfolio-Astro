import { DifficultyTypes } from "../types"
import { Image } from "./Image"
import { Language } from "./Language"
import { Link } from "./Link"

export class ProjectVideo {
    Src: string
    SrcWebm?: string
    Poster?: string
    Title: string
}

export class Project {
    ID: string
    Name: string
    /** Frase corta que resume el proyecto (tarjetas y destacados) */
    Tagline?: string
    Description: string
    /** Puntos clave que se muestran en destacados y en la página de detalle */
    Highlights?: string[]
    Difficulty: DifficultyTypes
    EndDate: Date
    HasDemo: boolean
    DemoLink?: Link
    GithubLink: Link
    DetailsLink: Link
    Languages: Language[]
    CoverImage: Image
    Images: Image[]
    Video?: ProjectVideo
}
