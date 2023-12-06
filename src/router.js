
let routes = {};
let rootElement = '';

export const setRootEl = (newRootElement) => {
    rootElement = newRootElement;
};

export const setRoutes = (newRoutes) => {
    routes = newRoutes;
};

export const navigateTo = (pathname) => {
    const viewFunction = routes[pathname];
    if (viewFunction) {
        rootElement.innerHTML = '';
        rootElement.appendChild(viewFunction());
    } else {
        // Manejar ruta no encontrada
    }
};