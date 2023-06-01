import { Button as ButtonBootstrap } from 'react-bootstrap';

const BotonEstilo = ({ children, style, ...props }) => {
    return (
        <ButtonBootstrap style={{...style}} {...props}>
            {children}
        </ButtonBootstrap>
    );
};

export default BotonEstilo;