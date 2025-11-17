import { motion } from 'framer-motion'
import styles from './MenuItemCard.module.css'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.5, ease: 'easeOut' },
  }),
}

function MenuItemCard({ product, index }) {
  const { title, description, price, tag, image } = product

  return (
    <motion.article
      className={styles.card}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <div className={styles.imageWrap}>
        {tag && <span className={styles.badge}>{tag}</span>}
        <img src={image} alt={title} />
      </div>

      <div className={styles.details}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {price && <p className={styles.price}>{price}</p>}
      </div>
    </motion.article>
  )
}

export default MenuItemCard
