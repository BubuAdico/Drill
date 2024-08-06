import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CompaniesData from "../data";

const Companies = () => {
    return (
        <section className="h-auto mx-3 my-7 overflow-hidden">
            <header className="p-4 bg-gradient-to-tr from-yellow-300 to-orange-500 rounded-lg shadow-xl overflow-hidden">
                <p className="text-center text-balance media-q-text text-white mt-2 mb-8 overflow-hidden">TEMATS supplies OEM parts of the following equipment</p>
                
                <div className="flex gap-3 cards grow justify-center items-center overflow-hidden">
                    {
                        CompaniesData.map(company => (
                            <>
                                <div key={ company.id } className='m-5 overflow-hidden'>
                                    <figure className='overflow-hidden'>
                                        <LazyLoadImage src={company.logo} alt={company.company} title={company.company} effect='blur' className='w-40 overflow-hidden' />
                                        <figcaption className='text-lg my-3 text-white min-w-full text-center font-semibold'>{ company.company }</figcaption>
                                    </figure>
                                </div>
                            </>
                        ))
                    }
                </div>
            </header>
        </section>
    )
}

export default Companies;