import Container from 'react-bootstrap/Container';


export default function Footer() {
  return (
    <Container className="mt-auto d-flex flex-column py-3">
      <a
        className="fs-6"
        href="https://github.com/surikov-k/mindbox-todo"
        target="_blank"
      >
        This project on GitHub
      </a>
      <a
        href="https://t.me/k_surikov"
        target="_blank"
      >
        <svg  className="me-2"
          xmlns="http://www.w3.org/2000/svg"
             width="18"
             height="18"
             data-name="Livello 1"
             viewBox="0 0 240 240">
          <defs>
            <linearGradient id="a"
                            x1="120"
                            x2="120"
                            y1="240"
                            gradientUnits="userSpaceOnUse">
              <stop offset="0"
                    stopColor="#1d93d2"/>
              <stop offset="1"
                    stopColor="#38b0e3"/>
            </linearGradient>
          </defs>
          <circle cx="120"
                  cy="120"
                  r="120"
                  fill="url(#a)"/>
          <path fill="#c8daea"
                d="m81.229 128.772 14.237 39.406s1.78 3.687 3.686 3.687 30.255-29.492 30.255-29.492l31.525-60.89L81.737 118.6Z"/>
          <path fill="#a9c6d8"
                d="m100.106 138.878-2.733 29.046s-1.144 8.9 7.754 0 17.415-15.763 17.415-15.763"/>
          <path fill="#fff"
                d="M81.486 130.178 52.2 120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229 2.1-2.2 6.489-4.523 120.106-45.36 120.106-45.36s3.208-1.081 5.1-.362a2.766 2.766 0 0 1 1.885 2.055 9.357 9.357 0 0 1 .254 2.585c-.009.752-.1 1.449-.169 2.542-.692 11.165-21.4 94.493-21.4 94.493s-1.239 4.876-5.678 5.043a8.13 8.13 0 0 1-5.925-2.292c-8.711-7.493-38.819-27.727-45.472-32.177a1.27 1.27 0 0 1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6 53.821-51.492c.108-.379-.3-.566-.848-.4-3.482 1.281-63.844 39.4-70.506 43.607a3.21 3.21 0 0 1-1.48.09Z"/>
        </svg>
        Contact me
      </a>
    </Container>
  );
}
