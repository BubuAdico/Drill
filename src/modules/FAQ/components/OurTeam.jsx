import { people } from "../data"

const OurTeam = () => {
    return (
        <section className="bg-white m-4  sm:py-6">
                <div className="rounded-md mx-auto grid max-w-7xl gap-x-8 gap-y-20 py-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-bg-primary sm:text-4xl">THE TEMATS GROUP</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We&apos;re a dynamic group of individuals who are  passionate about what we do and dedicated to delivering the best results for our clients.
                        </p>
                    </div>
                    
                    {/* grid justify-items-center max-w gap-x-8 gap-y-16 py-6 px-6 lg:px-8 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 splide_card overflow-hidden */}

                    {/* grid gap-x-7 gap-y-10 sm:grid-cols-3 sm:gap-y-12 xl:col-span-3 */}

                    <div role="list" className="grid justify-items-center max-w gap-x-8 gap-y-16 py-10  lg:px-8 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 rounded-md splide_card overflow-hidden">
                        {people.map((person) => (
                        // <li className="card" key={person.name}>
                        //     <div className="flex card__content items-center gap-x-6">
                        //     <img className="h-32 w-32 rounded-full card_img" src={person.imageUrl} alt={person.name} />
                        //     <div>
                        //         <h3 className="text-base card__title font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                        //         <p className="text-sm card__title font-semibold leading-6 text-bg-primary">{person.role}</p>
                        //     </div>
                        //     </div>
                        // </li>
                        <div className="card" key={person.id}>
                                <img src={person.imageUrl} className="card_img" />

                                <div className="card__content">
                                    <p className="card__title">{person.name}</p>
                                    <p className="text-bg-primary">
                                        {person.role}
                                    </p>
                                    <p className="card__description">
                                        {person.bio}
                                    </p>
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>
        </section>
    )
}

export default OurTeam