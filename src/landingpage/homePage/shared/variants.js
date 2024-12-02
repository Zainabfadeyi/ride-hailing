export const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? -100 : 100,
        opacity: 0,
      };
    },
  
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: {
          duration: 0.5,
        },
        opacity: {
          duration: 0.3,
        },
      },
    },
  
    exit: (direction) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
        transition: {
          x: {
            duration: 1,
          },
          opacity: {
            duration: 0.5,
          },
        },
      };
    },
  };