import './Button.css';

function Button({ children, variant = 'cta', type = 'button', onClick }) {
  return (
    <button className={`button button--${variant}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
