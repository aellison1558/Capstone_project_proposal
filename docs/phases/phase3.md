# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Backing
* Category
* Comment
* Tag
* Tagging
* Update

### Controllers
* Api::UpdatesController (create, destroy, index)
* Api::CommentsController (create, destroy, index)

### Views
* updates/index.json.jbuilder
* comments/index.json.jbuilder

## Flux
### Views (React Components)
* UpdatesIndex
  - UpdateIndexItem
* UpdateForm
* CommentsIndex
  - CommentIndexItem
* CommentForm
* SearchIndex

### Stores
* Update
* Comment

### Actions
* ApiActions.receiveAllUpdates -> triggered by ApiUtil
* ApiActions.receiveSingleUpdate
* ApiActions.deleteUpdate
* UpdateActions.fetchAllUpdates -> triggers ApiUtil
* UpdateActions.fetchSingleUpdate
* UpdateActions.createUpdate
* UpdateActions.destroyUpdate

* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.receiveSingleComment
* ApiActions.deleteComment
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.fetchSingleComment
* CommentActions.createComment
* CommentActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllUpdates
* ApiUtil.fetchSingleUpdate
* ApiUtil.createUpdate
* ApiUtil.destroyUpdate

* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.destroyComment

## Gems/Libraries
