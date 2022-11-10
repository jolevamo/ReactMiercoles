export function Integrantes (){

    let integrantes = [
        {
            nombre:"Roberto Daniel Musso Focaccio",
            instrumento:"Vocalista",
            edad:"59 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/reactmiercoles.appspot.com/o/RobertoMusso.jpg?alt=media&token=a4b66bfb-9e12-4b66-a88a-bb560d0e6243"
        },
        {
            nombre:"Álvaro Pintos",
            instrumento:"Baterista",
            edad:"58 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/reactmiercoles.appspot.com/o/Alvin.jpg?alt=media&token=50f41a69-b144-45f0-9a02-267dcb4081c3"
        },
        {
            nombre:"Gustavo Antuña",
            instrumento:"Guitarrista",
            edad:"52 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/reactmiercoles.appspot.com/o/GustavoAntu%C3%B1a.jpg?alt=media&token=857d4541-b4fd-458b-92b1-c98b025141ea"
        },
        {
            nombre:"Santiago Marrero",
            instrumento:"Pianista",
            edad:"36 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/reactmiercoles.appspot.com/o/SantiagoMarrero.jpg?alt=media&token=b4f1cc2d-efac-4bb7-93fc-20715645b9cf"
        },
        {
            nombre:"Santiago Tavella",
            instrumento:"Bajista",
            edad:"61 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/reactmiercoles.appspot.com/o/SantiTavella.jpg?alt=media&token=aaab83ec-e8ce-43d1-8391-f171af1e8102"
        }
    ]



    return(
        <div className="row row-cols-1 row-cols-md-5 g-0 mt-5">

            {
                integrantes.map(function(integrante){
                    return(
                        <>
                            <div className="col mt-3">
                                <div className="card h-100">
                                    <img src={integrante.fotografia} alt={integrante.nombre} className="img-fluid w-100"/>
                                    <h1 className="text-center fw-bold">{integrante.nombre}</h1>
                                    <h2 className="text-center">{integrante.instrumento}</h2>
                                    <h4 className="text-center">{integrante.edad}</h4>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>

    )
}