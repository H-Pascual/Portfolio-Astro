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

export type ProjectCategory = 'professional' | 'personal' | 'academic'

export class ProjectMetric {
    Value: string
    Label: string
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
    /** professional: trabajo en empresa · personal: producto propio · academic: formación */
    Category: ProjectCategory
    StartDate: Date
    EndDate: Date
    /** Proyecto en curso (aparece primero y muestra "en curso") */
    Ongoing?: boolean
    /** Periodo legible, p. ej. "Jun 2025 – Mar 2026" */
    Period: string
    /** Mi papel en el proyecto */
    Role?: string
    /** Equipo, p. ej. "Lideré a 2 desarrolladores" */
    Team?: string
    /** Cifras clave que se muestran destacadas */
    Metrics?: ProjectMetric[]
    HasDemo: boolean
    DemoLink?: Link
    GithubLink: Link
    DetailsLink: Link
    Languages: Language[]
    CoverImage: Image
    Images: Image[]
    Video?: ProjectVideo
}
