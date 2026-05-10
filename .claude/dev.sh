#!/bin/sh
# Wrapper to launch `next dev` with nvm-installed node available on PATH.
# Required because the spawning environment (e.g. preview tool) may not have
# nvm sourced, and Turbopack's pooled worker processes need `node` on PATH.
set -e

export PATH="$HOME/.nvm/versions/node/v24.15.0/bin:$PATH"

# Diagnostics to stderr so they show up in preview logs
echo "[dev.sh] PATH=$PATH" >&2
echo "[dev.sh] which node: $(which node 2>/dev/null || echo NOT_FOUND)" >&2
echo "[dev.sh] node --version: $(node --version 2>/dev/null || echo NOT_FOUND)" >&2

cd "$(dirname "$0")/.."
exec node ./node_modules/next/dist/bin/next dev
