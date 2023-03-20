import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ツターのレベルデザイン環境</title>
      </Head>
      <main className={styles.main}>
        <h1> Hello, Tsutter! </h1>

        <table>
          <tbody>
            <tr>
              <td>空白</td>
              <td>壁</td>
              <td>スタート: ツター</td>
            </tr>
          </tbody>
        </table>

      </main>
    </>
  )
}
