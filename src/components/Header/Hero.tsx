import { CaretDown } from "phosphor-react";
import { ApikiLogoBg } from "../../assets/apikiLogoBg";

export function Hero() {
    return (
        <div className="w-full grow relative">
            <div className="bg-hero-bg bg-fixed opacity-30 w-full -z-1 absolute h-full"></div>

            <div className="px-[100px] flex items-center justify-between">
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold mb-4">
                        Bem vindo ao Apiki Blog,<br/>
                        <span className="text-blue-500">tudo sobre Wordpress está aqui.</span>
                    </h1>
                    <p className="text-base text-gray-200 leading-relaxed">
                        Os conteúdos aqui publicados, em sua maioria, são resultados das experiências dos nossos profissionais com seus desafios do dia-a-dia em desenvolver grandes projetos de WordPress.
                    </p>
                </div>
                <div>
                    <ApikiLogoBg />
                </div>
            </div>

            <div className="absolute left-1/2 translate-x-1/2 bottom-0">
                <CaretDown size={24}/>
            </div>
        </div>
    )
}