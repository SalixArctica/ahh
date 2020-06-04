import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Container from '../components/Container'
import Grid from '../components/Grid'
import { getUser } from '../services/auth'
import EditingCard from '../components/editingCard'
import Button from '../components/Button';
import { navigate } from 'gatsby' 

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

//Moves an item from one list to another list.
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
});

export default class App extends Component {
    state = {
        drafts: [],
        editing: [],
        published: []
    };

    componentDidMount = () => {

      let fetchConfig = {
        type: 'GET',
        headers: {
          "Authorization": `Bearer ${getUser().jwt}`
        }
      }

        //get drafts and drafts in editing
        fetch('http://localhost:1337/drafts', fetchConfig)
        .then(res => res.json())
        .then(drafts => {
            let editing = drafts.filter(draft => draft.editing);
            let filteredDrafts = drafts.filter(draft => !draft.editing)
            this.setState({
                editing,
                drafts: filteredDrafts
            })
        })




      //get published articles
      fetch('http://localhost:1337/published-articles', fetchConfig)
      .then(res => res.json())
      .then(published => this.setState({published}))
    }

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        //reordered within a list
        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.state[source.droppableId],
                source.index,
                destination.index
            );

            let state = { [source.droppableId]: items };

            this.setState(state);
        } 
        //moved to a different list
        else {
            

            //update the api about the move
            let movedArticle = this.state[source.droppableId][source.index];



            //check if its an article is being published or moved in/out of editing
            if(destination.droppableId === 'published') {

                if(!window.confirm(`Are you sure you want to publish, "${movedArticle.title}"?`)) {
                    return
                }

                movedArticle.publish_date = new Date().toISOString();

                fetch('http://localhost:1337/published-articles/', {
                    method: 'POST',
                    headers: {
                        "Authorization": `Bearer ${getUser().jwt}`
                    },
                    body: JSON.stringify(movedArticle)
                })
                .then(res => {
                    if(res.status === 200) {
                        fetch('http://localhost:1337/drafts/' + movedArticle.id, {
                            method: 'DELETE',
                            headers: {
                            "Authorization": `Bearer ${getUser().jwt}`
                            },
                        })
                    }
                })
                .catch(err => console.error);

            } else {

                destination.droppableId === 'editing' ? movedArticle.editing = true : movedArticle.editing = false;

                if(source.droppableId === 'published') {

                    fetch('http://localhost:1337/drafts/', {
                        method: 'POST',
                        headers: {
                            "Authorization": `Bearer ${getUser().jwt}`
                        },
                        body: JSON.stringify(movedArticle)
                    })
                    .then(res => {
                        if(res.status === 200) {
                            fetch('http://localhost:1337/published-articles/' + movedArticle.id, {
                                method: 'DELETE',
                                headers: {
                                "Authorization": `Bearer ${getUser().jwt}`
                                },
                            })
                        }
                    })
                    .catch(err => console.error);
                } else {

                    fetch('http://localhost:1337/drafts/' + movedArticle.id,{
                        method: 'PUT',
                        headers: {
                            "Authorization": `Bearer ${getUser().jwt}`
                        },
                            body: JSON.stringify(movedArticle)
                    })
                    .then(res => console.log(res))
                    .catch(err => console.error)
                }
            }

            


            //handle local state
            const result = move(
                this.state[source.droppableId],
                this.state[destination.droppableId],
                source,
                destination
            );

            this.setState({
                [source.droppableId]: result[source.droppableId],
                [destination.droppableId]: result[destination.droppableId],
            });
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Container>
                <Grid col={getUser().user.role.type === 'editor' ? 3 : 2}>
                <div style={{margin: '1rem'}}>
                    <h3 style={{borderBottom: '5px solid orange', marginBottom: '0'}}>Drafts</h3>
                    <Droppable droppableId="drafts">
                        {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.drafts.map((item, index) => (
                                <EditingCard data={item} index={index}/>
                            ))}
                            {provided.placeholder}
                            <Button color='lightgreen' onClick={() => navigate('/admin/editor')}>
                                + New
                            </Button>
                        </div>
                        )}
                    </Droppable>
                </div>
                <div style={{margin: '1rem'}}>
                  <h3 style={{borderBottom: '5px solid yellow', marginBottom: '0'}}>In Editing</h3>
                  <Droppable droppableId="editing">
                      {(provided, snapshot) => (
                          <div
                              ref={provided.innerRef}
                              style={getListStyle(snapshot.isDraggingOver)}>
                              {this.state.editing.map((item, index) => (
                                  <EditingCard data={item} index={index}/>
                              ))}
                              {provided.placeholder}
                          </div>
                      )}
                  </Droppable>
                </div>
                {getUser().user.role.type === 'editor' ? (
                    <div style={{margin: '1rem'}}>
                    <h3 style={{borderBottom: '5px solid lightgreen', marginBottom: '0'}}>Published</h3>
                    <Droppable droppableId="published">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {this.state.published.map((item, index) => (
                                    <EditingCard data={item} index={index}/>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    </div>
                ) : null}
                </Grid>
              </Container>
            </DragDropContext>
        );
    }
}

