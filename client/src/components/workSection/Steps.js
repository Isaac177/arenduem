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
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
                        onClick={handleClick}
                        animate={{ y: showAnimation ? -10 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-indigo-500 text-white rounded-full p-3 mb-4">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-center">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
