rm -fR assets/*

esbuild node_modules/es-module-shims/dist/es-module-shims.js \
    --platform=browser \
    --bundle \
    --format=esm \
    --minify | gzip | base64 > assets/es-module-shims@2.6.2.js.gz.b64

esbuild node_modules/@observablehq/runtime/src/index.js \
    --platform=browser \
    --bundle \
    --format=esm | gzip | base64 > assets/@observablehq_runtime@6.0.0.js.gz.b64

esbuild node_modules/@observablehq/stdlib/src/index.js \
    --platform=browser \
    --bundle \
    --format=esm | gzip | base64 > assets/@observablehq_stdlib@5.8.8.js.gz.b64

esbuild node_modules/@observablehq/inspector/src/index.js \
    --platform=browser \
    --bundle \
    --format=esm | gzip | base64 > assets/@observablehq_inspector@5.0.1.js.gz.b64

curl https://cdn.jsdelivr.net/npm/marked@0.3.12/marked.min.js | gzip | base64 > assets/marked@0.3.12.min.js.gz.b64


ls -ll assets/