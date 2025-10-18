rm -fR assets/*
esbuild node_modules/@observablehq/runtime/src/index.js \
    --platform=browser \
    --bundle \
    --format=esm | gzip | base64 > assets/@observablehq_runtime@6.0.0.js.gz.b64

esbuild node_modules/es-module-shims/dist/es-module-shims.js \
    --platform=browser \
    --bundle \
    --format=esm \
    --minify | gzip | base64 > assets/es-module-shims@2.6.2.js.gz.b64

ls -ll assets/