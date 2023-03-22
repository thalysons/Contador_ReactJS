// componente de classe (class component)

import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    count: 0
  };

  // 1 - O contador não pode chegar abaixo de 0:

  Subtracao = () => {
    if (this.state.count <= 0) {
      this.setState({
        count: this.state.count
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  // 2 - O contador não pode chegar acima de 10:

  Soma = () => {
    if (this.state.count >= 10) {
      this.setState({
        count: this.state.count
      });
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  render() {
    return (
      <>
        <section class="mainSection">
          <section class="buttonSection">
            <button>—</button>
            <button>▢</button>
            <button>X</button>
          </section>

          <h1>CONTADOR</h1>
          <h2>{this.state.count}</h2>
          <section class="mathSection">
            <button onClick={this.Soma}>+</button>
            <button onClick={this.Subtracao}>-</button>
          </section>
        </section>
      </>
    );
  }
}

export default App;
