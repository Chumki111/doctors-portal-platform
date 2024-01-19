

const Card = ({title,description,icon:Icon}) => {
    return (
        <div className='shadow-2xl before:block before:-left-1 before:-top-1 before:bg-[#448C74] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#448C74] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block rounded-md hover:shadow-2xl'>
                    <div className='py-6 text-center'>
                        <div className='flex justify-center py-3 pb-4 rounded-md '><div className=" border rounded-full border-[#448C74] p-4">
                        <Icon className='text-6xl text-[#E5C466]' /></div></div>
                        <h2 className='text-[#3A4256] text-2xl font-semibold uppercase'>{title}</h2>
                        <p className="px-3 py-3">{description}</p>
                        <a href="/yoga" className="text-[#448C74] hover:text-[#E5C466] font-semibold">Learn More</a>
                    </div>
                </div>
    );
};

export default Card;