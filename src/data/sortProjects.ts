import type { Project } from "../entities"

// Primero los proyectos en curso (del más reciente al más antiguo por fecha de inicio),
// después los terminados por fecha de fin.
export const sortProjects = (list: Project[]) => [...list].sort((a, b) => {
    if (!!a.Ongoing !== !!b.Ongoing) return a.Ongoing ? -1 : 1
    if (a.Ongoing && b.Ongoing) return b.StartDate.getTime() - a.StartDate.getTime()
    return b.EndDate.getTime() - a.EndDate.getTime()
})
