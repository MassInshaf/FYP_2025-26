import React from "react";
import Card from "./Card";
import gem_up_ins from '../assets/Result/gem_upld_ins.png';
import gem_indi from '../assets/Result/gem_indentification.png';
import intro from '../assets/Result/intrp_to_gemology.png';
import about_us from '../assets/Result/about_us.png';

const Carddata = () => {
    const handleClick = () => {
        // Handle click action here

        console.log("Card clicked!");
    };

    return (
        <div className=" grid grid-cols-4  justify-center items-center ">
            <div>
                <Card
                    title="Gem Upload Instructions"
                    description="Learn how to upload gem images for analysis"
                    imageUrl={gem_up_ins}
                    onClick={handleClick}
                />
            </div>

            <div>
                <Card
                    title="Gem Identification"
                    description="Identify gem with our advanced image recognition technology"
                    imageUrl={gem_indi}
                    onClick={handleClick}
                />
            </div>

            <div>
                <Card
                    title="Intro to Gemology"
                    description="Requrpose worn-out gems for creative projects"
                    imageUrl={intro}
                    onClick={handleClick}
                />
            </div>

            <div>
                <Card
                    title="About Me"
                    description="Learn more about GemAnalyzer and our team"
                    imageUrl={about_us}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};
export default Carddata;
