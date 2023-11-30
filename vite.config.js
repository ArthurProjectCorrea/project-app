import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel(['resources/js/app.js']),
        vue({
            template: {
                transformAssetUrls: {
                    // O plugin Vue irá reescrever URLs de ativos, quando referenciados
                    // em componentes de arquivo único, para apontar para a web do Laravel
                    // servidor. Definir isso como `null` permite o plugin Laravel
                    // para reescrever URLs de ativos para apontar para o Vite
                    // servidor em vez disso.
                    base: null,

                    // O plugin Vue irá analisar URLs absolutos e tratá-los
                    // como caminhos absolutos para arquivos no disco. Definir isso para
                    // `false` deixará URLs absolutos intocados para que possam
                    // referencie ativos no diretório público conforme esperado.
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
