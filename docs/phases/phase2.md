# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* ProjectsIndex
  - ProjectsIndexItem
* ProjectsForm

### Stores
* Project

### Actions
* ApiActions.receiveAllProjects -> triggered by ApiUtil
* ApiActions.receiveSingleProject
* ApiActions.deleteProject
* ProjectActions.fetchAllProjects -> triggers ApiUtil
* ProjectActions.fetchSingleProject
* ProjectActions.createProject
* ProjectActions.editProject
* ProjectActions.destroyProject

### ApiUtil
* ApiUtil.fetchAllProjects
* ApiUtil.fetchSingleProject
* ApiUtil.createProject
* ApiUtil.editProject
* ApiUtil.destroyProject

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
