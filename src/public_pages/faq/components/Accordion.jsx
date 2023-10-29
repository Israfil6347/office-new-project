import { motion } from 'framer-motion';
import { AnimateDirection } from '../../../globalComponents/animations/AnimateDirection';
import { Transition } from '../../../globalComponents/animations/transitions/Transition';
import { TransitionSpeed } from '../../../globalComponents/animations/transitionStraggerChildren/TransitionSpeed';
import { faqList } from '../data/faqList';
import AccordionItem from '../../../globalComponents/components/AccordionItem';

function Accordion() {
  return (
    <motion.div
      className="w-full"
      initial="offscreen"
      animate="onscreen"
      transition={TransitionSpeed.Fast}
    >
      {faqList.map((faq) => {
        return (
          <motion.div
            variants={AnimateDirection.RightToLeft}
            transition={Transition.FastTransition}
          >
            <AccordionItem title={faq?.Title} content={faq?.Details} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Accordion;
