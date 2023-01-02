import React from 'react'
import { useParams } from 'react-router-dom'
import { SubCategories } from '../components/subcategories'
const SubCategoriesPage = () => {
    const category = useParams('category')

    return (
        <SubCategories category={category} />
    )
}
export default SubCategoriesPage


