# Unsplash for gatsby  
This plugin for Gatsby will make images from [Unsplash](https://unsplash.com/)  available in GraphQL queries.

## Installation
Install plugin

    yarn add gatsby-unsplash

In `gatsby-config.js`

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-unsplash`,
      options: {
        client_id: `YogTLGb37qYyNmkhC6GwYPo4HZNTYbWR9Cp1OABAXVI`,
        username: "beratbozkurt0",
      },
    },
  ],
}
```

**Note:** Every application must abide by the [API Guidelines](https://help.unsplash.com/api-guidelines/unsplash-api-guidelines). Specifically, remember to [hotlink images](https://help.unsplash.com/api-guidelines/more-on-each-guideline/guideline-hotlinking-images), [attribute photographers](https://help.unsplash.com/api-guidelines/more-on-each-guideline/guideline-attribution), and [trigger a download when appropriate](https://help.unsplash.com/api-guidelines/more-on-each-guideline/guideline-triggering-a-download).

## Querying Unsplash Images

Once the plugin is configured, two new queries are available in GrapHQL: `allUnsplashImage` and `unsplashImage`.
Here's an example query to load all images:

```js
  query {
    allUnsplashImage {
      edges {
        node {
          id
          urls {
            regular
            small
          }
          width
          height
        }
      }
    }
  }
```

## TODO

 - [x] Get a list of photos uploaded by a user.
 - [ ] Get a single page from the Editorial feed.
 - [ ] Retrieve a single random photo, given optional filters.
 - [ ] Get a single page of photo results for a query.
 - [ ] Get a single page from the list of all collections.
 - [ ] Get a single page from the list of all topics.

 ## Inspiration

This readme is **heavily** based on [Chris Searle's](https://github.com/chrissearle) [gatsby-source-flickr](https://github.com/chrissearle/gatsby-source-flickr)
