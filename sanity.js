import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: "0udjkwam",
  dataset: "production",
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}

