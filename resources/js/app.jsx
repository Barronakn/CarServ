import './bootstrap';
import '../css/app.css';
import "../css/nav.css"
import "../css/header.css"
import "../css/about.css"
import "../css/footer.css"
import "../css/services.css"
import "../css/contact.css"
import "../css/technicians.css"
import "../css/testimonial.css"
import "../css/booking.css"
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = 'CarServ';

createInertiaApp({
    title: () => `${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
