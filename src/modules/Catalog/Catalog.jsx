import { useEffect } from "react"
import catalogStore from "./stores/CatalogStore"

export const Catalog = () => {

    const {categories, loadCategories} = catalogStore

    useEffect(()=>{
        loadCategories()
    }, [])

    return (
        <main>
            <div className="container">
                {console.log(categories)}
                <h1>Каталог</h1>
            </div>
        </main>
    )
}