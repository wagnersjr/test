import styles from './WhatsAppButton.module.scss';

const WhatsAppButton = ({ phoneNumber = '', message = 'Olá!' }) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16 2.9A13.1 13.1 0 002.9 16c0 2.3.6 4.4 1.7 6.3L2 30l7.8-2.6c1.8.9 3.8 1.3 5.9 1.3A13.1 13.1 0 0016 2.9zm0 23.9c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-4.6 1.5 1.5-4.4-.3-.5a10.9 10.9 0 1118.7-8.1 10.9 10.9 0 01-10.9 10.9zm6-8.2c-.3-.1-1.6-.8-1.9-.9-.3-.1-.6-.1-.8.2s-1 1.2-1.3 1.5c-.2.2-.4.3-.7.1-1.9-.9-3.3-2.5-4.1-4.5-.1-.3 0-.5.1-.7.1-.1.3-.3.4-.4.1-.1.2-.2.3-.4.1-.2.1-.4 0-.6-.1-.1-.8-2-1.1-2.7-.3-.7-.5-.6-.8-.6h-.6c-.2 0-.5 0-.8.3-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.2.3 2 3.2 4.9 4.5.7.3 1.3.5 1.8.6.8.3 1.6.3 2.1.2.7-.1 2.2-.9 2.5-1.8.3-.8.3-1.6.2-1.8-.1-.2-.3-.2-.5-.3z" />
      </svg>
      <span className={styles.label}>Fale conosco</span>
    </a>
  );
};
export default WhatsAppButton


