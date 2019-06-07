const path = require(`path`)
const remark = require(`remark`)
const html = require(`remark-html`)
const dateformat = require(`dateformat`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const { makeProjectPath } = require(`./src/utils`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      cms {
        projects(where: { status: PUBLISHED }) {
          id
          createdAt
          slug
        }
      }
    }
  `)

  data.cms.projects.forEach(project => {
    actions.createPage({
      path: makeProjectPath(project),
      component: path.resolve(`./src/components/project-page.js`),
      context: {
        blogId: project.id,
      },
    })
  })
}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
}) => {
  const { createNode } = actions
  createResolvers({
    GraphCMS_Project: {
      createdAt: {
        type: `String`,
        resolve(source, args, context, info) {
          return dateformat(source.date, `fullDate`)
        },
      },
      desc: {
        resolve(source, args, context, info) {
          return remark()
            .use(html)
            .processSync(source.desc).contents
        },
      },
    },
    GraphCMS_Asset: {
      imageFile: {
        type: `File`,
        // projection: { url: true },
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.url,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
}
