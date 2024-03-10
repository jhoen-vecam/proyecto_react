import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, background } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';


const HomePage = () => {
    return (
        <div >
            <h1 >Bienvenido al Sistema de Gestión de Eventos</h1> <br />
            <p>Esta es la página de inicio del sistema de gestión de eventos. Puede navegar a diferentes secciones utilizando los enlaces de navegación</p>
            <br />
            <br />
        
            <br />
            <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <Stack  direction='row' spacing={10}>
               <Link to="/events"> <Button  colorScheme='teal' variant='solid'>
                Ver eventos 👁️ 
                </Button></Link>
                
                <Link to="/event/create">
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                🔨 Crear nuevo evento 
                </Button></Link>
            </Stack>
        </div>
            </div>
    );
};

export default HomePage;
