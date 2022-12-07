export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [{
      name: 'articleMainTitle',
      title: 'ArticleMainTitle',
      type: 'string'
    },
    {
      name: 'articleMainParagraph1',
      title: 'ArticleMainParagraph1',
      type: 'string',
    },
    {
      name: 'articleMainParagraph2',
      title: 'ArticleMainParagraph2',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'articleSmallImage1',
      title: 'ArticleSmallImage1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'articleSmallTitle1',
      title: 'ArticleSmallTitle1',
      type: 'string',
    },
    {
      name: 'articleSmallParagraph1',
      title: 'ArticleSmallParagraph1',
      type: 'string',
    },
    {
      name: 'articleSmallImage2',
      title: 'ArticleSmallImage2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'articleSmallTitle2',
      title: 'ArticleSmallTitle2',
      type: 'string',
    },
    {
      name: 'articleSmallParagraph2',
      title: 'ArticleSmallParagraph2',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {
        author
      } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}