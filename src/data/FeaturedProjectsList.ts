import type { Project } from "../entities";
import { ProjectList } from "./ProjectList";
import { ProjectListEn } from "./ProjectListEn";

// Proyectos que aparecen en "Proyectos destacados" de la home, en este orden.
const FeaturedIds = [
    "c4d1a7e8-2f39-4b60-9e15-8a3c6d2b7f41", // Cadena Alimentaria
    "a9e3f5b2-6c18-4d47-b0a2-5f7e1c9d3a86", // Ágora
    "7c1d2f0e-5a3b-4e8f-9b61-2d4a8c3e9f10", // Aulaventura
]

const pick = (list: Project[]) => FeaturedIds.map(id => list.find(p => p.ID === id)!).filter(Boolean)

export const FeaturedProjectsList : Project[] = pick(ProjectList)
export const FeaturedProjectsListEn : Project[] = pick(ProjectListEn)
