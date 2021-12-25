const axios = require("gatsby-unsplash/node_modules/axios");

exports.sourceNodes = async ({ actions }, pluginOptions) => {
  // const { createTypes } = actions;
  // const typeDefs = `
  //   type CommentServer implements Node {
  //     _id: String
  //     author: String
  //     string: String
  //     website: String
  //     content: String
  //     slug: String
  //     createdAt: Date
  //     updatedAt: Date
  //   }
  // `;
  // createTypes(typeDefs);

  const { createNode } = actions;
  const { username, client_id } = pluginOptions;

  try {
    const result = await axios({
      url: `https://api.unsplash.com/users/${username}/photos?client_id=${client_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await result.data;

    response.map((photo) => {
      convertNode({ photo, createNode });
    });
  } catch (error) {
    console.log("There is a something: ", error);
  }
};

function convertNode({ photo, createNode }) {
  const digest = JSON.stringify(photo)

  createNode({
    ...photo,
    id: photo.id,
    internal: {
      type: "UnsplashImage",
      contentDigest: digest,
    },
  });
}
