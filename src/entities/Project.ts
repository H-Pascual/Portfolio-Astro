import { DifficultyTypes } from "../types"
import { Image } from "./Image"
import { Language } from "./Language"
import { Link } from "./Link"

export class Project {
    ID: string
    Name: string
    Description: string
    Difficulty: DifficultyTypes
    EndDate: Date
    HasDemo: boolean
    DemoLink?: Link
    GithubLink: Link
    DetailsLink: Link
    Languages: Language[]
    CoverImage: Image
    Images: Image[]
}