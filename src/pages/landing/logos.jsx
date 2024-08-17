import { useState, useLayoutEffect } from 'react';
import Logo_1_Taipei_Zoo from 'Assets/img/client_logos/Logo_1.jpg';
import Logo_2_CSR_CommonWealth_Media from 'Assets/img/client_logos/Logo_2.jpg';
import Logo_3_Cathay_Bank from 'Assets/img/client_logos/Logo_3.jpg';
import Logo_4_First_Bank from 'Assets/img/client_logos/Logo_4.jpg';
import Logo_5_Re_Think from 'Assets/img/client_logos/Logo_5.jpg';
import Logo_6_Circular_Taiwan from 'Assets/img/client_logos/Logo_6.jpg';
import Logo_7_The_Reporter_Media from 'Assets/img/client_logos/Logo_7.jpg';
import Logo_8_experimental_education from 'Assets/img/client_logos/Logo_8.jpg';
import Logo_9_G0V from 'Assets/img/client_logos/Logo_9.jpg';
import Logo_10__Future_City_CommonWealth_Media from 'Assets/img/client_logos/Logo_10.jpg';
import Logo_11_Pfizer from 'Assets/img/client_logos/Logo_11.jpg';
import Logo_12_Our_Island from 'Assets/img/client_logos/Logo_12.jpg';
import Logo_13_Taiwan_Textile_Research from 'Assets/img/client_logos/Logo_13.jpg';
import Logo_14_Ministry_of_Education from 'Assets/img/client_logos/Logo_14.jpg';
import Logo_15_PanSci_Media from 'Assets/img/client_logos/Logo_15.jpg';
import Logo_16_Taiwan_Raptors from 'Assets/img/client_logos/Logo_16.jpg';
import Logo_17_FDA from 'Assets/img/client_logos/Logo_17.jpg';
import Logo_18_What_Happened_TO_Annie from 'Assets/img/client_logos/Logo_18.jpg';
import Logo_19_OpenTix from 'Assets/img/client_logos/Logo_19.jpg';
import Logo_20_Open_Culture_Foundation from 'Assets/img/client_logos/Logo_20.jpg';
import Logo_21_Cathay_Insurance from 'Assets/img/client_logos/Logo_21.jpg';

const logos = [
    Logo_1_Taipei_Zoo, 
    Logo_2_CSR_CommonWealth_Media, 
    Logo_3_Cathay_Bank, 
    Logo_4_First_Bank,
    Logo_5_Re_Think,
    Logo_6_Circular_Taiwan, 
    Logo_7_The_Reporter_Media, 
    Logo_8_experimental_education, 
    Logo_9_G0V, 
    Logo_10__Future_City_CommonWealth_Media,
    Logo_11_Pfizer, 
    Logo_12_Our_Island, 
    Logo_13_Taiwan_Textile_Research,
    Logo_14_Ministry_of_Education, 
    Logo_15_PanSci_Media,
    Logo_16_Taiwan_Raptors, 
    Logo_17_FDA, 
    Logo_18_What_Happened_TO_Annie, 
    Logo_19_OpenTix, 
    Logo_20_Open_Culture_Foundation,
    Logo_21_Cathay_Insurance
];

const padOrder = [
    1, 2, 3, 4, 10, 5, 15, 20, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19
];

const mobileOrder = [
    1, 2, 3, 21, 20, 4, 10, 5, 15, 9, 16, 14, 6, 7, 8, 11, 12, 13, 19, 17, 18
];

const Logos = () => {
    const [orderedLogos, setOrderedLogos] = useState(logos.slice(0, 20));

    useLayoutEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 480 && window.innerWidth < 768) {
                setOrderedLogos(padOrder.map(index => logos[index - 1]));
            } else if (window.innerWidth < 480) {
                setOrderedLogos(mobileOrder.map(index => logos[index - 1]));
            } else {
                setOrderedLogos(logos.slice(0, 20));
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-0 justify-center px-7">
                    {orderedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex justify-center max-w-[113px] sm:max-w-[140px] md:max-w-[190px] m-0"
                        >
                            <img src={logo} alt={`Logo ${index + 1}`} className="w-full m-0" loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Logos;