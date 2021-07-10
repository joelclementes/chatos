import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <title>Chato's Hamburguesas y más</title>

            {/* SEO */}
            <meta name="title" content="Chato's Hamburguesas y más" />
            <meta name="author" content="Chato's" />
            <meta name="description" content="Hamburguesas al carbón en Dos Ríos Alitas Boneless Hotdogs" />
            <meta name="keywords" content="chatos, chato's, hamburguesas, hot dog, hotdogs, alitas, boneless, papas, nachos" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="og:title" content="Chato's hamburguesas | Creando momentos para compartir"></meta>
            <meta name="og:image" content="/image/LogoChatos.jpeg"/>
            <meta name="og:description" content="Disfruta hamburguesas en familia sin salir de casa - pide tu hamburquesa Chato's por WhatsApp"></meta>

            {/* Para la barra de progreso cuando cambia de página */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>

            {/* La tipografía */}
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Raleway:wght@400;500;600&display=swap" rel="stylesheet" />
            {/* <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap" rel="stylesheet"/> */}

        </Head>
        <body>
          <Main />
          <NextScript />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument