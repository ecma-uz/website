'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -200px' }

export interface FadeInProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
    delay?: number;
}

export function FadeIn(
    props: FadeInProps
) {
    let shouldReduceMotion = useReducedMotion()
    let isInStaggerGroup = useContext(FadeInStaggerContext)
    const { delay, ...restProps } = props

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay }}
            {...(isInStaggerGroup
                ? {}
                : {
                    initial: "hidden",
                    whileInView: 'visible',
                    viewport,
                })}
            {...restProps}
        />
    )
}