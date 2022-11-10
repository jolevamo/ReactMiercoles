import './Home.css'
import '../Footer/Footer.js'
export function Home (){

    return(
        <>
            <img src="https://firebasestorage.googleapis.com/v0/b/reactmiercoles.appspot.com/o/Banner.jpg?alt=media&token=10c6ec90-7970-4c33-b49b-3c9b41d4c429" alt ="banner" className="w-100 img-fluid" /> 

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Cuarteto de Nos</h1>
                            <p>
                            El Cuarteto de Nos (estilizado como Cuarteto de Nos) es una banda uruguaya de rock alternativo y rap rock con elementos pop, electrónica y fusión de varios géneros latinoamericanos, formado en 19801​ en Montevideo (Uruguay). Está integrada por el cantante y guitarrista Roberto Musso, el bajista y corista Santiago Tavella, el baterista Álvaro Pintos, el guitarrista y corista Gustavo Antuña y el tecladista Santiago Marrero.
                            En 2020 inauguraron un podcast donde interactúan con diferentes personalidades, intercambiando ideas y visiones de las letras y sus creaciones, lo cual marca una vez más que esta banda tiene una visión muy avanzada de cómo y qué comunicar.
                            </p>
                            <hr/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/reactmiercoles.appspot.com/o/CuartetoenVivo.jpg?alt=media&token=0bf15474-b268-437c-b7ed-bd43619b716a" className="w-100 img-fluid" alt="live" />
                        </div>
                        <div className="col-12 col-md-4 align-self-center">
                            <p>
                            El Cuarteto de Nos es el décimo álbum de la banda de rock uruguaya El Cuarteto de Nos, el cual es una recopilación de la mayoría de sus éxitos, reversionados y mejorados. Además incluye tres canciones nuevas (Hay Que Comer, No Quiero Ser Normal, Fui Yo). Fue lanzado en 2004 bajo el sello Bizarro Records.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}