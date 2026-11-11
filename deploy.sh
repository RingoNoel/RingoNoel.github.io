#!/usr/bin/env bash
# Push the site to GitHub. Run after the empty repo exists on github.com.
set -euo pipefail
cd "$(dirname "$0")"

REMOTE="git@github.com:RingoNoel/RingoNoel.github.io.git"

git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE"
git push -u origin main

echo
echo "pushed. Next: Actions should start on its own."
echo "watch: https://github.com/RingoNoel/RingoNoel.github.io/actions"
