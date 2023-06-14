import { Parallax } from 'react-parallax';

const BannerTitle = ({ img, heading, paragraph, height }) => {
    return (
        <Parallax className=" mb-[48px]" blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}

        >
            <div className={`lg:my-[90px] h-[${height}] flex items-center justify-center container mx-auto`}>

                <div className='w-[75%] bg-black bg-opacity-50 text-center text-white p-20 '>
                    <h1 className='text-3xl mb-4 lg:text-5xl uppercase'>{heading}</h1>
                    <p>{paragraph}</p>
                </div>

            </div>
        </Parallax>
    );
};

export default BannerTitle;