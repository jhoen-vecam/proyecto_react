import React from 'react';
import './App.css' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { EventProvider } from '../context/eventContext';
import EventList from '../Componentes/ListEvents';
import CreateEvent from '../Componentes/createEvent';
import EventDetails from '../Componentes/eventDetails';
import HomePage from '../Componentes/homePage';


function App() {
    return (
        <ChakraProvider>
            <EventProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/events" element={<EventList />} />
                        <Route path="/event/create" element={<CreateEvent />} />
                        <Route path="/event/:id" element={<EventDetails />} />
                    </Routes>
                </Router>
            </EventProvider>
        </ChakraProvider>
    );
}

export default App;
