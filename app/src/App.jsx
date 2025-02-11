import './App.css'
import './App.css'
import React from "react";

class App extends React.Component {
  state = {
    Personne: {
      fullName: "Kheniene Ghada",
      bio: "Développeuse web passionnée",
      imgSrc: "/ghada.svg",
      profession: "Développeuse Web",
    },
    montre: false,
    timeElapsed: 0,
  };

  interval = null; // Stocke l’ID du timer

  handleClick = () => {
    this.setState((prevState) => {
      if (!prevState.montre) {
        // Si on affiche, on réinitialise le temps et on démarre le timer
        return { montre: true, timeElapsed: 0 };
      } else {
        // Si on cache, on arrête le timer
        clearInterval(this.interval);
        return { montre: false };
      }
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.montre && !prevState.montre) {
      // Si on vient d'afficher la carte, on démarre le timer
      this.interval = setInterval(() => {
        this.setState((prev) => ({ timeElapsed: prev.timeElapsed + 1 }));
      }, 1000);
    } else if (!this.state.montre && prevState.montre) {
      // Si on vient de cacher la carte, on arrête le timer
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Stoppe le timer proprement avant que le composant disparaisse
  }

  render() {
    return (
      <div className="parent">
        <button onClick={this.handleClick}>
          <span>{this.state.montre ? "Cacher" : "Afficher"}</span>
        </button>

        {this.state.montre && (
          <div className="card">
            <div className="content-box">
              <span className="card-title">{this.state.Personne.fullName}</span>
              <p className="card-content">{this.state.Personne.bio}</p>
              <span className="see-more">{this.state.Personne.profession}</span>
              <span className="see-more">
                Temps écoulé : {this.state.timeElapsed} s
              </span>
            </div>
            <div className="date-box">
              <img src={this.state.Personne.imgSrc} alt="My Image" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
