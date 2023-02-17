
import Layout from '@/pages/src/Layout'
import HeadMeta from '@/pages/src/HeadMeta'
import List from '@/pages/src/List'
import Write from '@/pages/src/Write'
import Update from '@/pages/src/Update'


export default function Home() {

  return (
    <>
      <Layout>
        <HeadMeta title="index" />
        <List />
      </Layout>
    </>
  )
}
