import { Project } from "../entities"
import { DifficultyTypes } from "../types"
import BrokeyCoverImage from '../assets/projects/brokey/brokey-home.png'
import CervezasMarinCoverImage from '../assets/projects/cervezas-marin/cervezas-marin-home.png'
import BrawlStartsCoverImage from '../assets/projects/brawl-starts/brawl-starts-details.png'
import QuienEsQuienCoverImage from '../assets/projects/quien-es-quien/quien-es-quien-jugador2.png'

export const ProjectList : Project[] = [
    { ID: "d595f540-3058-45b7-9f14-b0d4342f45a9", 
        Name: "Brokey", 
        Description: "", 
        Difficulty: DifficultyTypes.Hard, 
        EndDate: "", 
        HasDemo: false, 
        GithubLink: "",
        Languages: "", 
        CoverImage: BrokeyCoverImage, 
        Images: ""},
    { ID: "a1537fa1-325b-4bf0-b9ce-ae4260594374", 
        Name: "Cervezas Marin", 
        Description: "", 
        Difficulty: DifficultyTypes.Medium, 
        EndDate: "", 
        HasDemo: false, //true when deployed
        GithubLink: "",
        Languages: "", 
        CoverImage: CervezasMarinCoverImage,
        Images: ""},
    { ID: "80aae9da-db13-48a5-bdf7-09afbdad3484", 
        Name: "Brawl Starts", 
        Description: "", 
        Difficulty: DifficultyTypes.Easy, 
        EndDate: "", 
        HasDemo: false, //true when deployed
        GithubLink: "",
        Languages: "", 
        CoverImage: BrawlStartsCoverImage, 
        Images: ""},
    { ID: "4bc0e413-0fc2-4353-acf0-7c92c5937203", 
        Name: "Quién es Quién", 
        Description: "", 
        Difficulty: DifficultyTypes.Medium, 
        EndDate: "", 
        HasDemo: false,  
        GithubLink: "",
        Languages: "", 
        CoverImage: QuienEsQuienCoverImage,
        Images: ""}
]