/**
 * Get post link.
 *
 * @param {object} post The post object.
 * @returns {string} The URL for the post.
 */
export function getPostLink (post) {
  const { file } = post
  const { pathname } = file
  // eslint-disable-next-line no-unused-vars
  const parts = pathname.split('/').filter(item => item !== '')
  const [href] = parts.slice(-2)

  return `/my-thoughts/${href}/`
}

/**
 * Set post link.
 *
 * @param {object} post The post object.
 * @returns {string} The URL for the post.
 */
export function setPostLink (post) {
  const { file } = post
  const { pathname } = file
  // eslint-disable-next-line no-unused-vars
  const parts = pathname.split('/').filter(item => item !== '')
  const [href] = parts.slice(-2)

  return href
}

export function getSnippetLink (snippet) {
  const { file } = snippet
  const { pathname } = file
  // eslint-disable-next-line no-unused-vars
  const parts = pathname.split('/').filter(item => item !== '')
  const [filename] = parts.slice(-1)

  const href = `/snippets/${filename.replace('.md', '')}/`

  return href
}

export function setSnippetLink (snippet) {
  const { file } = snippet
  const { pathname } = file
  // eslint-disable-next-line no-unused-vars
  const parts = pathname.split('/').filter(item => item !== '')
  const [filename] = parts.slice(-1)

  const href = `/${filename.replace('.md', '')}`

  return href
}
