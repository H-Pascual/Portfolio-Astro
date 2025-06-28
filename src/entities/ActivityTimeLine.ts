import { Achievements } from "./Achievements"
import { Experience } from "./Experience"
import { Study } from "./Study"

export enum ActivityType {
    Experience,
    Study,
    Achievements
}

export class ActivityTimeLine {
    ID: string
    Activity: Experience | Study | Achievements
    ActivityType: ActivityType
}

export const ExperienceIconUrl = ""
export const StudyIconUrl = ""
export const AchievementUrl = ""