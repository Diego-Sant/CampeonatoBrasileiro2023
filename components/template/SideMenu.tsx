import { useState } from "react";
import { IconAFC, IconBFR, IconCAM, IconCAP, IconCFC, IconCRF, IconCRU, IconCRVG, IconCUI, IconECB, IconFEC, IconFFC, IconGEC, IconGFBPA, IconRBB, IconSCCP, IconSCI, IconSEP, IconSFC, IconSPFC, IconSerieA } from "../icons";
import MenuItem from "./MenuItem";

export default function SideMenu() {

    return (
        <aside className="bg-[#13265a]">
            <ul>
                <MenuItem url="/" text="Início" icon={IconSerieA} />
                <MenuItem url="/america" text="América" icon={IconAFC} />
                <MenuItem url="/athletico" text="América" icon={IconCAP} />
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