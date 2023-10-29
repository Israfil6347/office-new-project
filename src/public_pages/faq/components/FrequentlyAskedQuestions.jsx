import { motion } from 'framer-motion';
import { AnimateDirection } from 'global_shared/animations/AnimateDirection';
import { TransitionSpeed } from 'global_shared/animations/transitionStraggerChildren/TransitionSpeed';
import { Transition } from 'global_shared/animations/transitions/Transition';
import PageContainer from 'global_shared/components/PageContainer';
import useAutoScrollUp from 'global_shared/hooks/useAutoScrollUp';
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
        <div className="text-left md:text-justify lg:text-justify">
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
