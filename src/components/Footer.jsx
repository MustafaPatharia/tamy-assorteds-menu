import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.brand}>Tamy Assorteds</p>
        <p>Handcrafted with ❤️ by Mustafa Patharia</p>
      </div>
      <div className={styles.links}>
        <a href="mailto:hello@tamyassorteds.com">hello@tamyassorteds.com</a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  )
}

export default Footer
