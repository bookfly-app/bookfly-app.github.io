NPM := $(shell command -v bun 2>/dev/null || command -v pnpm 2>/dev/null || command -v npm 2>/dev/null || command -v yarn 2>/dev/null)

.PHONY: all build deploy

build:
	$(NPM) run build

build-native:
	$(NPM) run tauri build

deploy: build
	touch build/.nojekyll
	touch build/CNAME
	echo "wallflower.land" >> build/CNAME
	git add .
	git commit -m "New build deployment"
	git push
	git push origin `git subtree split --prefix build main`:gh-pages --force
