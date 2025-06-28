import { Company } from "./Company"
import { Language } from "./Language"

export class Study {
    ID: string
    Title: string
    Description?: string
    Languages?: Language[]
    School: Company
    StartDate: Date
    HasFinished: boolean
    EndDate?: Date
}