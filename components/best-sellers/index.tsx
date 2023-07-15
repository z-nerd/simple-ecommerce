import { ReactNode } from "react";
import classes from './index.module.scss'


export interface BestSellersProps {
    children: ReactNode | ReactNode[]
    showMore?: boolean
    className: string
    onShowMore?: (showMore: boolean) => void
}

export const BestSellers = ({ children, className, showMore = true, onShowMore }: BestSellersProps) => {
    return (
        <div className={className}>
            <div className={classes['best-sellers-header']}>
                <p className={classes['best-sellers-header_title']}>Best Sellers</p>
                <button 
                className={`${classes['best-sellers-header_btn']} ${
                 showMore 
                 ? classes['best-sellers-header_btn--hide']
                 : classes['best-sellers-header_btn--show']}`}
                 onClick={() => {
                    if(onShowMore) onShowMore(showMore)
                 }}>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={`${classes['best-sellers-children']} ${!showMore && classes['best-sellers-children--hide']}`}>
                {children}
            </div>
        </div>
    )
}