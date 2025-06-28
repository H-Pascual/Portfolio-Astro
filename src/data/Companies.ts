import { Company } from "../entities";
import IESMariaBlascoLogo from '../assets/companies/ies-maria-blasco-logo.jpg'
import IESSanVicenteLogo from '../assets/companies/ies-san-vicente-logo.png'
import UdemyLogo from '../assets/companies/udemy-logo.png'
import GeneralitatValencianaLogo from '../assets/companies/generalitat-valenciana-logo.png'
import OpenWebinarsLogo from '../assets/companies/openwebinars-logo.png'
import CambridgeLogo from '../assets/companies/cambridge-logo.png'
import InetumLogo from '../assets/companies/inetum-logo.png'
import EurobananLogo from '../assets/companies/eurobanan-logo.png'
import LaCaixaLogo from '../assets/companies/la-caixa-logo.png'

export const Companies: Company[] = [
    { ID: "ce0d7432-353b-4a31-8af2-1296825cbaf1", Name: "IES María Blasco", 
        Link: { Href: "https://portal.edu.gva.es/iesmariablasco/", Title: "IES María Blasco - Instituto de educación secundaria en San Vicente del Raspeig", Target: true},
        Logo: { Image: IESMariaBlascoLogo, Alt: "Logo del IES Maria Blasco"}},
    { ID: "2322ce5d-03b7-4a92-8ff8-60aeaf9cda63", Name: "IES San Vicente", 
        Link: { Href: "https://iessanvicente.com/", Title: "IES San Vicente - Formación académica en San Vicente del Raspeig", Target: true},
        Logo: { Image: IESSanVicenteLogo, Alt: "Logo del IES San Vicente"}},
    { ID: "1fa5024d-4852-4463-9a83-be417eff5a56", Name: "Udemy", 
        Link: { Href: "https://www.udemy.com/", Title: "Udemy - Cursos online en programación, diseño y más", Target: true},
        Logo: { Image: UdemyLogo, Alt: "Logo de Udemy"}},
    { ID: "83605345-5f9e-4458-b3bc-09170baf2672", Name: "Generalitat Valenciana",
        Link: { Href: "https://www.gva.es/es/inicio/presentacion", Title: "Generalitat Valenciana - Portal oficial de la comunidad autónoma", Target: true},
        Logo: { Image: GeneralitatValencianaLogo, Alt: "Logo de la Generalitat Valenciana"} },
    { ID: "29d28a00-c955-40fc-b8f7-2db156fb3ceb", Name: "OpenWebinars", 
        Link: { Href: "https://openwebinars.net/", Title: "OpenWebinars - Plataforma de formación IT online", Target: true },
        Logo: { Image: OpenWebinarsLogo, Alt: "Logo de OpenWebinars"}},
    { ID: "c825b1d4-4a86-4826-8fba-c4a2667c9876", Name: "Cambridge English", 
        Link: { Href: "https://www.cambridgeenglish.org/es/", Title: "Cambridge English - Exámenes oficiales de inglés", Target: true},
        Logo: { Image: CambridgeLogo, Alt: "Logo de Cambridge University"}},
    { ID: "842af420-8f38-4ee4-bc56-eae87174356c", Name: "Inetum", 
        Link: { Href:"https://www.inetum.com/es", Title: "Inetum - Servicios y soluciones digitales para empresas", Target: true},
        Logo: { Image: InetumLogo, Alt: "Logo de Inetum"}},
    { ID: "dbe50ea6-a63d-4196-8e13-a864b65e71ae", Name: "Eurobanan", 
        Link: { Href: "https://eurobanan.com/", Title: "Eurobanan - Distribución de frutas y alimentos", Target: true},
        Logo: { Image: EurobananLogo, Alt: "Logo de Eurobanan" }},
    { ID: "90b14c89-dd0e-49b2-9989-e82754e08be3", Name: "La Caixa", 
        Link: { Href: "https://www.caixabank.es/particular/home/particulares_es.html", Title: "CaixaBank - Servicios financieros para particulares", Target: true},
        Logo: { Image: LaCaixaLogo, Alt: "Logo de La Caixa"}}
]