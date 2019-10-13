import React from 'react';
import isEmpty from 'lodash/isEmpty';

export const handleSession = (data) => {
    let getSession = getSessionData("registeredList");
    if(!isEmpty(getSession)) {
        getSession = JSON.parse(getSession);
        getSession.push(registerDetail);
        setSessionData("registeredList", getSession);
    } else {
        const arr = [];
        arr.push(data);
        setSessionData("registeredList", arr);
    }
}

const setSessionData = (name, sessionData) => {
    sessionStorage.setItem(name, JSON.stringify({ data: sessionData }));
}

export const getSessionData = (name) => {
    const getSession = sessionStorage.getItem(name);
    return getSession;
}