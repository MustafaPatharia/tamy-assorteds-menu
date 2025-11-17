import { motion } from 'framer-motion'
import styles from './App.module.css'
import products from './data/products.json'
import Header from './components/Header'
import MenuItemCard from './components/MenuItemCard'
import Footer from './components/Footer'

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.cocoaHalo} aria-hidden="true" />
      <Header />

      <section className={styles.menuSection} aria-labelledby="menu-heading">
        <div className={styles.menuIntro}>
          <p className={styles.overline}>Melt-in-the-mouth moments</p>
          <h2 id="menu-heading">Curated Assortment</h2>
          <p className={styles.copy}>
            Each creation is tempered slowly, brushed with delicate cocoa dust,
            and sealed with the soft glow of our signature blue.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {products.map((product, index) => (
            <MenuItemCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default App
