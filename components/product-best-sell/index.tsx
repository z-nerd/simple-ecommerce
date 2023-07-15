import classes from './index.module.scss'

export interface ProductBestSellProps {
    title: string
    company: string
    description: string
    price: string
    imgSrc: string
    imgAlt: string
    onAdd?: (productInfo: Omit<ProductBestSellProps, 'onAdd' | 'size' | 'imgSrc' | 'imgAlt'>) => void
}

export const ProductBestSell = ({ imgSrc, imgAlt, title, company, description, price, onAdd }: ProductBestSellProps) => {
    return (
        <div className={`${classes['product']}`}>
            
            <img className={classes['product-img']} src={imgSrc} alt={imgAlt} />

            <div className={classes['product-context']}>
                <div className={classes['product-context_title']}>
                    {title}
                </div>
                <div className={classes['product-context_company']}>
                    {company}
                </div>
                <div className={classes['product-context_description']}>
                    {description}
                </div>
            </div>

            <button className={classes['product-add']} onClick={() => {
                if (onAdd) onAdd({ company, description, price, title })
            }}>
                <span className={classes['product-add_text']}>+</span>
            </button>

            <div className={classes['product-price']}>
                {price}
            </div>
        </div>
    )
}