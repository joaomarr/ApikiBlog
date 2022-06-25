import { CaretRight } from "phosphor-react";

export function MainHomeComponent() {
    return(
        <main className="mx-32">
            <div className="flex items-center">
                <p>
                    Home
                </p>
                <CaretRight size={14} color="#000000"/>
            </div>
        </main>
    )
}