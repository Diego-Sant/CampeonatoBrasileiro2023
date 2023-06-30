import Layout from '@/components/template/Layout'
import useAppData from '@/data/hook/useAppData'

export default function America() {
  const {topic, changeTopic} = useAppData()

  return (
    <div>
      <Layout title='América Futebol Clube'>
        <button onClick={changeTopic}>Muda tema</button>
      </Layout>
    </div>
  )
}
