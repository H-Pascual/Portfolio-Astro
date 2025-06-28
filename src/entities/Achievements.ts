import { Company } from "./Company"
import { Language } from "./Language"

export class Achievements {
    ID: string
    Name: string
    Description: string
    Date: Date
    Company?: Company
    Languages?: Language[]
}