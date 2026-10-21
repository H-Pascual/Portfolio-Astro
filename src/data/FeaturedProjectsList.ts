import type { Project } from "../entities";
import { ProjectList } from "./ProjectList";
import { ProjectListEn } from "./ProjectListEn";

// Proyectos que aparecen en "Proyectos destacados" de la home, en este orden.
const FeaturedIds = [
    "7c1d2f0e-5a3b-4e8f-9b61-2d4a8c3e9f10", // Aulaventura
    "4a4e2198-d3fc-453a-8f0c-f51abaa490c5", // CodeSano
    "b381c29d-0264-4f65-95dd-8076b3591127", // Renta Norte
]

const pick = (list: Project[]) => FeaturedIds.map(id => list.find(p => p.ID === id)!).filter(Boolean)

export const FeaturedProjectsList : Project[] = pick(ProjectList)
export const FeaturedProjectsListEn : Project[] = pick(ProjectListEn)
