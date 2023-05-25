import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductCard from './ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ShopByCategory = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        //async fetch request and aos packaged initialized
        const fechRequest = async () => {
            const response = await fetch('https://playfulrides-server.vercel.app/api/toys')
            const data = await response.json()
            setProducts(data)
            setLoading(false)
        }
        fechRequest()
        AOS.init({
            duration: 1000,  
            easing: 'ease-in-out', 
            once: true, 
            mirror: true,
          });
    }, [])

    //to get unique categories
    const categoriesArray = Array.from(new Set(products.map(product => product.category)))
    //loading until data fetched
    if (loading) {
        return (
            <div className="container mx-auto">
                <div>
                <progress className="progress progress-primary w-56" value="100" max="100"></progress>
                </div>
            </div>
        )
    }
    return (
        <div className='py-5'>
            <h2 className='text-4xl text-center font-bold' data-aos="fade-up">Shop By Category</h2>
            <p className='mt-3 mb-4' data-aos="fade-up"></p>
            <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)} data-aos="fade-up">
                <div className='w-2/4 mx-auto p-5'>
                    {/* setting up tabs */}
                    <TabList className="flex justify-around ">

                        {
                            categoriesArray.map((category, index) => <Tab key={index} className="tab w-40 h-16 rounded-full border-slate-500 border-2 text-gray-800 hover:bg-slate-800 hover:text-white py-4 px-6">{category.toUpperCase().split(' ')[0]}</Tab>)
                        }

                    </TabList>
                </div>
                <div className='container mx-auto' data-aos="fade-up">
                    {/* setting up products and using index for selected tabs */}
                {categoriesArray.map((category, index) => (
                    <TabPanel key={index} >
                        <h4 className='text-2xl font-semibold text-center my-5 py-5'>{category.toUpperCase()}</h4>
                        <ul className="lg:flex justify-center gap-3 ">
                            {products
                            .filter((product) => product.category === category)
                            .slice(0,2)
                            .map((product) => (
                                <ProductCard key={product._id} product={product}></ProductCard>
                            ))}
                        </ul>
                    </TabPanel>
                ))}
                </div>

            </Tabs>

        </div>
    );
};

export default ShopByCategory;