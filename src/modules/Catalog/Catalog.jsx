import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import catalogStore from "./stores/CatalogStore"

export const Catalog = observer(() => {

    const {categories, loadCategories, manufacturer, loadManufacturer, categoryIndex, setCategory, productsByCategory, loadCategory} = catalogStore

    useEffect(()=>{
        loadCategories()
        loadManufacturer()
        loadCategory()
    }, [])

    useEffect(()=>{
        if(categories)
        loadCategory(categories[categoryIndex])
    }, [categories, categoryIndex])

    console.log(categoryIndex)

    return (
        <main>
            <div className="container">
                <div className="category">
                    {categories && categories.map((category, index) => 
                        <button onClick={()=>{setCategory(index)}} key={index} className='category_btn'>{category}</button>
                    )
                }
                </div>
                <div className="manufacturer">
                    {manufacturer && manufacturer.map((manufactur, index) => 
                        <button key={index} className='manufactur_btn'>{manufactur}</button>
                    )
                }
                </div>
                
            </div>
        </main>
    )
})