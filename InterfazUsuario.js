
class InterfazUsuario {
  constructor() {}

  async mostrarOrdenes() {
    try {
      const ordenes = await this.negocioSastreria.obtenerOrdenes();

      console.log("Ordenes de Trabajo:");
      ordenes.forEach((orden, index) => {
        console.log(`${index + 1}. Tipo Terno: ${orden.tipoTerno}, Color: ${orden.color}, Talla: ${orden.talla}, Precio Total: ${orden.precioTotal}`);
      });
    } catch (error) {
      console.error("Error al obtener órdenes:", error.message);
    }
  }

  async registrarOrden(tipoTerno, color, talla, precioTotal) {
    try {
      await this.negocioSastreria.crearOrden(tipoTerno, color, talla, precioTotal);

      console.log("Orden registrada con éxito.");
    } catch (error) {
      console.error("Error al registrar la orden:", error.message);
    }
  }
}

module.exports = InterfazUsuario;

