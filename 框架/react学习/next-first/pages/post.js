/**
 * Created by fjl on 2019/2/13
 */
import Layout from '../components/Layout'
import axios from 'axios'
const Post = (props) => {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium}/>
    </Layout>
  )
}


Post.getInitialProps = async function(context) {
  const { id } = context.query
  const {data: show} = await axios.get(`http://api.tvmaze.com/shows/${id}`)
  return {show}
}

export default Post
