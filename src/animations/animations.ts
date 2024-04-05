export const fadeUpVariant = (delayTime: number = 0.1) => ({
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delayTime, 
      },
    },
  })