import { Route, Routes } from 'react-router-dom';
import Event from './pages/Event';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/lessons/:slug" element={<Event />} />
        </Routes>
    );
}

export default Router;
