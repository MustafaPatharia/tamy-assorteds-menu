import { motion } from 'framer-motion'
import styles from './Header.module.css'

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

function Header() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.img
          src="/logo.svg"
          alt="Tamy Assorteds Logo"
          className={styles.logo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />

        <motion.p
          className={styles.pill}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Artisanal Chocolate Atelier
        </motion.p>

        <motion.h1
          className={styles.title}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          Handmade Chocolates by Mariyam
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafted with love. Curated with passion. Indulge in pure chocolate
          artistry.
        </motion.p>

        <motion.a
          className={styles.cta}
          href="#menu-heading"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Explore the Menu
        </motion.a>
      </div>

      <motion.div
        className={styles.heroPanel}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      >
        <div className={styles.sparkle} />
        <p>Slow-tempered couverture</p>
        <p>Locally sourced botanicals</p>
        <p>Limited micro batches</p>
      </motion.div>
    </header>
  )
}

export default Header
