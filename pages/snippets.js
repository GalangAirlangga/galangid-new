import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutSnippets'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets')
  const initialDisplayPosts = snippets.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(snippets.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, snippets, pagination } }
}

export default function Snippet({ snippets, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Snippets - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        snippets={snippets}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Snippets"
      />
    </>
  )
}
