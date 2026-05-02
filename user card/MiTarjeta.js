class MiTarjeta extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const nombre = this.getAttribute('nombre') || "Usuario";
        const puesto = this.getAttribute('puesto') || "Sin puesto";
        const color = this.getAttribute('color') || "#333";

        this.render(nombre, puesto, color);
    }

    render(nombre, puesto, color) {
        this.shadowRoot.innerHTML = `
        <style>
            .card {
                background: white;
                width: 250px;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                border-top: 8px solid ${color};
                margin: 10px;
                text-align: center;
            }
            h2 { margin: 0; color: #333; }
            p { color: #666; font-style: italic; }
            button {
                background: ${color};
                color: white;
                border: none;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
            }
        </style>
        <div class="card">
            <h2>${nombre}</h2>
            <p>${puesto}</p>
            <button onclick="alert('Conectando con ${nombre}...')">Contactar</button>
        </div>
        `;
    }
}

customElements.define('mi-tarjeta', MiTarjeta);