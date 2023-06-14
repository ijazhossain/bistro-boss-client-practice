const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="w-1/2 mx-auto text-center mb-[28px] lg:mb-[48px]">
            <h2 className=" lg:text-xl text-[#D99904]">{subHeading}</h2>
            <div className="divider"></div>
            <h1 className="text-xl lg:text-[40px]">{heading}</h1>
            <div className="divider"></div>
        </div>
    );
};

export default SectionTitle;