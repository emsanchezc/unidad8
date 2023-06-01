import { Card as CardBootstrap } from 'react-bootstrap';

const CardEstilo = ({ children, style, ...props }) => {

    return (
        <CardBootstrap style={{ width: '18rem', ...style }} {...props}>
            {children}
        </CardBootstrap>
    );

};

CardEstilo.Header = CardBootstrap.Header;
CardEstilo.Body = CardBootstrap.Body;
CardEstilo.Title = CardBootstrap.Title;
CardEstilo.Text = CardBootstrap.Text;

export default CardEstilo;