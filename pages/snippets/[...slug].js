import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'SnippetsSimple'

export async function getStaticPaths() {
  const snippets = getFiles('snippets')
  return {
    paths: snippets.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allSnippets = await getAllFilesFrontMatter('snippets')
  const snippetIndex = allSnippets.findIndex(
    (snippet) => formatSlug(snippet.slug) === params.slug.join('/')
  )
  const prev = allSnippets[snippetIndex + 1] || null
  const next = allSnippets[snippetIndex - 1] || null
  const snippet = await getFileBySlug('snippets', params.slug.join('/'))
  const authorList = snippet.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allSnippets.length > 0) {
    const rss = generateRss(allSnippets)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return { props: { snippet, authorDetails, prev, next } }
}

export default function Snippets({ snippet, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = snippet

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
