import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import { navigate } from 'gatsby'
import { Draggable } from 'react-beautiful-dnd'

const CardBody = styled.div`
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    background-color: white;
    border-radius: 5px;

    & > p {
        margin: .5rem;
    }

    &:hover {
        & button {
            opacity: 1;
        }
    }
`

const Button = styled.button`
    padding: .5rem;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background: ${props => props.color ? props.color : '#2E86C1'};
    color: white;
    cursor: pointer;
    opacity: 0;
    transition: all .1s linear;

    &:hover {
        box-shadow: 1px 1px 2px 2px darkgray;
    }
`

const onEditClick = (data) => {
    navigate('admin/editor?id=' + data.id)
}

export default ({ data, index })=> (
    <Draggable
        key={data.title}
        draggableId={data.title}
        index={index}
    >
        {(provided) => (
            <CardBody
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {data.title}
                <div style={{marginTop: '10px'}}>
                    <Button onClick={() => onEditClick(data)}>Edit</Button>
                    <span>    </span>
                    <Button color='red'>Delete</Button>
                </div>
            </CardBody>
        )}
    </Draggable>
)