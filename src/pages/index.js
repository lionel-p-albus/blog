import styles from '../../styles/Home.module.css'
import Header from '../components/layouts/Header'
import Posts from '../components/Posts'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Blog page</h1>
        <Posts />
      </main>
    </div>
  )
}
