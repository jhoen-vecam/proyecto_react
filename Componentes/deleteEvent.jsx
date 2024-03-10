import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EventContext } from '../context/eventContext';
import { Stack, Button, background } from '@chakra-ui/react';

const DeleteEvent = () => {
    const { id } = useParams();
    const { state, dispatch } = useContext(EventContext);
    const { events } = state;
    const [deletedEvent, setDeletedEvent] = useState(null);

    const event = events.find(event => event.id === id);

    const handleDelete = () => {
        if (event) {
            setDeletedEvent(event); // Almacena el evento antes de eliminarlo
            dispatch({ type: 'DELETE_EVENT', id: id });
        }
    };

    return (
        <div>
            {deletedEvent && (
                <div>
                    <h2>Evento Eliminado</h2>
                    <p>El evento "{deletedEvent.name}" ha sido eliminado.</p>
                    <p>Puedes volver a la lista de eventos haciendo clic en el siguiente boton:</p>
                   
                    <Link to="/events"><button>Volver a la lista de eventos</button></Link>
                </div>
            )}
            {!deletedEvent && (
                <div >
                    <h2>Eliminar Evento</h2>
                    <p>¿Estás seguro de que quieres eliminar el evento "{event.name}"?</p> <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack  direction='row' spacing={10}><br />
                <Button colorScheme='blue'  onClick={handleDelete}>Eliminar 🗑️</Button>
                    </Stack></div>
                    </div>
            )}
        </div>
    );
};

export default DeleteEvent;
