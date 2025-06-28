import { Company } from "./Company"
import { Language } from "./Language"

export class Experience {
    ID: string
    Company: Company
    StartDate: Date
    HasFinished: boolean
    EndDate?: Date
    Description: string
    Languages?: Language[]
}