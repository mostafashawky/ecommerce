import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const MegaMenu = ({ categories }) => {

    useEffect(() => {
        const accordionBtn = Array.from(document.getElementsByClassName('accordion-btn'))
        accordionBtn.forEach((btn) => {
            btn.addEventListener('click', function () {
                const subMenu = this.nextElementSibling ? this.nextElementSibling : null
                if (subMenu) {
                    const subMenuHeight = this.nextElementSibling.scrollHeight;
                    this.classList.toggle('active')
                    if (this.classList.contains('active')) {
                        subMenu.style.height = subMenuHeight + 'px'
                    } else {
                        subMenu.style.height = '0px'
                    }
                }
            })
        })

    }, [categories])

    const accordionView = () => {

        return categories.map((cat) => (
            <div className="accordion" key={cat.id} >
                <button className="accordion-btn">
                    <Link to={`${!cat.sub_categories.length ? `categories/${cat.cat_name}` : ''}`} className="link">
                        <img className="img" width="35" height="27" src={cat.image} alt="cat-image" />
                        {cat.cat_name}
                    </Link>
                    {cat.sub_categories.length ? (<i className="fa fa-chevron-right chevron-icon"></i>) : ''}
                </button>
                {cat.sub_categories?.length ? (
                    <ul className="accordion-submenu list-unstyled">
                        {cat.sub_categories.map((subcat) => (
                            <li className="item d-flex align-items-center" key={subcat.id}>
                                <Link className="link" to={`/categories/${subcat.cat_name}`}>
                                    <img src={subcat.image} width="35" height="27" alt="cat-image" />
                                    {subcat.cat_name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )
                    : (
                        ""
                    )
                }


            </div >
        ))
    }
    return (
        <div className="mega-menu">
            {accordionView()}
        </div>
    )
}
export default MegaMenu