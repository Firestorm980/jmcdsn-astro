/**
 * Get post link.
 *
 * @param {object} post The post object.
 * @returns {string} The URL for the post.
 */
export function getPostLink (post) {
  const { url } = post
  // eslint-disable-next-line no-unused-vars
  const [postsFolder, yearFolder, folderSlug, fileName] = url.split('/').filter(item => item !== '')

  const href = `/my-thoughts/${folderSlug}/`

  return href
}
