"use client"

import Link from "next/link"

export default function CharactersPagination(props) {
    const {
        countCharacters,
        pageSize,
        page
    } = props

    const currentPage = parseInt(page)
    const totalPages = Math.ceil(countCharacters / pageSize)
    const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1)
    
    return (
        <div className="flex flex-row gap-4">
            <Link href={`/select/characters?page=${currentPage - 1}`} className={currentPage===1 ? "hidden" : "italic text-white/80 text-sm"}>Previous</Link>
            {
                pagesArray.map((e, index) => {
                    return(
                        <Link href={`/select/characters?page=${e}`} className={currentPage === e ? "font-bold border-b-2 -translate-y-2" : "font-light text-sm"} key={index}>{e}</Link>
                    )
                })
            }
            <Link href={`/select/characters?page=${currentPage + 1}`} className={currentPage===totalPages ? "hidden" : "italic text-white/80 text-sm"}>Next</Link>
        </div>
    )
}