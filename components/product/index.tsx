import classes from './index.module.scss'

export interface ProductProps {
    title: string
    company: string
    price: string
    imgSrc: string
    imgAlt: string
    onAdd?: (productInfo: Omit<ProductProps, 'onAdd' | 'imgSrc' | 'imgAlt'>) => void
}

export const Product = ({ title, company, price, imgSrc, imgAlt, onAdd }: ProductProps) => {
    return (
        <div className={classes['product']}>
            <div className={classes['product_content']}>
                <div className={classes['product-price']}>
                    <p className={classes['product-price_text']} >
                        {price}
                    </p>
                </div>

                <div className={classes['product-img']}>
                    <img
                        src={imgSrc}
                        alt={imgAlt} />
                </div>

                <div className={classes['product-context']}>
                    <div className={classes['product-context_title']}>{title}</div>
                    <div className={classes['product-context_description']}>{company}</div>
                </div>
            </div>


            <button
                className={classes['product-add']}
                onClick={() => {
                    if (onAdd) onAdd({ title, company, price })
                }}>
                <span className={classes['product-add_text']}>+</span>
            </button>
        </div>
    )
}