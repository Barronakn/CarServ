import React from 'react';
import technicians_1 from "../../../public/assets/img/team-1.jpg"
import technicians_2 from "../../../public/assets/img/team-2.jpg"
import technicians_3 from "../../../public/assets/img/team-3.jpg"
import technicians_4 from "../../../public/assets/img/team-4.jpg"

const TechniciansPage = () => {

    const technicians = [
        {
            image: technicians_1,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_2,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_3,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_4,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_1,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_2,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_3,
            name: "Full Name",
            designation: "Designation",
        },
        {
            image: technicians_4,
            name: "Full Name",
            designation: "Designation",
        },
    ]

    return (
        <section className='py-20'>
            <div className='technicians px-32 pb-20'>
                <div className='flex flex-col justify-center items-center pb-14'>
                    <h1 className='text-red-600 uppercase font-bold'>
                    // Our Technicians //
                    </h1>
                    <p className='text-4xl text-sky-950 font-bold'>
                        Our Expert Technicians
                    </p>
                </div>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        technicians.map((technician, index) => (
                            <div key={index} className='technician bg-gray-200 text-center'>
                                <div className='relative'>
                                    <div className='bg-red-600 w-full h-full d-none absolute top-0 left-0'></div>
                                    <img loading='lazy' src={technician.image} alt="technicians-img" />
                                </div>
                                <div className='p-4'>
                                    <h5 className='text-xl text-sky-950 font-bold'>{technician.name}</h5>
                                    <p className='text-gray-400'>{technician.designation}</p>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default TechniciansPage;
