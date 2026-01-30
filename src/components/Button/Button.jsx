import './Button.css';

function Button({ children, variant = 'cta', type = 'button' }) {
  return (
    <button className={`button button--${variant}`} type={type}>
      {children}
    </button>
  );
}

export default Button;
