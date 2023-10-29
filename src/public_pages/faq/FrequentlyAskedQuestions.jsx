import { motion } from 'framer-motion';
import { AnimateDirection } from '../../globalComponents/animations/AnimateDirection';
import { TransitionSpeed } from '../../globalComponents/animations/transitionStraggerChildren/TransitionSpeed';
import { Transition } from '../../globalComponents/animations/transitions/Transition';
import PageContainer from '../../globalComponents/components/PageContainer';
import useAutoScrollUp from '../../globalComponents/hooks/useAutoScrollUp';
import Accordion from './components/Accordion';

function FrequentlyAskedQuestions() {
  useAutoScrollUp();

  return (
    <motion.div
      initial="offscreen"
      animate="onscreen"
      transition={TransitionSpeed.Fast}
    >
      <PageContainer>
        <div className="text-left mt-20 md:text-justify lg:text-justify">
          <motion.div
            className="flex w-full flex-col items-center bg-surface  p-16 shadow-sm"
            variants={AnimateDirection.RightToLeft}
            transition={Transition.FastTransition}
          >
            <Accordion />
          </motion.div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default FrequentlyAskedQuestions;
