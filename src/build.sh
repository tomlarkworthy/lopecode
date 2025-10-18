rm -fR assets/*
esbuild node_modules/@observablehq/runtime/src/index.js \
    --platform=browser \
    --bundle \
    --format=esm \
    --minify | gzip | base64 > assets/@observablehq_runtime@6.0.0.js.gz.b64

ls -ll assets/