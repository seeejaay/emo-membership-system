const transitionDuration = {
  fadeIn: 0.2,
  slideUp: 0.3,
  staggerChildren: 0.2,
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: transitionDuration.fadeIn } },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: transitionDuration.staggerChildren,
    },
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: transitionDuration.slideUp,
    },
  },
};
