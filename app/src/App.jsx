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
        this.interval = setInterval(() => {
          this.setState((prev) => ({ timeElapsed: prev.timeElapsed + 1 }));
        }, 1000);
        return { montre: true, timeElapsed: 0 };
      } else {
        clearInterval(this.interval);
        return { montre: false };
      }
    });
  };

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
