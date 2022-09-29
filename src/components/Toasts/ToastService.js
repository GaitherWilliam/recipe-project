import React, { createContext, useContext, useState } from 'react';
import Toast from './Toast';
import './ToastParent.css';

const ToastContext = createContext(null);
var id = 1;

export function ToastProvider({ children }) {

    const [toasts, setToasts] = useState([]);

    function removeToast(id) {
        setToasts(toasts => {
            return toasts.filter(t => {
                return t.id != id;
            });
        });
    }

    return (
        <ToastContext.Provider value={{ toasts, setToasts }}>
            <ToastMessenger toasts={toasts} removeToast={removeToast} />
            {children}
        </ToastContext.Provider>
    );
}

export function useToasts() {

    var { toasts, setToasts } = useContext(ToastContext);

    function addToast(toast) {
        setToasts(toasts => {
            return [...toasts, { id: id++, ...toast }];
        });
    }

    return {
        success: (message, summary) => {
            let status = 'success';
            addToast({ message, summary, status, sticky: false });
        },
        clear: () => {
            setToasts([]);
        }
    }
}

function ToastMessenger({ toasts, removeToast }) {

    return (
        <div className="toast-parent">
            {toasts.map((t) => (
                <Toast key={t.id}
                    {...t}
                    removeToast={removeToast} />
            ))}
        </div>
    );
}
