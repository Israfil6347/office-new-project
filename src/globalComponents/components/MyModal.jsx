import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import { GiTireIronCross } from 'react-icons/gi';

function MyModal({
  show,
  onClose,
  size = 'S' | 'M' | 'L',
  enter = 'LR' | 'RL' | 'TB' | 'BT',
  exit = 'BT' | 'TB' | 'LR' | 'RL',
  enterDuration = 0.3,
  exitDuration = 0.3,
  children
}) {
  let enterAnimation = { opacity: 0 };
  let exitAnimation = { opacity: 0 };

  if (enter === 'LR') {
    enterAnimation = { x: '-100%', opacity: 0 };
  } else if (enter === 'RL') {
    enterAnimation = { x: '100%', opacity: 0 };
  } else if (enter === 'TB') {
    enterAnimation = { y: '-100%', opacity: 0 };
  } else if (enter === 'BT') {
    enterAnimation = { y: '100%', opacity: 0 };
  }

  if (exit === 'TB') {
    exitAnimation = { y: '-100%', opacity: 0 };
  } else if (exit === 'BT') {
    exitAnimation = { y: '100%', opacity: 0 };
  } else if (exit === 'LR') {
    exitAnimation = { x: '100%', opacity: 0 };
  } else if (exit === 'RL') {
    exitAnimation = { x: '-100%', opacity: 0 };
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-900 bg-opacity-95 text-onSurface`}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{
            duration: 0.3
          }}
        >
          <div className="absolute right-6 top-6 hover:scale-150 duration-150 transition-all text-white hover:text-red-300 text-2xl">
            {/* <GiTireIronCross onClick={() => onClose(false)} /> */}
          </div>
          <motion.div
            className={`w-full overflow-hidden rounded-sm bg-surface shadow-sm
            
            ${size === 'S' && 'md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12'}
            ${size === 'M' && 'md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12'}
            ${size === 'L' && 'md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12'}`}
            style={{
              maxHeight: window.innerHeight - 60
            }}
            initial={enterAnimation}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={exitAnimation}
            transition={{
              duration: 0.3
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('portal')
  );
}

export default MyModal;
