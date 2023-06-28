
import steps from "../../assets/data/steps";
import { Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

const Steps = () => {
    return (
        <Element className="flex flex-col gap-6 items-center w-full" name="steps">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center bg-white p-6 gap-4 sm:gap-24`}
                >
                    <ScrollAnimation
                        animateIn="animate__fadeInLeft"
                        animateOnce={false}
                        duration={1.5}
                        className="flex">
                        <img src={step.icon} alt={step.title}
                             className='object-cover w-64 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64'
                        />
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn="animate__fadeInRight"
                        animateOnce={false}
                        duration={1.5}
                        className="ml-4">
                        <h1 className="mb-2 text-2xl font-bold lg:text-white lg:bg-aqua-500 p-2 rounded-full sm:no-underline">{step.number} - {step.title}</h1>
                        <p className="text-center text-sm text-gray-600">{step.description}</p>
                    </ScrollAnimation>
                </div>
            ))}
        </Element>
    );
};

export default Steps;
