/**
 * Created by fjl on 2019/2/13
 */
import Link from 'next/link'
import Layout from '../components/Layout'
import axios from 'axios'
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {
        props.shows.map(({show}) => (
          <PostLink key={show.id} id={show.id} title={show.name}/>
        ))
      }
    </ul>
  </Layout>

)

Index.getInitialProps = async function() {
  const {data} = await axios.get('http://api.tvmaze.com/search/shows?q=batman')
  return {
    shows: data
  }
}

export default Index
