import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EventContext } from '../context/eventContext';
import DeleteEvent from './deleteEvent';
import EditEvent from './editEvent';
import { Stack, Button, background } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const EventDetails = () => {
    const { id } = useParams();
    const { state, dispatch } = useContext(EventContext);
    const { events } = state;
    const [deletedEvent, setDeletedEvent] = useState(null);

    const event = events.find(event => event.id === id);
    
    const handleDelete = (deletedEvent) => {
        setDeletedEvent(deletedEvent); // Almacena el evento antes de eliminarlo
        dispatch({ type: 'DELETE_EVENT', id: id });
    };

    if (event) {
        // Manejar el caso en el que se encuentra el evento con el ID dado
        return (
            <div>
                <h1>Detalles del Evento</h1>
                <br />
                <br />
                <div key={event.id}>
                    <p>Nombre: {event.name}</p>
                    <p>Fecha: {event.date}</p>
                    <p>Lugar: {event.place}</p>
                    <p>Número de personas: {event.numberOfPeople}</p>
                    <p>Tema: {event.theme}</p>
                </div>
                <br /><hr />
                {deletedEvent && (
                    <div>
                        <h2>Evento Eliminado</h2>
                        <p>El evento "{deletedEvent.name}" ha sido eliminado correctamente.</p>
                    </div>
                )}
                <DeleteEvent handleDelete={handleDelete} />
                <br /><hr />
                <EditEvent/>

                <br /><br />
                <Link to="/"><button>PAGINA PRINCIPAL</button></Link>
                <br /><br />
            </div>
        );
    } else {
        return (
            <div>
                <h1>EVENTO ELIMINADO EXITOSAMENTE</h1>
                <p>puedes irte a la lista de eventos precionando en el boton de abajo</p>
                <br /><br />
                <Stack direction='row' spacing={10}>
            <Link to="/">
                <Button colorScheme='teal' variant='solid'>
                    PAGINA PRINCIPAL 🏡
                </Button>
            </Link>
              </Stack>
            </div>
        );
    }
}

export default EventDetails;
