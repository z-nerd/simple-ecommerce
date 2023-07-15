"use client"
import { BestSellers } from "@/components/best-sellers";
import { Product } from "@/components/product";
import { ProductBestSell } from "@/components/product-best-sell";
import { useState } from "react";

const BackgroundImage = () => (
  <svg id="page-background" viewBox="0 0 865 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H814.527C850.33 0 874.531 36.5291 860.569 69.4979L478.147 972.536C464.679 1004.34 433.492 1025 398.955 1025H0V0Z" fill="url(#paint0_linear_0_3)" />
    <defs>
      <linearGradient id="paint0_linear_0_3" x1="262.972" y1="-630.882" x2="-1040.21" y2="526.977" gradientUnits="userSpaceOnUse">
        <stop stopColor="#78FFD6" />
        <stop offset="1" stopColor="#007991" />
      </linearGradient>
    </defs>
  </svg>
)

export default function Home() {
  const [showMore, setShowMore] = useState(true)

  return (
    <main>
      <div className='root'>
        <BackgroundImage />
        <div className='page'>
          <div className='header'>
            <div className='logo'>
              <div className='logo_text'>Lotus</div>
              <div className='logo_img'></div>
            </div>

            <div className='header_toolbar'>
              <input className='search_bar' type="text" placeholder='Search' />
              <div className='basket'></div>
            </div>
          </div>


          <div className='main'>
            <BestSellers className='main-best-sellers' showMore={showMore} onShowMore={() => {
              setShowMore(state => !state)
            }}>
              <ProductBestSell
                imgSrc='/jar.png'
                imgAlt='Lotus Jar'
                title='Lotus Jar'
                description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`}
                company='Green Fruit Jelly'
                price='4.00 $'
                onAdd={(data) => {
                  console.log(data);
                }}
              />
              <ProductBestSell
                imgSrc='/jar.png'
                imgAlt='Lotus Mi'
                title='Lotus Mi'
                description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`}
                company='Green Fruit Jelly'
                price='2.00 $'
                onAdd={(data) => {
                  console.log(data);
                }}
              />
            </BestSellers>

            <div className='main-aside'>
              <p className='main-aside_title'>More Items</p>
              <div className='main-aside_list'>
                <Product
                  imgSrc='/apple.png'
                  imgAlt='apple'
                  price='$10.00'
                  title='App Fruit'
                  company='Original Taste'
                  onAdd={(data) => {
                    console.log(data);
                  }}
                />

                <Product
                  imgSrc='/grape.png'
                  imgAlt='Grape'
                  price='$15.00'
                  title='Grape Fruit'
                  company='Original Taste'
                  onAdd={(data) => {
                    console.log(data);
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
