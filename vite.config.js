import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./", // Directori root de Vite
  base: "./", // Rutes relatives per als assets
  build: {
    outDir: "dist", 
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        main: path.resolve(__dirname, "App/MainMenu.html"),
        CreaHabitatge: path.resolve(__dirname, "App/CreaHabitatge.html"),
        EditaHab: path.resolve(__dirname, "App/EditaHabitatge.html"),
        Edituser: path.resolve(__dirname, "App/EditUser.html"),
        ElsMeusHabs: path.resolve(__dirname, "App/ElsMeusHabitatges.html"),
        MenuHab: path.resolve(__dirname, "App/MenuHabitatge.html"),
        notiUsuari: path.resolve(__dirname, "App/notificaUsuari.html"),
        Peticio: path.resolve(__dirname, "App/PeticioHabitatge.html"),
        Proposta: path.resolve(__dirname, "App/PropostaHabitatge.html"),
        SelecionaHab: path.resolve(__dirname, "App/SeleccionaHabitatge.html"),
        login: path.resolve(__dirname, "App/Login.html"),
        Contra: path.resolve(__dirname, "App/Contra.html"),
        register: path.resolve(__dirname, "App/Register.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // Per assegurar que els canvis es detecten en alguns entorns
    },
  },
});
