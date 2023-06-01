import React from 'react';
import { Modal as ModalBootstrap } from 'react-bootstrap';

const modalStyles = {
    warning: {
        header: { backgroundColor: 'orange', color: 'white' },
        body: { backgroundColor: 'yellow', color: 'black' },
    },
    danger: {
        header: { backgroundColor: 'red', color: 'white' },
        body: { backgroundColor: 'pink', color: 'black' },
    },
    success: {
        header: { backgroundColor: 'green', color: 'white' },
        body: { backgroundColor: 'lightgreen', color: 'black' },
    },
};

const ModalEstilo = ({ children, type, ...props }) => {

    const styles = modalStyles[type] || {};

    const estiloChildren = React.Children.map(children, (child) => {
        if (child.type === ModalBootstrap.Header) {
            return React.cloneElement(child, { style: { ...styles.header } });
        }
        if (child.type === ModalBootstrap.Body) {
            return React.cloneElement(child, { style: { ...styles.body } });
        }
        return child;
    });

    return (
        <ModalBootstrap {...props}>
            {estiloChildren}
        </ModalBootstrap>
    );


};

ModalEstilo.Header = ModalBootstrap.Header;
ModalEstilo.Body = ModalBootstrap.Body;
ModalEstilo.Title = ModalBootstrap.Title;

export default ModalEstilo;