import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'
import { SNIPPETS_PER_PAGE } from '../../snippets'

export async function getStaticPaths() {
  const totalSnippets = await getAllFilesFrontMatter('snippets')
  const totalPages = Math.ceil(totalSnippets.length / SNIPPETS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const snippets = await getAllFilesFrontMatter('blog')
  const pageNumber = parseInt(page)
  const initialDisplaySnippets = snippets.slice(
    SNIPPETS_PER_PAGE * (pageNumber - 1),
    SNIPPETS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(snippets.length / SNIPPETS_PER_PAGE),
  }

  return {
    props: {
      snippets,
      initialDisplaySnippets,
      pagination,
    },
  }
}

export default function PostPage({ snippets, initialDisplaySnippets, pagination }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout
        snippets={snippets}
        initialDisplaySnippets={initialDisplaySnippets}
        pagination={pagination}
        title="All Snippets"
      />
    </>
  )
}
