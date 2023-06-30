import { IconAFC, IconBFR, IconCAM, IconCAP, IconCFC, IconCRF, IconCRU, IconCRVG, IconCUI, IconECB, IconFEC, IconFFC, IconGEC, IconGFBPA, IconRBB, IconSCCP, IconSCI, IconSEP, IconSFC, IconSPFC, IconSerieA } from "../icons";
import MenuItem from "./MenuItem";
import Image from "next/image";
import Logo from "../../public/images/Logo.png"
import Link from "next/link";

export default function SideMenu() {

    return (
        <aside className="bg-[#13265a] dark:bg-[#111e3f] w-36">
            <div className="flex items-center justify-center h-20 w-30 dark:bg-[#121327] bg-[#c1f700]">
                <Link href="/">
                    <Image className="w-16 h-16 transition-[2s] hover:scale-125" src={Logo} alt="Campeonato Brasileiro 2023" />
                </Link>
            </div>
            <ul>
                <MenuItem url="/" text="Destaques" icon={IconSerieA} />
                <MenuItem url="/america" text="América" icon={IconAFC} />
                <MenuItem url="/athletico" text="Athletico" icon={IconCAP} />
                <MenuItem url="/atletico" text="Atlético-MG" icon={IconCAM} />
                <MenuItem url="/bahia" text="Bahia" icon={IconECB} />
                <MenuItem url="/botafogo" text="Botafogo" icon={IconBFR} />
                <MenuItem url="/corinthians" text="Corinthians" icon={IconSCCP} />
                <MenuItem url="/coritiba" text="Coritiba" icon={IconCFC} />
                <MenuItem url="/cruzeiro" text="Cruzeiro" icon={IconCRU} />
                <MenuItem url="/cuiaba" text="Cuiabá" icon={IconCUI} />
                <MenuItem url="/flamengo" text="Flamengo" icon={IconCRF} />
                <MenuItem url="/fluminense" text="Fluminense" icon={IconFFC} />
                <MenuItem url="/fortaleza" text="Fortaleza" icon={IconFEC} />
                <MenuItem url="/goias" text="Goiás" icon={IconGEC} />
                <MenuItem url="/gremio" text="Grêmio" icon={IconGFBPA} />
                <MenuItem url="/internacional" text="Internacional" icon={IconSCI} />
                <MenuItem url="/palmeiras" text="Palmeiras" icon={IconSEP} />
                <MenuItem url="/bragantino" text="Bragantino" icon={IconRBB} />
                <MenuItem url="/santos" text="Santos" icon={IconSFC} />
                <MenuItem url="/saopaulo" text="São Paulo" icon={IconSPFC} />
                <MenuItem url="/vasco" text="Vasco" icon={IconCRVG} />
            </ul>
        </aside>

    )
}