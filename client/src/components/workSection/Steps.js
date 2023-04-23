import { useState } from "react";
import { motion } from "framer-motion";
import steps from "../../assets/data/steps";

const Steps = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    const handleClick = () => {
        setShowAnimation(true);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg"
                        onClick={handleClick}
                        animate={{ y: showAnimation ? -10 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-4 rounded-full bg-indigo-500 p-3 text-white">
                            {step.icon}
                        </div>
                        <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                        <p className="text-center text-gray-600">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
