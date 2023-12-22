
let routes = {};
let rootElement = '';

export const setRootEl = (newRootElement) => {
    rootElement = newRootElement;
};

export const setRoutes = (newRoutes) => {
  if (typeof newRoutes === "object") {
    if(newRoutes["/error"]){
      routes = newRoutes;
    }
  }
};

export const renderView = (pathname) => {
    const root = rootElement;
    root.innerHTML = '';
    if (root[pathname]) {
      const template = routes[pathname]();
        
        root.appendChild(template);
    } else {
        root.appendChild["/error"];
    }
  };

export const navigateTo = (pathname, props={}) => {
  const URLvisited = window.location.hostname + pathname;
  history.pushState({}, "", URLvisited);
  renderView(pathname);  
}

export const URLChange = (location) => {
  renderView(location);
}
