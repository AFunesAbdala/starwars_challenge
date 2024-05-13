"use client"

import { usePathname, useRouter } from "next/navigation"

function NavComponent() {
    const pathname = usePathname()
    const router = useRouter()
    if (pathname != "/") {
        return (
            <header className="w-screen flex justify-center items-center absolute z-30">
                <div className="w-11/12 flex justify-between my-8">
                    <button onClick={() => router.back()} className="text-white font-bold opacity-50">GO BACK</button>
                    {
                        pathname.includes("/movies") && <p className="text-white font-light">Movies</p>
                    }
                    {
                        pathname.includes("/characters") && <p className="text-white font-light">Characters</p>
                    }
                </div>
            </header>
        )
    }
}

export default NavComponent