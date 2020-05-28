import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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

/**
 * Moves an item from one list to another list.
 */
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

      //get drafts
      fetch('http://localhost:1337/drafts', fetchConfig)
      .then(res => res.json())
      .then(drafts => this.setState({drafts}))

      //get edited articles
      fetch('http://localhost:1337/edited-articles', fetchConfig)
      .then(res => res.json())
      .then(editing => this.setState({editing}))

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

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.state[source.droppableId],
                source.index,
                destination.index
            );

            let state = { [source.droppableId]: items };

            this.setState(state);
        } else {
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

