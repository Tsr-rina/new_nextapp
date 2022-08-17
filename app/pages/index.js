import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from "../styles/utils.module.css"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* 子要素はchildren */}
      <section className={utilStyles.headingMd}>
        <h2>Introduce my product</h2>
        <div className={utilStyles.IntroCard}>
          <h3>
            MyArtSite
          </h3>
          <p>
            自身で描いた絵やデザインした洋服を掲載しているサイトです
            <br/>
            <Link href="https://tsr-rina.github.io/myartsite.github.io/">
              <a>MyArtSiteへ</a>
            </Link>
          </p>
        </div>
        <div className={utilStyles.IntroCard}>
          <h3>
            WebAR
          </h3>
          <p>
            WebARを試してみました。黄色くんが現れます。
            <br/>
            <Link href="/https://tsr-rina.github.io/webar_maker/">
              <a>ここからお試しできます</a>
            </Link>
          </p>
        </div>
        <div className={utilStyles.IntroCard}>
          <h3>
            WebAPI Small Art Museum
          </h3>
          <p>
            自分で絵画のWebAPIを作成し、絵画の解説を閲覧できるサービスを作成しました。解説等は全てWikipediaから引用しています
            <br/>
            <Link href="https://webapi-flask-app.vercel.app/">
              <a>サービスを見る</a>
            </Link>
          </p>
        </div>

      </section>

    </Layout>
    // <div className={styles.container}>
    //   <Head>
    //     <title>App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       🦊Hello
    //       <Link href="/posts/first-post">
    //         <a>Next.js!🐿</a>
    //       </Link>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}
