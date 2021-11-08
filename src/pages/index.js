import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
const zhCont = { title: '欢迎来到 web3medicallabs', delete: '更多详情' }
const enCont = {
  title: 'BASR FINTECH LLC AI + Blockchain are the Future of Healthcare',
  delete: 'Get more details',
}
function HomepageHeader() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext()
  let cont = {}
  currentLocale == 'zh-cn' ? (cont = zhCont) : (cont = enCont)
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="backHome"></div>
      {/* <div className="container">
        <h1 className="hero__title">{cont.title}</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            {cont.delete}
          </Link>
        </div>
      </div> */}
      {/* <div className="smalls">
        Combined AI and IPFS technology , BASR led Healthcare industry to go
        into the Web3.0 era ——Metaverse!
      </div> */}
      <div className="container">
        <div className="fontBlod">
          <p>
            Medical Imaging <a className="xiaClo">+</a> AI{' '}
            <a className="xiaClo">+</a> Blockchain <a className="yelCol">=</a>{' '}
          </p>
          <p>
            Human Error Free Diagnosis <a className="xiaClo">+</a> Better
            Managed Prognosis <a className="yelCol">=</a>{' '}
          </p>
          <p>
            Better Treatment <a className="yelCol">=</a> Quick Recovery
          </p>
          <p>
            <a className="yelCol">=</a> Less Pain <a className="xiaClo">+</a>{' '}
            Fewer Invasive Surgeries
          </p>
        </div>
        <div className=" text-left ">
          In practice, radiologists often miss, misinterpret or fail to mention
          findings, most of no clinical consequence, and some with significant
          consequences. This is not because of a lack of a system or that the
          radiologists in question are incompetent, it is because radiologists
          look too fast, and in the worst case scenario, are financially
          incentivised to look too fast.
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const {
    siteConfig,
    i18n: { currentLocale },
  } = useDocusaurusContext()
  // console.log(siteConfig)
  // console.log(currentLocale + '----currentLocale-----')
  return (
    <Layout
      title={`Basr`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures language={currentLocale} />
      </main>
    </Layout>
  )
}
