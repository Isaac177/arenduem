import { motion } from 'framer-motion';

const ProgressBar = ({ step, totalSteps }) => {
    const progress = (step / (totalSteps - 1)) * 100;

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            style={{
                backgroundColor: 'blue',
                height: '4px',
                borderRadius: '4px',
            }}
        />
    );
};

export default ProgressBar;