import styles from './page.module.css'
import Home from '@/components/Home/Home'
import Layout from './layout'
import Footer from '@/components/Footer/Footer'
export default function page() {
  return (
    <main className={styles.main}>
      <Layout >
        <Home />
        <Footer />
      </Layout>
    </main>
  )
}
