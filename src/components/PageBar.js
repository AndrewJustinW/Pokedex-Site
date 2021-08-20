// import { useState, useEffect } from 'react'

export default function PageBar({ page, setPage }) {

    let totalPages = []
    let totalPokemon = 898
    for (let i = 1; i <= (totalPokemon / 48); i++) {
        totalPages.push(i)
    }

    return (
        <div className="pages-container">

            {totalPages.map((page) => (
                <div onClick={async () => { await setPage(page) }} className="page-button"> {page} </div>
            ))}
        </div>
    )
}
