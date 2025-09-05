'use client'

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';

const pageTransitionVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -20,
    }
};

export function AnimationLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={pathname}
                    variants={pageTransitionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ 
                        type: "tween",
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        left: 0,
                        right: 0,
                        top: 0,
                    }}
                    className="min-h-screen w-full"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}