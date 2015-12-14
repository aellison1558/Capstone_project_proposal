# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Backing
* Category
* Comment

### Controllers
* Api::CommentsController (create, destroy, index)

### Views
* comments/index.json.jbuilder

## Flux
### Views (React Components)

* CommentsIndex
  - CommentIndexItem
* CommentForm
* SearchIndex

### Stores
* Comment

### Actions

* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.receiveSingleComment
* ApiActions.deleteComment
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.fetchSingleComment
* CommentActions.createComment
* CommentActions.destroyComment

### ApiUtil

* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.destroyComment

## Gems/Libraries
