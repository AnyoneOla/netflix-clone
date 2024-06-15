import './Poster.css'

export default function Poster({img, title, desc}){

    return (
        <div id="background-container" >
            <div className='main-photo'>
                <img className="posterImg" src={img} />
                {/* <img className="posterImg" src='https://image.tmdb.org/t/p/original/5cCfqeUH2f5Gnu7Lh9xepY9TB6x.jpg' /> */}
                <div className='poster-title' style={{color:'white'}}>{title}</div>
                <div className='poster-description'>
                {desc.slice(0,200) + '...'}
                </div>
                <div className='poster-buttons'>
                    <div className='poster-btn'>
                        <div>
                            <img style={{height:'20px', width:'20px', marginLeft:'10px', marginRight:'10px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVR4nO2bPYsTURSGjyJqoSKJSe7znuA0wY8RtLAStLIQsfIPCFrYivoHBC0stbHX0s5WYYWtt7EVUdDCYkUbUVTckSEJExYFXQkkc+4DbzXVebjD3HvuGbNMJpPJZDJbodPp7HP34ymlo2VZ7rQopJR6wEPgq6SqDvARuNPtdvdam3H3IfBuWvjm1M+Ai9ZWgGd/Kn6TiCfAQWsTg8Hg2N8UP5PPkm6a2Q5rA+5+6R8FTFfDC0mnbNlx9+tbETDJT+BBURT7bVmRdOM/BEzzvl5JFlhANXktngNHLKoAjSV8AW6NRqNdFlGAGhEvJZ21qAI0zoakR/Uu04IKqGa21FfNbJtFFKAmqyml0gILqIDvku4WRbHbIgpQI+IVcC6sADUiHvf7/UFYARpL+ARcM7PtIQWoyRpwMrKAStIPSfd7vd6eqAKqSV4DZyILqIBv7n4hrACNsz7XpqwWX0CdK9EF3MsCgq+Ay5EFrM91T6AF/wymlM7PrfgFF/AGOG3zRosnIPRWeC3kYYjIx2GiNkSI2hIjeFN0NWRbnMAXIxthr8aIejlK5OtxYEXSYVsmFH1ExqMPSXn0MbmUUhl6ULJG0tOwo7I1w+HQgbdhh6VrgAO/GZf/ANxu/bj8LHUryt1PSDoU6oeJTCaTyWSsFfwC9tdwrkzSdkgAAAAASUVORK5CYII=" />
                        </div>
                        <div style={{paddingRight:'20px'}}>
                            Play
                        </div>
                    </div>

                    <div className='poster-btn' style={{backgroundColor:'rgba(120,120,120,0.8)'}}>
                        <div>
                            <img style={{height:'20px', width:'20px', marginLeft:'10px', marginRight:'10px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nLWVzS5DURDH764LYmeBEqHUStj1IWhsxRuosvDxHpYNNlatj7Ap3kRFPAS18dH85M8cOcW5p+L6J5PcOfc/M+fMmZmTJCkAxoAqcAW0gEeTlq2tAaNpPkKOR4Aa8EocHeAIGO/V+RLQNuMnoA4sA0Wgz6Roaw3jCA9AOeZ8w3YknAATPWxoEjj1TrOetvOOpWWzp+N6ALbMvvPtJEDeS0vQOTCqi0/5v+2la9j/ceDSkmI8a6eTzKfwzszXnl+Kr3ZZExkEKJgv8fKJ1blQDxk5AEOSJAIrW6Ei5dKU5YjRHHBnMhfhrpjPppRbU6YiRiWvuUoRrvpEaCVe9fRnGKDfeO3/CjBgvHspN6ZMZxhgxnjXv7nk0i8CdF2yRq7QyDDAsfFWXfu7Rpv8awA+Gu0ZeHlvNFvcN8PTDAKcG6f29YHRgBK2AoY5jRKTXICz46rnW8drxHrjdju0wxDMubNfDJHWvQdHU7EQ9Nidc5cW2VZjBmUvXc82uFR2qm11qETfWlO1iOPSshDbkAsyCOxaJcSgXR/2MmV/CqSXrgJcqCttrEj03VSdf5ZiAG+p1K0OVXQUIQAAAABJRU5ErkJggg==" />
                        </div>
                        <div style={{paddingRight:'20px', color:'white'}}>
                            More Info
                        </div>
                    </div>
                </div>
                <div className='lower-fading'></div>
            </div>
        </div>
    )
}