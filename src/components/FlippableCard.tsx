'use client'
import { useEffect, useState } from 'react'
import styles from './flippableCard.module.css'
import Card from './card/Card'
import { CSSTransition } from 'react-transition-group'
import useDebounce from '@/hooks/useDebounce'
import { motion } from "framer-motion"
import { FlippableCardProps } from '@/types'


export default function FlippableCard({data} : FlippableCardProps): JSX.Element {
  const [showFront, setShowFront] = useState<boolean>(true)


  const { showNotification, debounceFunc } = useDebounce(() => {
    setShowFront((prev) => !prev);
  });

 


  return (
    <>
      {showNotification && <CooldownZone />}
    <div className={styles.container} >
      <CSSTransition
      in={showFront}
      timeout={1000}
      classNames='flip'
      >
          <Card data={data} onClick={debounceFunc} />
      </CSSTransition>
    </div>
    </>
  )
}

const CooldownZone = () : JSX.Element => {
return (
  <motion.section
  animate={{
    scale: [1, 2, 2],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}
  transition={{ duration: 5 }}
  className={styles.cooldownContainer} >
   <p>Debouncer Activated</p>
   <h1>Please CoolDown</h1>
  </motion.section>
)
}
