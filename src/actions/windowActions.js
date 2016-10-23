export const MINIMIZE_WINDOW = 'MINIMIZE_WINDOW';
export const MAXIMIZE_WINDOW = 'MAXIMIZE_WINDOW';
export const CLOSE_WINDOW = 'CLOSE_WINDOW';

export const minimizeWindow = () => { return {type: MINIMIZE_WINDOW}; };
export const maximizeWindow = () => { return {type: MAXIMIZE_WINDOW}; };
export const closeWindow = () => { return {type: CLOSE_WINDOW}; };
