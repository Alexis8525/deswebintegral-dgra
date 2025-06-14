    import NavBar from '../componentes/NavBar';
    function App() {
    return(
        <>
      <NavBar />
      <div className="container mt-5">
        <h2 className="text-primary">¡Bienvenido a MiSitioWeb!</h2>
        <hr />
        <p>
          Esta es una aplicación web construida con <strong>React</strong> y <strong>Bootstrap</strong>. Aquí podrás encontrar información sobre nuestros servicios, conocer más sobre nosotros y ponerte en contacto si lo necesitas.
        </p>
        <p className="mt-4">
          Explora el menú de navegación para comenzar.
        </p>
      </div>
    </>
    )


    }


    export default App;