var express = require('express')
var mongoose = require('mongoose')
var graphqlHTTP = require('express-graphql')
var { makeExecutableSchema } = require('graphql-tools')

// Database
const snippetModel = mongoose.model('Snippet', {
    _id: mongoose.Schema.Types.ObjectId,
    language: String,
    title: String,
    body: String
})

const typeDefs = `
    type Snippet {
        _id: String!
        language: String
        title: String
        body: String
    }

    type Query {
        snippets: [Snippet]
        snippet(_id: String!): Snippet
    }

    type Mutation {
        addSnippet(language: String!, title: String!, body: String!): Snippet
        deleteSnippet(_id: String!): Snippet
    }

    schema {
        query: Query
        mutation: Mutation
    }
`

// Snippet resolver
const resolvers = {
    Query: {
        snippets: () => {
            var snippets = new Promise((resolve, reject) => {
                snippetModel.find({}, (err, snippets) => {
                    err ? reject(err) : resolve(snippets)
                })
            })
            return snippets
        },
        snippet: (_, { _id }) => snippetModel.findById(_id)
    },
    Mutation: {
        addSnippet: (_, {language, title, body}) => {
            return new snippetModel({
                _id: mongoose.Types.ObjectId(),
                language,
                title,
                body
            }).save()
        },
        deleteSnippet: (_, _id) => {
            return snippetModel.findById(_id).then(snippet => snippet.remove())
        }
    }
}


// Combine schema and resolvers
var executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

var routeHandler = graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
})

module.exports = routeHandler
